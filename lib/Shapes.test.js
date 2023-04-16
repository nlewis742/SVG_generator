const { Shape, Circle, Triangle, Square } =  require('./Shape');


describe("WE Grouping similar tests together", () => {


  /*  test("", () => {
        
    })
    */


    it("Testing creating an instance of a SHAPE object", () => {
        // Setup 
        let obj = new Shape();
        let color = "green"
      //  obj.setColor(color);

        // Test 
      //  expect(obj).toBeDefined('object');
        expect(obj).toBe('object');

        // Teardown

    })
})