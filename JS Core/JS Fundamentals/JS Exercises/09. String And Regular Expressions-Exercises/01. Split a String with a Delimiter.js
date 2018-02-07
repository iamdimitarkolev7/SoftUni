function solve(string, delimiter) {
    string = string.split(delimiter);
    for (let el in string) {
        console.log(string[el]);
    }
}