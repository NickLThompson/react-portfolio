import React from 'react';
import Navigation from "./Navigation";

function Header(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <header>
            <div>
                <h2>Nickolas Thompson</h2>
                <h3>Junior Full Stack Web Developer</h3>
            </div>
            <div>
                <Navigation
                    currentPage = { currentPage }
                    setCurrentPage = { setCurrentPage }>
                </Navigation>
            </div>
        </header>
    );
}



export default Header;