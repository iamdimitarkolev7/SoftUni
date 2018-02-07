function solve(string, repetitionTimes) {
    let result = '';
    for (let i = 1; i <= repetitionTimes; i++) {
        result += string;
    }
    console.log(result);
}