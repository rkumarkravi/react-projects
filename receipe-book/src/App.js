import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-600 min-h-screen">
      <Navbar />
      <div className="container mx-auto pl-4 pb-4">
        <Outlet />
      </div>
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark" />
    </div>
  );
}

export default App;
