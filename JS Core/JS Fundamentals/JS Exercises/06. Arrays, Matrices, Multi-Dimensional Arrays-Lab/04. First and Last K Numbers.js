function solve(input) {
    let counter = input[0];

    let array1 = [];
    let array2 = [];

    let index = 0;

    for (let i = 1; i <= counter; i++) {
        array1[index] = input[i];
        index++;
    }

    index = 0;

    for (let i = input.length - counter; i < input.length; i++) {
        array2[index] = input[i];
        index++;
    }

    console.log(array1.join(' '));
    console.log(array2.join(' '));
}