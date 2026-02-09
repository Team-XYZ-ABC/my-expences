import React from 'react'
import Button from '@components/buttons/Button'
import { IoIosSearch } from "react-icons/io";
import { MdSaveAlt } from "react-icons/md";
import FormLayout from '@components/layouts/FormLayout';
import InputBox from './components/inputs/InputBox';
import Input from './components/inputs/Input';
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Breaker from './components/Extras/Breaker';
import TitleDescription from '@components/texts/TitleDescription';
import Link from '@components/links/Link'
import Description from './components/texts/Description';
import SignIn from './pages/auth/SignIn';







const App = () => {

  function first() {
    console.log("save image")
  }
  function second() {
    console.log("second")
  }
  function third() {
    console.log("third")
  }

  return (
    <div>
      <div className='bg-red-200 w-full h-[65px]'></div>
      <SignIn />
    </div>
  )
}

export default App
