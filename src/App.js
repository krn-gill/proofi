import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IdentityForm from './components/IdentityForm';

function App() {
  return (
    <div>
      <Header />
      <main>
        <IdentityForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
