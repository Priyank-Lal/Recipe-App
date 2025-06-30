import { useState } from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import './index.css'

function App() {
  return (
    <div className="w-screen h-screen py-10 px-[10%] mb-64">
    <Navbar/>
    <MainRoutes/>
    </div>
  );
}

export default App;
