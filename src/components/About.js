import React from 'react'
const styles = {
  
  card: {
      margin: 20,
      background: "#000000",
  },
  heading: {
      background: "#000000",
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: "1.2rem",
      color: 'white',
      padding: '0 20px',
  },
  content: {
      padding: 20,
      color: 'white',
  },
};

function About() {
  return (
    <section>
      <div className = "center" id = "about">
        <h1 className = "page-header">About Me</h1>
      </div>
      <div className = "center">
        <img src = {require("../images/PortfolioImage1.png")} alt = "about-me" className = "about-me"></img>
      </div>
      <div>
        <p>
          My name is Nickolas Thompson, I'm 21 years old and I'm a full stack web developer. I've recently graduated from the UNC Charlotte Bootcamp with a certificate in full stack development. Through this bootcamp I have newly developed skills in Javascript, CSS, React, MySQL, Node, and other web design apps. I'll write more stuff here later but I can't think of anything right now.
        </p>
      </div>
    </section>
  );
}

export default About