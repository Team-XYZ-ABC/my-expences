import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { GiWallet } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { TbLogout } from "react-icons/tb";
import { AiFillPlusCircle } from "react-icons/ai";


const Sidebar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  return (
    <div className={`h-screen hidden lg:flex flex-col justify-between pt-20 ${isSideBarOpen ? "w-60" : "w-17"} bg-white transition-[width] duration-300 ease-in-out overflow-hidden fixed`}>
      <div className="flex flex-col gap-6 py-6 px-1">
        <div className={`flex items-center text-3xl px-2 text-gray-600 min-w-max gap-2 hover:text-[#2B7FFF] border-l-4 border-transparent hover:border-[#2B7FFF]`}>
          <MdSpaceDashboard className='flex-shrink-0' />
          <p className={`text-lg whitespace-nowrap
  transition-all duration-200
  ${isSideBarOpen ? "opacity-100 ml-2" : "opacity-0 -ml-10"}`}>Dashboard</p>
        </div>
        <div className={`flex items-center  text-3xl px-2 min-w-max text-gray-600 gap-2 hover:text-[#2B7FFF] border-l-4 border-transparent hover:border-[#2B7FFF]`}>
          <SiGoogleanalytics />
          <p className={`text-lg whitespace-nowrap
  transition-all duration-200
  ${isSideBarOpen ? "opacity-100 ml-2" : "opacity-0 -ml-10"}`}>Analytics</p>
        </div>
        <div className={`flex items-center  text-3xl px-2 min-w-max text-gray-600 gap-2 hover:text-[#2B7FFF] border-l-4 border-transparent hover:border-[#2B7FFF]`}>
          <GiWallet />
          <p className={`text-lg whitespace-nowrap
  transition-all duration-200
  ${isSideBarOpen ? "opacity-100 ml-2" : "opacity-0 -ml-10"}`}>Budgets</p>
        </div>
        <div className={`flex items-center  text-3xl px-2 min-w-max text-gray-600 gap-2 hover:text-[#2B7FFF] border-l-4 border-transparent hover:border-[#2B7FFF]`}>
          <GrTransaction />
          <p className={`text-lg whitespace-nowrap
  transition-all duration-200
  ${isSideBarOpen ? "opacity-100 ml-2" : "opacity-0 -ml-10"}`}>Transactions</p>
        </div>
      </div>
      <div className={`flex flex-col gap-6 py-6 px-1`}>
        <div className={`flex items-center text-3xl px-2 min-w-max text-gray-600 gap-2 hover:text-[#2B7FFF] border-l-4 border-transparent hover:border-[#2B7FFF]`}>
          <AiFillPlusCircle />
          <p className={`text-lg whitespace-nowrap
  transition-all duration-200
  ${isSideBarOpen ? "opacity-100 ml-2" : "opacity-0 -ml-10"}`}>Actions</p>
        </div>
        <div className={`flex items-center  text-3xl px-2 min-w-max text-gray-600 gap-2 hover:text-[#2B7FFF] border-l-4 border-transparent hover:border-[#2B7FFF]`}>
          <TbLogout />
          <p className={`text-lg whitespace-nowrap
  transition-all duration-200
  ${isSideBarOpen ? "opacity-100 ml-2" : "opacity-0 -ml-10"}`}>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar