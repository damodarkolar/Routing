import './App.css';
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/products" element={<Products />} ></Route>
    </Route>
   </Routes>
   </>
  );
}

export default App;
