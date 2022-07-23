import React from 'react'

function Navigation(props) {
    const { currentTab, setCurrentTab } = props;

    return (
        <nav>
            <ul className = "flex-row">
                <li className = {currentTab === "Home" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("Home")}>Home</span>
                </li>
                <li className = {currentTab === "About Me" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("About Me")}>About Me</span>
                </li>
                <li className = {currentTab === "Portfolio" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("Portfolio")}>Portfolio</span>
                </li>
                <li className = {currentTab === "Contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("Contact")}>Contact</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;