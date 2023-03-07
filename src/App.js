import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./common/Footer";
import NavBar from "./common/NavBar";
import AboutMe from "./screens/AboutMe";
import ContactMe from "./screens/ContactMe";
import Education from "./screens/Education";
import Home from "./screens/Home";
import Projects from "./screens/Projects";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
