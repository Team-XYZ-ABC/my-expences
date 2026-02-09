import React from "react";
// import Title from "@components/texts/Title";
// import FormLayout from "@components/layouts/FormLayout";
// import Description from "@components/texts/Description";
import Button from "@/components/buttons/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Breaker from "@/components/Extras/Breaker";
import Input from "@/components/inputs/Input";
import InputBox from "@/components/inputs/InputBox";
import Description from "@/components/texts/Description";
import Link from "@/components/links/Link";

const SignUp = () => {
  return (
    <div className="w-full min-h-[calc(100vh-60px)] bg-amber-500 flex  justify-between">
      <div className="w-1/2 bg-blue-500 hidden lg:flex"></div>
      <div className="w-full lg:w-1/2 bg-white p-10">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-5xl font-bold">Create your account</h1>
          <Description
            font="m"
            description={
              "Track your expenses, stay organized, and manage your money better."
            }
          />
        </div>

        <div className="flex lg:flex-row lg:gap-5 mt-5 flex-col">
          <Button SIcon={FcGoogle} label={"Google"} btnColor={"transparent"} />
          <Button SIcon={FaApple} label={"Apple"} btnColor={"transparent"} />
        </div>

        <Breaker label={"OR CONTINUE WITH"} />

        <InputBox label={"Full Name"}>
          <Input placeholder={"your name"} type={"text"} />
        </InputBox>

        <InputBox label={"Email Address"}>
          <Input placeholder={"Enter your email"} type={"email"} />
        </InputBox>

        <InputBox label={"Password"}>
          <Input placeholder={"********"} type={"password"} />
        </InputBox>

        <div className="my-10 flex items-center flex-wrap">
          <input
            className="h-6 w-6 mr-2.5 accent-blue-500"
            type="checkbox"
            name=""
          />
          <Description description={"I agree to the"} />
          <Link label="Terms of Service" />
          <Description description={"and"} />
          <Link label="Privacy Policy." />
        </div>

        <Button label={"Creat Account"} textColor={"white"} />
        <div className="flex w-full justify-center">
          <Description description="Already have an account?" />
          <Link label="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
