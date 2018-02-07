function solve(input) {
    let regex = /[0-9]+/g;
    let result = [];
    let match = regex.exec(input);
    while (match) {
        let number = match[0];
        result.push(number);
        match = regex.exec(input);
    }
    console.log(result.join(' '));
}

solve('The300\n' +
    'What is that?\n' +
    'I think it’s the 3rd movie.\n' +
    'Lets watch it at 22:45');