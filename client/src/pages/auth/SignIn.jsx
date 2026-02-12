import { useState } from 'react'
import Button from '@/components/buttons/Button'
import Breaker from '@/components/Extras/Breaker';
import Input from '@/components/inputs/Input';
import InputBox from '@/components/inputs/InputBox';
import Link from '@/components/links/Link';
import Description from '@/components/texts/Description';
import TitleDescription from '@/components/texts/TitleDescription'
import FormLayout from '@components/layouts/FormLayout';
import { FcGoogle } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa6";



const SignIn = () => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className='flex w-full pt-20 min-h-screen'>
            <div className='w-[50%] bg-blue-300 hidden lg:flex'></div>
            <div className=' w-full lg:w-[50%] flex justify-center px-5 items-center '>
                <FormLayout>
                    <TitleDescription title={"Welcome Back"} description={"Please Sign In to manage your expences."} />

                    <InputBox label={"Email Address"}>
                        <Input type={"text"} placeholder={"Email Address"}
                            value={email}
                            onChange={(elem)=>{
                                setEmail(elem.target.value)
                            }}/>
                    </InputBox>

                    <InputBox label={"Password"}>
                        <Input type={"password"} placeholder={"Password"}
                            value={password}
                            onChange={
                                (elem) => {
                                    setPassword(elem.target.value)
                                }
                            }
                        />
                    </InputBox>

                    <div className='w-full flex justify-end px-1'><Link path="/forget-password" label={"Forget Password"} /></div>

                    <Button label={"Sign In"} LIcon={FaArrowRight}
                        action={() => {
                            console.log(email)
                            console.log(password)
                        }}
                        textColor='white' btnColor='' />

                    <Breaker label={"ON CONTINUE WITH"} />

                    <Button SIcon={FcGoogle} label={"Sign In with Google"} btnColor='transparent' />

                    <div className='flex justify-center'>
                        <Description description={"Don't have an Account?"} />
                        <Link path="/signup" label={"Sign up"} />
                    </div>

                </FormLayout>
            </div>
        </div>
    )
}

export default SignIn
