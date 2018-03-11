class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        let distance1 = p1.x - p2.x;
        let distance2 = p1.y - p2.y;

        return Math.sqrt(distance1 * distance1 + distance2 * distance2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));