import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import './styles/App.css';


function App() {
    const [currentTab, setCurrentTab] = useState("Home");

    // this checks which tab is open and then generates the proper tab when clicked

    const loadTab = () => {
        switch (currentTab) {
            case "Home":
                return <Home />;
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            default:
                return null;
        }
    };

    
    return (
        <div>
            <div className="currentHeader">
                <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
            </div>
            <div>
                <main>{loadTab()}</main>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default App;