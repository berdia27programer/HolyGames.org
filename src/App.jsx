import { Routes, Route } from "react-router";

import Home from "./pages/Home"
import About from "./pages/About"
import Help from "./pages/Help"

import NavBar from "./components/NavBar"

export default function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route element={<Home />} path="/home" />
                <Route element={<About />} path="/about" />
                <Route element={<Help />} path="/help" />
            </Routes>
        </>
    )
}