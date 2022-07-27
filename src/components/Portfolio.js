import React from 'react'

const styles = {
  card: {
      margin: 20,
      background: "rgb(90, 90, 90)",
  },
  heading: {
      background: "rgb(90, 90, 90)",
      minHeight: 50,
      lineHeight: 2.5,
      fontSize: "2rem",
      padding: '0 20px',
      
  },
  content: {
      paddingLeft: 20,
      
  },
};



function Portfolio() {
  const projects = [
    {
      name: "Book Nook",
      description: "This is a digital library where a user can add books to their library to keep track of as well as add them to a favorites list and mark them as read whenever they finish that book.",
      image: "BookNook1.png",
      technologies: [
        "HTML/CSS",
        "Javascript",
        "Node.js",
        "Express + Handlebars + Session",
        "MySQL2",
        "Sequelize",
        "eslint",
        "Nodemon"
      ],
    },
    {
      name: "My2DGame",
      description: "xyz",
      image: "MyJavaGame1.png",
      technologies: [
        "",
      ],
    },
    {
      name: "Password Generator",
      description: "xyz",
      image: "PasswordGenerator.png",
      technologies: [
        "",
      ],
    },
    {
      name: "Spirits Listed",
      description: "xyz",
      image: "SpiritsListed1.png",
      technologies: [
        "",
      ],
    },
  ]

  return (
    <main>
        <div style = {styles.card}>
            <div style = {styles.heading}>Book Nook:</div>
            {/* <div style = {styles.content}>description</div> */}
            <div style = {styles.content}>
                <p><a href="https://dry-bastion-57106.herokuapp.com/login">Live Site</a></p>
                <p><a href="https://github.com/kleylakb89/book-nook">Repository</a></p>
               
            </div>
            <img className = "portfolioProjects" src = {require("../images/BookNook1.png")} alt = "Book Nook 1"></img>
            <img className = "portfolioProjects" src = {require("../images/BookNook2.png")} alt = "Book Nook 2"></img>
            <img className = "portfolioProjects" src = {require("../images/BookNook3.png")} alt = "Book Nook 3"></img>

            <hr />
            <div style = {styles.heading}>Random Password Generator:</div>
            <div style = {styles.content}>
                <p><a href="https://nicklthompson.github.io/password-randomizer/">Live Site</a></p>
                <p><a href="https://github.com/NickLThompson/password-randomizer">Repository</a></p>

            </div>
            <img className = "portfolioProjects" src = {require("../images/PasswordGenerator.png")} alt = "Password Generator"></img>
            <hr />
            <div style = {styles.heading}>Java 2D Game:</div>
            <div style = {styles.content}>
                <p><a href="https://www.awesomescreenshot.com/video/10179223?key=095ce6ba32c961ebd1d05be0fd4966be">Video Link</a></p>
                <p id = "JavaGame">Repository (unavailable)</p>

            </div>
            <img className = "portfolioProjects" src = {require("../images/MyJavaGame1.png")} alt = "Java Game 1"></img>
            <img className = "portfolioProjects" src = {require("../images/MyJavaGame2.png")} alt = "Java Game 2"></img>
            <hr />
            <div style = {styles.heading}>Spirits Listed:</div>
            <div style = {styles.content}>
                <p><a href="https://nicklthompson.github.io/Spirits-Listed/">Live Site</a></p>
                <p><a href="https://github.com/NickLThompson/Spirits-Listed">Repository</a></p>

            </div>
            <img className = "portfolioProjects" src = {require("../images/SpiritsListed1.png")} alt = "Spirits Listed 1"></img>
            <img className = "portfolioProjects" src = {require("../images/SpiritsListed2.png")} alt = "Spirits Listed 2"></img>

        </div>
    </main>
)
}

export default Portfolio