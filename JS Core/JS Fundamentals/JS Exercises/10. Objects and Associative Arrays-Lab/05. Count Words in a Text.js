function solve(input) {
    let splittedInput = null;
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        splittedInput = input[i]
            .split(/[^a-zA-Z0-9_]+/)
            .filter(a => a !== '');
        for (let j = 0; j < splittedInput.length; j++) {
            if (!(obj.hasOwnProperty(splittedInput[j]))) {
                obj[splittedInput[j]] = 1;
            } else {
                obj[splittedInput[j]] += 1;
            }
        }
    }

    console.log(JSON.stringify(obj));
}

solve(['JS devs use Node.js for server-side JS.-- JS for devs'])
