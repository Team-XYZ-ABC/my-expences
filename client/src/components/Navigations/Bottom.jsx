import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { AiFillPlusCircle } from "react-icons/ai";
import { LuNotebookPen } from "react-icons/lu";
import { CgMoreO } from "react-icons/cg";




const Bottom = () => {
    return (
        <div className='h-18 w-full lg:hidden'>
            <div className='h-18 w-full grid lg:hidden grid-cols-5 items-center bg-white border-t border-gray-300 fixed bottom-0'>
               <div className='flex flex-col items-center gap-1'>
                <MdSpaceDashboard className=' text-2xl'/>
                <p className='text-xs sm:text-sm'>Dashboard</p>
               </div>
               <div className='flex flex-col items-center gap-1'>
                <GiExpense className='text-2xl'/>
                <p className='text-xs sm:text-sm'>Expenses</p>
               </div>
               <div className='flex flex-col items-center gap-1'>
                <AiFillPlusCircle className='text-2xl'/>
                <p className='text-xs sm:text-sm'>Actions</p>
               </div>
               <div className='flex flex-col items-center gap-1'>
                <LuNotebookPen className='text-2xl'/>
                <p className='text-xs sm:text-sm'>Ledger</p>
               </div>
               <div className='flex flex-col items-center gap-1'>
                <CgMoreO className='text-2xl'/>
                <p className='text-xs sm:text-sm'>More</p>
               </div>
            </div>
        </div>

    )
}

export default Bottom