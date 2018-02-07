function solve(array) {
    console.log(array.filter((el, i) => {
        return i % 2 === 0;
    }).join(' '));
}