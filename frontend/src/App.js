import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import DashBord from './pages/DashBoard/DashBord';
import CreateBusinessCard from './pages/CreateBusinessCard/CreateBusinessCard';
import ViewBusinessCard from './pages/ViewBusinessCard/ViewBusinessCard';
import ErrorPage from './pages/PageNotFound/ErrorPage';
import { NavBar } from './Components/NavBar1/NavBar'; // Adjust according to your export

function App() {
  const location = useLocation(); // Get the current location

  // Define the paths where NavBar should be hidden
  const noNavBarPaths = ['/login', '/register'];

  return (
    <div>
      {/* Conditionally render NavBar */}
      {!noNavBarPaths.includes(location.pathname) && <NavBar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBord />} />
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
