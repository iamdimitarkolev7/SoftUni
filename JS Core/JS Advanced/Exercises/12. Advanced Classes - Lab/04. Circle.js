class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
        return this.radius;
    };

    get area () {
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(2);

console.log(c.radius);
console.log(c.diameter);
console.log(c.area);