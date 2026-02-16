import SignIn from '@pages/auth/SignIn';
import SignUp from '@pages/auth/SignUp';
import Navbar from '@components/Navigations/Navbar';
import {Routes, Route} from 'react-router-dom'
import ForgetPassword from '@pages/auth/ForgetPassword';
import Sidebar from './components/Navigations/Sidebar';
import Bottom from './components/Navigations/Bottom'
import {useState} from "react"






const App = () => {

    const [isSideBarOpen , setIsSideBarOpen] = useState(true)

  return (
    <div>
      <Navbar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
      <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
      <Routes>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/> 
      </Routes>
      <Bottom />
    </div>
  )
}

export default App
