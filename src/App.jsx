import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from './pages/Login'
import SignUp from "./pages/SignUp";
import Lists from "./pages/Lists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> }/>
        <Route path="/signup" element={ <SignUp /> }/>
        <Route path="/lists" element={<Lists/>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
