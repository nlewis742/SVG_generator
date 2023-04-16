
// Parent class
class Shape {
    constructor() {
       this.color = "";
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

// child classes
class Square extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}



class Triangle extends Shape {
    constructor() {
        super();
    }

    render() {
        return `<polygon points="150, 10 244, 174 56, 174" fill="${this.color}" />`;
    }   
}

class Circle extends Shape  {
   constructor() { 
        super();
    }
    

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}



module.exports = { Shape, Circle, Triangle, Square }