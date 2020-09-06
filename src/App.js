import React from 'react';
import logo from './logo.svg';
import Header from './components/header'
import Columns from './components/columns'
import Section3 from './components/section3'
import Clients from './components/clients.jsx'
import GetStarted from './components/getstarted.jsx'
import Footer from './components/footer.jsx'
import Nav from './components/nav.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Columns />
      <Section3 />
      <Clients />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
