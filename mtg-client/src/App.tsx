import './App.css';
import {  Route, Link, Routes,BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Theme } from '@chakra-ui/react';
import { cardLoader } from './pages/Card';

import Cards, {cardsLoader} from "./pages/Cards"
import Sets from './pages/Sets';
import About from "./pages/About"
import Home from "./pages/Home"

import RootLayout from "./layouts/RootLayout"
import Card from './pages/Card';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>} />
    <Route path="sets" element={<Sets/>}/>
    <Route path="sets/:setsId/cards" loader={cardsLoader} element={<Cards/>}/>
    <Route path="sets/:setsId/card/:cardId" element={<Card/>} loader={cardLoader}/>
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
