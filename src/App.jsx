import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import Ads from './pages/Ads';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}
