require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection

db.on('error', (error) => { console.error("Error connecting to DB", error) })

db.once('connected', () => { console.log("Connected to Database") })

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxLength: 30,
        minLength: 3,
        unique: true,
        lowercase: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 30,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minLength: 6,
    }
})

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },  
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
const Account = mongoose.model('Account', accountSchema)

module.exports = {
    User, 
    Account
}