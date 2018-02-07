function solve(input) {
    let result = [];
    let start = 0;
    let end = 0;
    while (true) {
        start = input.indexOf('(');
        end = input.indexOf(')');

        if (start < 0 || end < 0 || start > end) {
            break;
        }

        let subString = input.substring(start + 1, end);
        result.push(subString);
        input = input.substr(end + 1);
    }

    console.log(result.join(', '));
}

solve('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');