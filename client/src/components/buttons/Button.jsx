import React from "react";

const Button = ({SIcon, LIcon, label, btnColor = "#092640", textColor = "black", action = () => { }}) => {

    return (
        <button
            onClick={() => {
                action();
            }}
            style={{
                backgroundColor: btnColor,
                color: textColor,
            }}
            className={`bg-[#092640] hover:opacity-90 active:scale-99 w-full flex my-4 justify-center items-center rounded-md text-lg py-3.5 
                ${(LIcon || SIcon) && !label ? "aspect-square" : "px-10"} 
                ${btnColor == 'transparent' ? "border border-gray-300" : null}`}
        >
            {SIcon && <SIcon className="mr-2.5"/>}
            {label && label}
            {LIcon && <LIcon className="ml-5"/>}
        </button>
    );
};

export default Button;
