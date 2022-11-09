import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import News from './News';


function App() {
  return (
    <div className="app h-100">

      <Header /> 
      <div className="main d-flex justify-content-center mt-5">
        <Sidebar /> 
        <Feed/>
        <News />
      </div>
    </div>
  );
}

export default App;
