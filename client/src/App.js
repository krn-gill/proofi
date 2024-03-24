import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IdentityForm from './components/IdentityForm';
import ProofDisplay from './components/Activity/ProofDisplay';
import MyProof from './components/Activity/MyProof';
// import ProofRequest from './components/Activity/ProofRequest';
import Home from './pages/Home';
import ActivityPage from './components/Activity/Activity';
import About from './components/About';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

  const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'c2526384278cb20cbfaeead9861855fd',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });
  const queryClient = new QueryClient();

function App() {

  

  return (
   
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
    
        <RainbowKitProvider>
    <Router>
      <div>
     
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/activity" element={<ActivityPage/>}>
            <Route index element={<Outlet />} />
            <Route path="request" element={<IdentityForm/>} />
            <Route path="verified" element={<ProofDisplay/>} />
            <Route path="myproof" element={<MyProof/>} />
            {/* <Route path="send" element={<ProofRequest/>} /> */}
          </Route>
          <Route path="/about" exact element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </RainbowKitProvider>
       </QueryClientProvider>
     </WagmiProvider>
  );
}

export default App;
