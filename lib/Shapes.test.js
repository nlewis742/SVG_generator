const {Circle, Triangle, Square} =  require('./Shape');


describe("WE Grouping similar tests together", () => {

    describe("circle", () => {
        it("Testing creating an instance of a CIRCLE object", () => {
          const circle = new Circle();
          expect(circle).toBe('object');
        })
    })

    describe("triangle", () => {
        it("Testing creating an instance of a TRIANGLE object", () => {
          const triangle = new Triangle();
          expect(triangle).toBe('object');
        })
    })

    describe("square", () => {
        it("Testing creating an instance of a SQUARE object", () => {
          const square = new Square();
          expect(square).toBe('object');
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