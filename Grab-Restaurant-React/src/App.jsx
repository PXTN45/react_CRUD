// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Restaurant from "./pages/Restaurant";
// import Search from "./pages/Search";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Sign_in from "./pages/Sign_in";
import Sign_up from "./pages/Sign_up";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Restaurant />} />
            <Route path="/add" element={<Add />} />
            {/* <Route path="/search" element={<Search />} /> */}
            <Route path="/edit/:restaurantId" element={<Edit />} />
            <Route path="/sign_in" element={<Sign_in />} />
            <Route path="/sign_up" element={<Sign_up />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
