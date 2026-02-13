import SignIn from '@pages/auth/SignIn';
import SignUp from '@pages/auth/SignUp';
import Navbar from '@components/Navigations/Navbar';
import {Routes, Route} from 'react-router-dom'
import ForgetPassword from '@pages/auth/ForgetPassword';






const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
      </Routes>
    </div>
  )
}

export default App
