
// BASE CLASS
class Shape {
    constructor() {
       this.color = "";
        //this.color = color;
        this.content = "";
        this.textColor = "";
    }

    setColor(color) {
        this.color = color;
    } 

    setText(content) {
        this.content = content;
    }

    getText() {
        return this.content;
    }
}



let star = new Shape();
let star2 = new Shape();

star.color = "red"
star.setColor("red");
// star.render()  // --> not valid does not exist

// EXTENDED CLASSES --> WE INHERIT FROM OUR BASE CLASS
class Circle extends Shape  {
 /*   constructor() { 
        super();
    }
    */

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.color} />`;
    }
}

let cir = new Circle();
let result = cir.render();


module.exports = { Shape, Circle }