import React from 'react';

// all components imports
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <Navbar />
                <Home />
                <About />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;