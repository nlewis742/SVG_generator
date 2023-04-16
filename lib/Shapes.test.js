const {Circle, Triangle, Square} =  require('./Shape');


describe("WE Grouping similar tests together", () => {

    describe("circle", () => {
        it("Testing creating an instance of a CIRCLE object", () => {
          const shape = new Circle();
          shape.setColor("red")
          expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
        })
    })

    describe("triangle", () => {
        it("Testing creating an instance of a TRIANGLE object", () => {
          const shape = new Triangle();
          shape.setColor("red");
          expect(shape.render()).toEqual(`<polygon points="150, 10 244, 174 56, 174" fill="red" />`);
        })
    })

    describe("square", () => {
        it("Testing creating an instance of a SQUARE object", () => {
          const shape = new Square();
          shape.setColor("red");
          expect(shape.render()).toEqual(`<rect x="100" y="50" width="100" height="100" fill="red" />`);
        })
    })

  });




  /*  test("", () => {
        
    })
    */


//     it("Testing creating an instance of a SHAPE object", () => {
//         // Setup 
//         let obj = new Shape();
//         let color = "green"
//       //  obj.setColor(color);

//         // Test 
//       //  expect(obj).toBeDefined('object');
//         expect(obj).toBe('object');

//         // Teardown

//     })
// })