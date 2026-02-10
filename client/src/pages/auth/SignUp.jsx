import { useState } from "react";
import Title from "@components/texts/Title";
import FormLayout from "@components/layouts/FormLayout";
import Description from "@components/texts/Description";
import Button from "@/components/buttons/Button";
import { FcGoogle } from "react-icons/fc";
import Breaker from "@/components/Extras/Breaker";
import Input from "@/components/inputs/Input";
import InputBox from "@/components/inputs/InputBox";
import Link from "@/components/links/Link";
import TitleDescription from "@/components/texts/TitleDescription";

const SignUp = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full pt-20 min-h-screen flex  justify-between">
      <div className="w-1/2 bg-blue-500 hidden lg:flex"></div>
      <div className="w-full my-5 flex justify-center items-center lg:w-1/2 bg-white p-5">
        <FormLayout>

          <TitleDescription title={"Create Account"} description={"Track your expenses, stay organized, and manage your money better."} />
          
          <InputBox label={"Full Name"}>
            <Input placeholder={"Enter your name"} value={fullName} onChange={(e)=>{
              setFullName(e.target.value)
            }} type={"text"} />
          </InputBox>

          <InputBox label={"Email Address"}>
            <Input placeholder={"Enter your email"} value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} type={"email"} />
          </InputBox>

          <InputBox label={"Password"}>
            <Input placeholder={"********"} value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }} type={"password"} />
          </InputBox>

          <div className="my-5 flex items-center flex-wrap">
            <input
              className="h-4 w-4 mr-2.5 accent-blue-500"
              type="checkbox"
              name=""
            />
            <Description description={"I agree to the"} />
            <Link label="Terms of Service" />
            <Description description={"and"} />
            <Link label="Privacy Policy." />
          </div>

          <Button label={"Creat Account"} textColor={"white"} />

          {/* <Breaker label={"OR CONTINUE WITH"} /> */}
          <Button SIcon={FcGoogle} label={"Sign in with Google"} btnColor={"transparent"} />
          <div className="flex w-full justify-center">
            <Description description="Already have an account?" />
            <Link label="Sign in" />
          </div>


        </FormLayout>
      </div>

    </div>
  );
};

export default SignUp;