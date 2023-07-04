import './App.css';
import {  Route, Link, Routes,BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Theme } from '@chakra-ui/react';

import Cards, {cardsLoader} from "./pages/Cards"
import Sets from './pages/Sets';
import About from "./pages/About"
import Home from "./pages/Home"

import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>} />
    <Route path="sets" element={<Sets/>}/>
    <Route path="cards/:setsId" loader={cardsLoader} element={<Cards/>}/>
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
