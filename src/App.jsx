
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Pages/Signup';
import Login from './Pages/Login';
import ForgotPwd from './Pages/ForgotPwd';
import ResetPwd from './Pages/ResetPwd';


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<SignUp/>}/>
          {/* <Route index element={<ResetPwd/>}/> */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgotpwd' element={<ForgotPwd/>}/>
          <Route path='/resetpwd/:id/:token'  element={<ResetPwd/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
