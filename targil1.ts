//shape class
class Shape{
    info():string{
        return "this is a shape"
    }
    draw():string{
        return "drawing shape"
    }
}
//rectangle class
class Rectangle extends Shape{
    hight:number;
    width:number;
    
    constructor(hight:number,width:number){
        super()
        this.hight = hight
        this.width = width
    }
    area():number{
        return this.hight * this.width
    }

    info():string{
        return "this is rectangle"
    }
    scale(int:number):Rectangle{
        this.width *= int
        this.hight *= int
        return this
    }
   static combainRebtangle(rectangle1:Rectangle,rectangle2:Rectangle){
    const combain = rectangle1.area() + rectangle2.area()
    return combain
   }

}
//square
class Square extends Rectangle{
    constructor(hight:number,width:number){
        super(hight,width)
    }
    squaraErea():number{
        return this.width * this.hight
    }
    draw(): string {
        return "drawing square"
    }
}




//class color
class ColoredRectangle extends Rectangle{
    color:string
    constructor(hight:number,width:number,color:string){
        super(hight,width)
        this.color = color
    }
    info(): string {
        return `this is rectangle in ${this.color} color`
    }
}
//class triangle
class Triangle extends Shape{
    rib1:number;
    rib2:number;
    rib3:number;
    constructor(rib1:number,rib2:number,rib3:number){
        super()
        this.rib1 = rib1
        this.rib2 = rib2
        this.rib3 = rib3
    }
    draw(): string {
        return "drawing triangle"
    }
    
}
//class circle
class Circle extends Shape{
    radios:number;
    constructor(radios:number){
        super()
        this.radios = radios
    }
    draw(): string {
        return "drawing circle"
    }
}
//function 
const randerShape = (shapes:(Circle|Square|Triangle)[]):void=>{
    for (let shape of shapes){
        shape.draw()
    }
}
