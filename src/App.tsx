import './App.css';
import {  Route, Link, Routes,BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Theme } from '@chakra-ui/react';
import Cards from "./pages/Cards"
import Sets, {setsLoader} from "./pages/Sets"

import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Cards/>}/>
    <Route path="about" element={<div>about here</div>} />
    <Route path="sets/:setsId" loader={setsLoader} element={<Sets/>}/>
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
