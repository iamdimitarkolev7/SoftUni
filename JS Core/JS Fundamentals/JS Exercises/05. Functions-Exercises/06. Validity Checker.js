function solve(input) {
    let x1 = Number(input[0]), y1 = Number(input[1]);
    let x2 = Number(input[2]), y2 = Number(input[3]);

    let distanceBetweenPoints = Math.sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
    let distanceBetweenPoint1AndNull = Math.sqrt(x1 * x1 + y1 * y1);
    let distanceBetweenPoint2AndNull = Math.sqrt(x2 * x2 + y2 * y2);

    if (distanceBetweenPoint1AndNull % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (distanceBetweenPoint2AndNull % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (distanceBetweenPoints % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
