import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import About  from './src/pages/About';
import Process from './src/pages/Process';
import Platform from './src/pages/Platform';

export function App() {
  return (
    <BrowserRouter>  {/* This is required! */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
