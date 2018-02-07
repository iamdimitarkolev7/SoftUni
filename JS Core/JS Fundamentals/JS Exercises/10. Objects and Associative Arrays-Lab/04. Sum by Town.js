function solve(input) {
    let obj = {};

    /*for (let i = 0; i < input.length; i += 2) {
        obj[input[i]] = 0;
    }

    for (let i = 1; i < input.length; i += 2) {
        obj[input[i - 1]] += Number(input[i]);
    }*/

    for (let i = 0; i < input.length; i += 2) {
        if (obj.hasOwnProperty(input[i])) {
            obj[input[i]] += Number(input[i + 1]);
        } else {
            obj[input[i]] = Number(input[i + 1]);
        }
    }

    console.log(JSON.stringify(obj));
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna','4'])