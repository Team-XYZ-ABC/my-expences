import Button from '@/components/buttons/Button'
import Breaker from '@/components/Extras/Breaker';
import Input from '@/components/inputs/Input';
import InputBox from '@/components/inputs/InputBox';
import Link from '@/components/links/Link';
import Description from '@/components/texts/Description';
import TitleDescription from '@/components/texts/TitleDescription'
import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";



const SignIn = () => {
    const [password , setPassword] = useState("")
    const [email , setEmail] = useState("")
    return (
        <div className='flex w-full min-h-[calc(100vh-65px)]'>
            <div className='w-[50%] bg-blue-300 hidden lg:flex'>dw</div>
            <div className=' w-full lg:w-[50%] flex justify-center px-5 items-center '>
                <div className=' w-[448px]  '>
                    <TitleDescription title={"Welcome Back"} description={"Please Sign In to manage your expences."} />
                    <Button SIcon={FaGoogle} label={"Sign In with Google"} btnColor='transparent' />
                    <Breaker label={"ON CONTINUE WITH"} />
                    <InputBox label={"Email Address"}>
                    <Input  type={"text"} placeholder={"Email Address"}
                    value={email}
                     onChange={
                        (elem) =>{
                            setEmail(elem.target.value)
                        }
                    } />
                    </InputBox>
                     <InputBox label={"Password"}>
                    <Input  type={"password"} placeholder={"Password"}
                    value={password}
                     onChange={
                        (elem) =>{
                            setPassword(elem.target.value)
                        }
                    }
                     />
                    </InputBox>
                    <div className='w-full flex justify-end px-1'><Link label={"Forget Password"} /></div>
                    <Button label={"Sign In"} LIcon={FaArrowRight}
                    action={()=>{
                        console.log(email)
                        console.log(password)
                    }}
                     textColor='white' btnColor='' />
                    <div className='flex justify-center'>
                        <Description description={"Don't have an Account?"} />
                        <Link label={"Sign In"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
