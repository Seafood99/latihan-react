import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/blocks/Navbar"
import Footer from "./components/blocks/Footer"

//pages
import Home from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>

    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

    <Footer />
    </BrowserRouter>

  )
}