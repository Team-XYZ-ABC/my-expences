import React, { useState } from "react";
import Title from "@/components/texts/Title";
import Description from "@/components/texts/Description";
import FormLayout from "@/components/layouts/FormLayout";
import Input from "@/components/inputs/Input";
import InputBox from "@/components/inputs/InputBox";
import Button from "@/components/buttons/Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgetPassword = () => {
  const [email, setemail] = useState("");
  return (
    <div className="p-20 flex justify-center items-center w-full min-h-screen">
      <FormLayout>
        <Title children="Forget Password" />
        <InputBox label={"Email Address"}>
          <Input
            placeholder={"Enter your email"}
            value={email}
            type={"email"}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </InputBox>
        <Button label={"Forget password"} textColor={"white"} />
        <div className="flex items-center gap-4 justify-center">
          <FaArrowLeftLong />
          <Description FaArrowLeftLong description={"Back to Login"} />
        </div>
      </FormLayout>
    </div>
  );
};

export default ForgetPassword;
