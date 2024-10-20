// import './App.css'; 
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/LandingPage/LandingPage'; 
import Login from './pages/Login/Login'; 
import Register from './pages/Register/Register'; 
import DashBord from './pages/DashBoard/DashBord'; 
import CreateBusinessCard from './pages/CreateBusinessCard/CreateBusinessCard'; 
import ViewBusinessCard from './pages/ViewBusinessCard/ViewBusinessCard'; 
import ErrorPage from './pages/PageNotFound/ErrorPage'; 
import { NavBar } from './Components/NavBar1/navBar'; 
import { NavBar2 } from './Components/NavBar2/navBar2'; 
import SideBar from './Components/SideBar/SideBar';


function App() {
  const location = useLocation(); // Get the current location
  const [isLoggedIn, setIsLoggedIn] = useState(false);//if this state is true then show NavBar2(user login this time) else show NavBar

  // Define the paths where both NavBar and SideBar should be hidden
  const noNavOrSideBarPaths = ['/login', '/register'];

  return (
    <div>
      {/* Conditionally render both NavBar and SideBar */}
      {!noNavOrSideBarPaths.includes(location.pathname) && (
        <>
          {isLoggedIn ? <NavBar2 /> : <NavBar />}
          <SideBar />
        </>
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBord />} />
        <Route path="/about" element={<DashBord />} />
        <Route path="/create-business-card" element={<CreateBusinessCard />} />
        <Route path="/view-business-card" element={<ViewBusinessCard />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
