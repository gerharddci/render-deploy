import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

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
        <Route index element={<h1>Homepage</h1>} />
        <Route
          path="about"
          element={<h1>About</h1>}
        />
        <Route
          path="contact"
          element={<h1>Contact</h1>}
        />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
