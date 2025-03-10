//main app componentimport React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/home';
import About from './pages/about'
import ResumeInput from './pages/resumeInput';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resumeInput" element={<ResumeInput />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;