function solve([x1, y1, z1, x2, y2, z2]) {
    let distance = Math.sqrt((Number(x1) - Number(x2)) ** 2 + (Number(y1) - Number(y2)) ** 2 + (Number(z1) - Number(z2)) ** 2);
    console.log(distance);
}