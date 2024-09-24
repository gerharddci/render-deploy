import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
