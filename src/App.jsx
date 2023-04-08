import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <Header></Header>
      <div className="bg-cyan-50 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;