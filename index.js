
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/Shape");

// prompts for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Write upto 3 letters for an acronym for your logo.",
      // function to limit to 3 characters long
      validate: function(input) {
        if (input.length > 3) {
          return "Please enter upto 3 letters.";
        }
        return true;
      }
    },
    {
      type: "input",
      name: "textColor",
      message:
        "what color would you like the text to be? Please enter a color keyword or hexidecimal.",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like for the background color?",
      choices: ["square", "circle", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      messsage:
        "What color would you like the shape to be? Please enter a color keyword or hexidecimal.",
    },
  ])
  .then((data) => {
    //promises to create the svg file based on user input
    function createSVG(data) {
    fs.writeFile("logo.svg", data, (err) =>
      err ? console.log(err) : console.log("successfully created logo"))
  };
            function Shape(){
            let shape;
            switch (data.shape) {
              case "square":
                shape = new Square();
                shape.setColor(data.shapeColor);
              break;
              case "circle":
                shape = new Circle();
                shape.setColor(data.shapeColor);
              break;
              case "triangle":
                shape = new Triangle()
                shape.setColor(data.shapeColor);
              break;
            }
            return shape;
          };
          //defines the structure of the svg file
          const svg =
          `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          
          ${new Shape().render()}
          
          <text x="50%" y="50%" font-size="45" text-anchor="middle" fill=${data.textColor} dy=".3em">${data.text}</text>
          </svg>`;
          createSVG(svg);
        });
   