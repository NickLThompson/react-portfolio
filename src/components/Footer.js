/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="https://github.com/NickLThompson" target="_blank" rel="noreferrer">
          <img src = {require("../images/github.jpg")} alt="Github Logo" id = "GithubPicture"></img>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/nickolas-thompson-67198a191/" target="_blank" rel="noreferrer">
          <img src = {require("../images/PortfolioImage1.png")} alt="LinkedIn profile picture" id = "LinkedInPicture"></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer