function solve(input) {
    let towns = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split('|').filter(s => s !== '');
        towns.push(tokens[0].trim());
        sum = sum + Number(tokens[1]);
    }
    console.log(towns.join(', '));
    console.log(sum);
}

solve(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);