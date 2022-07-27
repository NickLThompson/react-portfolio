import React from 'react'

function Resume() {
  return (
    <section>
        <div className = "center">
            <h1 className = "page-header">My Resume</h1>
        </div>
        <div className = "bottom-spacing">
            <a href = {require("../assets/NickolasThompsonResume.pdf")} download>
                <h4>Download my Resume</h4>
            </a>
        </div>
        <div>
            <h5>Front-End Proficiencies</h5>
            <ol>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Git</li>
            </ol>
            <br></br>
            <h5>Back-End Proficiencies</h5>
            <ol>
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>MySQL</li>
                <li>GraphQL</li>
                <li>React</li>
            </ol>
        </div>
    </section>
  )
}

export default Resume