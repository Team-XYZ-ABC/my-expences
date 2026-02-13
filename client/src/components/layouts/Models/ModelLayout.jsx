import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import useScrollLock from "@/Hooks/LockScroll";

const ModelLayout = ({ OnClose }) => {
  useScrollLock();

  return (
    <div className=" w-full fixed top-0 left-0 z-101 bg-white/50  h-screen backdrop-blur-md">
      <div className="relative">
        <IoMdClose
          onClick={() => {
            OnClose(false);
          }}
          className="fixed top-0 right-0 text-4xl mx-5 mt-2 text-white bg-black"
        />
      </div>
      <div className="flex items-center justify-center h-full">
        <h1>Testing</h1>
      </div>
    </div>
  );
};

export default ModelLayout;
