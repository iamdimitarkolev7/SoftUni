function solve([v1, v2, t]) {
    let timeInKmPerHour = Number(t) / 3.6;
    let distance1 = Number(v1) * timeInKmPerHour;
    let distance2 = Number(v2) * timeInKmPerHour;
    let distanceBetweenObjects = Math.abs(distance1 - distance2);
    console.log(distanceBetweenObjects);
}