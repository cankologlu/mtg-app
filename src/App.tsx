import './App.css';
import {  Route, Link, Routes,BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Theme } from '@chakra-ui/react';
import Cards from "./pages/Cards"

import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Cards/>}/>
    <Route path="about" element={<div>about here</div>} />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
