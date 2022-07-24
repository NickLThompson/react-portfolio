import React from 'react'

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

      ],
    },
    {
      name: "Password Generator",
      description: "xyz",
      image: "PasswordGenerator.png",
      technologies: [

      ],
    },
    {
      name: "Spirits Listed",
      description: "xyz",
      image: "SpiritsListed1.png",
      technologies: [

      ],
    },
  ]

  return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						{projects[0]}
					</li>
					<li className="padding">
						{projects[1]}
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						{projects[2]}
					</li>
					<li className="padding">
						{projects[3]}
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio