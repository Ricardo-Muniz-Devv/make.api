import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import About from './src/pages/About';
import Process from './src/pages/Process';
import Platform from './src/pages/Platform';
import Profile from './src/pages/Profile';
import Pricing from './src/pages/Pricing';

export function App() {
  return (
    <BrowserRouter>  {/* This is required! */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}
