//main app componentimport React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/home';
import ResumeInput from './pages/resumeInput';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resumeInput" element={<ResumeInput />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;