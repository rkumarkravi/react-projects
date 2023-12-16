import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-600 min-h-screen">
      <Navbar />
      <div className="container mx-auto pl-4 pb-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
