"use strict";
//shape class
class Shape {
    info() {
        return "this is a shape";
    }
    draw() {
        return "drawing shape";
    }
}
//rectangle class
class Rectangle extends Shape {
    constructor(hight, width) {
        super();
        this.hight = hight;
        this.width = width;
    }
    area() {
        return this.hight * this.width;
    }
    info() {
        return "this is rectangle";
    }
    scale(int) {
        this.width *= int;
        this.hight *= int;
        return this;
    }
    static combainRebtangle(rectangle1, rectangle2) {
        const combain = rectangle1.area() + rectangle2.area();
        return combain;
    }
}
//square
class Square extends Rectangle {
    constructor(hight, width) {
        super(hight, width);
    }
    squaraErea() {
        return this.width * this.hight;
    }
    draw() {
        return "drawing square";
    }
}
//class color
class ColoredRectangle extends Rectangle {
    constructor(hight, width, color) {
        super(hight, width);
        this.color = color;
    }
    info() {
        return `this is rectangle in ${this.color} color`;
    }
}
//class triangle
class Triangle extends Shape {
    constructor(rib1, rib2, rib3) {
        super();
        this.rib1 = rib1;
        this.rib2 = rib2;
        this.rib3 = rib3;
    }
    draw() {
        return "drawing triangle";
    }
}
//class circle
class Circle extends Shape {
    constructor(radios) {
        super();
        this.radios = radios;
    }
    draw() {
        return "drawing circle";
    }
}
//function 
const randerShape = (shapes) => {
    for (let shape of shapes) {
        shape.draw();
    }
};

const x = new Rectangle(2,4)
const y = new Rectangle(2,4)


console.log(Rectangle.combainRebtangle(x,y))