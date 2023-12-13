import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBarElement";
import { About } from "./Components/Pages/About";
import { Blog } from "./Components/Pages/Blog";
import { Contact } from "./Components/Pages/Contact";
import { Home } from "./Components/Pages/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
