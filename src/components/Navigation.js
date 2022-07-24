import React from 'react'

function Navigation(props) {
    const { currentPage, setCurrentPage } = props;

    return (
        <nav>
            <ul className = "flex-row">
                <li className = {currentPage === "About" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentPage("About Me")}>About Me</span>
                </li>
                <li className = {currentPage === "Portfolio" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentPage("Portfolio")}>Portfolio</span>
                </li>
                <li className = {currentPage === "Contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentPage("Contact")}>Contact</span>
                </li>
                <li className = {currentPage === "Resume" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentPage("Resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;