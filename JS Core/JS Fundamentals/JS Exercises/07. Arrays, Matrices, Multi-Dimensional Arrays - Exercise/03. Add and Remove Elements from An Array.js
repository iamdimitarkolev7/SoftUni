function solve(input) {
    let arr = [];
    let number = 1;

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command === 'add') {
            arr.push(number);
            number++;
        } else {
            if (arr.length === 0) {
                number++;
            } else {
                arr.pop();
                number++;
            }
        }
    }

    if (arr.length === 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}

solve(['add', 'add', 'add', 'add']);

console.log('-----------');

solve(['remove', 'remove', 'remove']);

console.log('-----------');

solve(['add', 'add', 'remove', 'add', 'add']);