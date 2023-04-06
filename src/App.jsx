import "./App.css";
import Signup from "./Auth/Singup";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import MoviesList from "./MoviesList";
import Navbar from "./Navbar";
import Login from "./Auth/Login";
import Company from "./Company";


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     
      <Routes>
    
     
      <Route exact path="/" element={<MoviesList/>}/>
      <Route exact path="/company" element={<Company/>}/>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup />} />
        </Routes>
    
      </BrowserRouter>
    
    </>
  );
}

export default App;
