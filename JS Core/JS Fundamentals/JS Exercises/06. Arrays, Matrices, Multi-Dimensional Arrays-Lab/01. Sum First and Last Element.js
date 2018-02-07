function solve(array) {
    array = array.map(Number);
    let sum = array[0] + array[array.length - 1];
    console.log(sum);
}