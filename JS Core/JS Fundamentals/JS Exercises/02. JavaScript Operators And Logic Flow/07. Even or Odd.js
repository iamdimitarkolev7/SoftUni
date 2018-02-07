function solve(number) {
    if (number % 2  === 0) {
        console.log('even');
    } else if (Math.abs(number) % 2 === 1) {
        console.log('odd')
    } else {
        console.log('invalid');
    }
}