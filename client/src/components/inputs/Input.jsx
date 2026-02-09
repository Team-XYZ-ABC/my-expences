import React, { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Input = ({ placeholder, type = "text", value, onChange }) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    function togglePasswordShow() {
        setIsPasswordShow((prev) => {
            return !prev;
        });
    }

    switch (type) {
        case "password":
            return (
                <div className="relative">
                    {isPasswordShow ? (
                        <IoEyeOffOutline
                            onClick={togglePasswordShow}
                            className="absolute h-6 w-6 top-[50%] -translate-y-[50%] right-5"
                        />
                    ) : (
                        <IoEyeOutline
                            onClick={togglePasswordShow}
                            className="absolute h-6 w-6 top-[50%] -translate-y-[50%] right-5"
                        />
                    )}
                    <input
                        type={isPasswordShow ? "text" : "password"}
                        className="w-full py-4 rounded-md border border-gray-300 px-2.5"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            );
        default:
            return (
                <div>
                    <input
                        type={type}
                        className="w-full py-4 rounded-md border border-gray-300 px-2.5"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            );
    }
};

export default Input;
