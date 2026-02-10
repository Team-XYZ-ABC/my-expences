import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Navbar from './components/Navigations/Navbar';






const App = () => {
  return (
    <div>
      <Navbar />
      {/* <SignIn /> */}
      <SignUp />
    </div>
  )
}

export default App
