
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

class Square extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<rect x="125" y="75" width="100" height="100" fill="${this.color}" />`;
    }
}



class Triangle extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }   
}

// EXTENDED CLASSES --> WE INHERIT FROM OUR BASE CLASS
class Circle extends Shape  {
   constructor() { 
        super();
    }
    

    render() {
        return `<circle cx="150" cy="120" r="80" fill="${this.color}" />`;
    }
}

// let cir = new Circle();
// let result = cir.render();


module.exports = { Shape, Circle, Triangle, Square }