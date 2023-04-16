// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/Shape");

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
            // console.log(shape);
          };
          const svg =
          `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          
          ${new Shape().render()}
          
          <text x="50%" y="50%" text-anchor="middle" fill=${data.textColor} dy=".3em">${data.text}</text>
          </svg>`;
          createSVG(svg);
        });
        // <${Shape()} width="100%" height="100%" fill=${data.shapeColor} />
        // function logo(text, textColor, shape, shapeColor) {
        //   this.text = text;
        //   this.textColor = textColor;
        //   this.shape = shape;
        //   this.shapeColor = shapeColor;
        // }

    

    // const svgPageContent

  // init();
    
  

// .then((answers) => {
//     const svgPageContent = generateSVG(answers);

//     fs.writeFile('logo.svg', svgPageContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created logo.svg!'));
//   })

// //I need established objects for text color, shape, selection of shapes and color of shapes for a user to pull from.
//   this.create = function () {
//       console.log("created");
//   }
// }
// //Constructor function to create objects containing properties "shapes", "text", "color"

//I need to store the user's input in something

//I need to create a svg file for them to view with their logo

//I have tests in jest for my prompts
