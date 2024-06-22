import './App.css'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Welcome from './components/Welcome'
import NoPage from './components/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/user/register" element={<SignUp/>} />
        <Route path="/user/login" element={<LogIn/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
