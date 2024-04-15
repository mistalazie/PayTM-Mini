const express = require('express');
const jwt = require('jsonwebtoken')
const { User, Account } = require('../db');
const { JWT_SECRET } = require('../config/config');
const { signUpSchema, signInSchema, updateSchema } = require('../types');
const { authMiddleware } = require('./middleware');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('User route works');
});

userRouter.post('/signup', async (req, res) => {
    const { success } = signUpSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({ msg: "Invalid inputs" })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if (existingUser) {
        return res.status(411).json({ msg: "Email already taken" })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    const userId = user._id;
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    const token = jwt.sign({
        userId
    }, JWT_SECRET)
    res.json({
        msg: "User created successfully",
        token: token
    })
})

userRouter.post('/signin', async (req, res) => {
    const { success } = signInSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({ msg: 'Invalid inputs' })
    }
    const findUser = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if (!findUser) {
        return res.status(411).json({ msg: "Error while logging in" })
    }
    const userId = findUser._id
    const token = jwt.sign({
        userId
    }, JWT_SECRET)
    res.json({
        token: token
    })
})

userRouter.put('/', authMiddleware, async (req, res) => {
    const { success } = updateSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({ msg: "Please enter information to update" })
    }
    await User.updateOne({ _id: req.userId }, req.body)
    res.json({
        msg: "Updated successfully"
    })
})

userRouter.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = userRouter;
