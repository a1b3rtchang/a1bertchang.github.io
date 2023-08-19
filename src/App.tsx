import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Resume from './pages/resume';

function App() {
    React.useEffect(() => {
        const doc: Element | null = document.firstElementChild
        if (doc != null) {
            doc.setAttribute('color-scheme', "dark")
        }

        const nav: Element | null = document.querySelector(".Nav");
        let lastScrollY: number = window.scrollY;

        if (window.scrollY <= 0) {
            nav?.classList.remove('nav-hidden')
        }
        window.addEventListener("scroll", () => {
            if (lastScrollY <= window.scrollY) {
                nav?.classList.add("nav--hidden");
            } else {
                console.log("going up");
                nav?.classList.remove("nav--hidden");
            }
            lastScrollY = window.scrollY;
        })
    }, []);


    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
