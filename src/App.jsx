import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { UserProvider } from "./contexts/UserContext";

import Login from './pages/Login'
import SignUp from "./pages/SignUp";
import Lists from "./pages/Lists";
import History from "./pages/History";
import Share from "./pages/Share";
import Profile from "./pages/Profile";
import NewList from "./pages/NewList";
import BuyLocal from "./pages/BuyLocal";

function App() {
  return (
    <>
    <ToastContainer
      position="top-center"
      autoClose={1500}
       />
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/lists" element={<Lists/>} />
          <Route path="/lists/:id" element={<NewList/>} /> 
          <Route path="/buy/:listId/:localId" element={<BuyLocal/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/share" element={<Share/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App
