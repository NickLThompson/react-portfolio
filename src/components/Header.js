import React from 'react';
import Navigation from "./Navigation";

function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <header>
            <div>
                <h2>Nickolas Thompson</h2>
                <h3>Junior Full Stack Web Developer</h3>
            </div>
            <div>
                <Navigation
                    currentTab = { currentTab }
                    setcurrentTab = { setCurrentTab }>
                </Navigation>
            </div>
        </header>
    );
}



export default Header;