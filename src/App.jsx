import Login from "./pages/loginPage/Login"
import Register from "./pages/registerPage/Register"
import Home from "./pages/homePage/Home"
import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <Routes>
      
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
