import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import axios from "axios"

export function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    return <div className="flex justify-center bg-sky-400 h-screen">
        <div className="flex flex-col justify-center ">
            <div className="rounded-xl w-96 bg-white h-max text-center p-2 px-4 drop-shadow-lg">
                <Heading label={'Sign up'} />
                <SubHeading label={'Enter your details to create an account'} />
                <InputBox onChange={(e)=>{
                    setFirstName(e.target.value)
                }} label={'First Name'} placeholder={'John'} />
                <InputBox onChange={(e) =>{
                    setLastName(e.target.value);
                }} label={'Last Name'} placeholder={'Doe'} />
                <InputBox onChange={(e) => {
                    setUsername(e.target.value)
                }} label={'Email'} placeholder={'Example@123.com'} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} label={'Password'} placeholder={'123456'} />
                <div className="pt-4">
                    <Button onClick={()=>{
                        axios.post("http://localhost:3000/api/v1/user/signup", {
                            username,
                            password, 
                            firstName, 
                            lastName
                        })
                    }} label={'Sign up'} />
                </div>
                <BottomWarning label={'Already have an account?'} buttonText={'Sign in'} to={'/signin'} />
            </div>
        </div>
    </div>
}