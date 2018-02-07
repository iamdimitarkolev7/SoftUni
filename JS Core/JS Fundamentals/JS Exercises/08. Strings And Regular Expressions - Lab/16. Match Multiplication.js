function solve(input) {
    let regex = /(-?[0.0-9.9]+)(\s+)?\*(\s+)?(-?[0.0-9.9]+)/;
    let match = regex.exec(input);
    while (match) {
        let num1 = match[1];
        let num2 = match[4];
        input = input.replace(regex, num1 * num2);
        match = regex.exec(input);
    }

    console.log(input);
}