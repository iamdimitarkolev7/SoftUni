function solve(input) {

    for (let i = 0; i < input.length; i += 2) {
        let x1 = input[i];
        let y1 = input[i + 1];

        if (x1 >= 1 && x1 <= 3 && y1 >= 1 && y1 <= 3) {
            console.log("Tuvalu");
        } else if (x1 >= 8 && x1 <= 9 && y1 >= 0 && y1 <= 1) {
            console.log("Tokelau");
        } else if (x1 >= 5 && x1 <= 7 && y1 >= 3 && y1 <= 6) {
            console.log("Samoa");
        } else if (x1 >= 0 && x1 <= 2 && y1 >= 6 && y1 <= 8) {
            console.log("Tonga");
        } else if (x1 >= 4 && x1 <= 9 && y1 >= 7 && y1 <= 8) {
            console.log("Cook");
        } else {
            console.log("On the bottom of the ocean");
        }
    }
}
