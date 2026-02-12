import React from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full h-20 bg-white flex items-center justify-between p-4 shadow-lg top-0 z-99 fixed ">
      <div className="flex items-center gap-10">
        <div className="flex items-center ">
          <MdOutlineAccountBalanceWallet className="w-10 h-10 text-black p-2 rounded-md " />
          <span className="text-2xl font-extrabold text-black">
            FinanceTracker
          </span>
        </div>
        <div className="flex items-center gap-4 font-semibold text-gray-600 ">
          <a
            className="hover:underline underline-offset-4 decoration-2"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="hover:underline underline-offset-4 decoration-2"
            href="#"
          >
            Analytics
          </a>
          <a
            className="hover:underline underline-offset-4 decoration-2"
            href="#"
          >
            Budgets
          </a>
          <a
            className="hover:underline underline-offset-4 decoration-2"
            href="#"
          >
            Transactions
          </a>
        </div>
      </div>
      <div className="flex items-center gap-5 text-black font-semibold">
        <Button action={()=>{
          navigate("/signin")
        }} label={"Sign In"} btnColor={"transparent"} />
        <Button action={() => {
          navigate("/signup")
        }} label={"Sign up"} btnColor={"black"} textColor="white" />
      </div>
    </div>
  );
};

export default Navbar;
