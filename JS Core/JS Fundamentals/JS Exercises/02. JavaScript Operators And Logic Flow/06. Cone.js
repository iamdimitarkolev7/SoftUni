function solve(radius, height) {
    let volume = (Math.Pi * radius * radius * height) / 3;
    let s = Math.sqrt(radius * radius + height * height);
    let area = Math.Pi * radius * (radius * s);

    console.log("volume =  " + volume);
    console.log("area = " + area);
}