function solve(input) {
    let regex = /\b_([A-Za-z\d]+)\b/g;
    let result = [];
    let match = regex.exec(input);
    while (match) {
        let validName = match[1];
        result.push(validName);
        match = regex.exec(input);
    }
    console.log(result.join(','));

}

solve('The _id and _age variables are both integers.');
solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');