import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
const Dashboard = React.lazy(()=> import("./components/Dashboard"));
const Landing = React.lazy(()=> import("./components/Landing"));


function App() {
  return (
    <div>
      <div>
        <h1>This is a Top Bar</h1>
      </div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar(){
  const navigate = useNavigate();

  return(
    <div>
      <button onClick={()=>{
        navigate("/");
      }}>Landing</button> 
      
      <button onClick={()=>{
        navigate("/dashboard");
      }}>Dashboard</button>
    </div>
  )
}

export default App;
