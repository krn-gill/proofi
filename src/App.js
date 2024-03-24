import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IdentityForm from './components/Activity/IdentityForm';
import ProofDisplay from './components/Activity/ProofDisplay';
import ProofRequest from './components/Activity/ProofRequest';
import Home from './pages/Home';
import ActivityPage from './components/Activity/Activity';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/activity" element={<ActivityPage/>}>
            <Route index element={<Outlet />} />
            <Route path="request" element={<IdentityForm/>} />
            <Route path="received" element={<ProofDisplay/>} />
            <Route path="send" element={<ProofRequest/>} />
          </Route>
          <Route path="/about" exact element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
