import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Cart from "./pages/Cart"

function App(){

  return(

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App