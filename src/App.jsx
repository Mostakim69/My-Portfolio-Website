import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import ArchiveProjects from "./pages/ArchiveProjects";
import NotFound from "./pages/NotFound";
import Education from "./pages/Education"; // ✅ Added
import "./App.css";

// Scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <ScrollToTopOnRouteChange />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} /> {/* ✅ Optional: direct route */}
            <Route path="/projectlist" element={<ArchiveProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
