import './App.css';
import {  Route, Link, Routes,BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react"
import RootLayout from "./layouts/RootLayout"




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="about" element={<div>about here</div>} />
        </Route> 
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
