import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';


function App() {
    const [currentPage, setCurrentPage] = useState("About");

    // this checks which Page is open and then generates the proper Page when clicked

    const loadPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default:
                return <About />;
        }
    };


    return (
        <div>
            <div className="currentHeader">
                <Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
            </div>
            <div>
                <main>{loadPage()}</main>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default App;