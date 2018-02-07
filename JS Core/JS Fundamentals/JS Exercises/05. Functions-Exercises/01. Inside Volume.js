function solve(input) {
    let x1 = 10; let x2 = 50;
    let y1 = 20; let y2 = 80;
    let z1 = 15; let z2 = 50;

    let counter = 0;

    for (let i = 1; i <= input.length / 3; i++) {
        for (let j = 0; j < 1; j++) {
            if ((input[j + counter] >= x1 && input[j + counter] <= x2) &&
                (input[j + 1 + counter] >= y1 && input[j + 1 + counter] <= y2) &&
                (input[j + 2 + counter] >= z1 && input[j + 2 + counter]) <= z2) {
                console.log('inside');
                counter += 3;
            } else {
                console.log('outside');
                counter += 3;
            }
        }
    }
}