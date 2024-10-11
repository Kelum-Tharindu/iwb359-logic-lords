import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import DashBord from './pages/DashBoard/DashBord';
import CreateBusinessCard from './pages/CreateBusinessCard/CreateBusinessCard';
import ViewBusinessCard from './pages/ViewBusinessCard/ViewBusinessCard';
import ErrorPage from './pages/PageNotFound/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/dashboard" element={<DashBord />} />
        <Route path="/create-business-card" element={<CreateBusinessCard />} />
        <Route path="/view-business-card" element={<ViewBusinessCard />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
