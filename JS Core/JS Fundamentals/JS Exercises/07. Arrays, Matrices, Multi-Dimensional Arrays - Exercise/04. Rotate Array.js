function solve(arr) {
    let repeatedTimes = Number(arr.pop());

    for (let i = 1; i <= repeatedTimes % arr.length; i++) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
    }

    console.log(arr.join(' '));
}

solve([1, 2, 3, 4, 2]);
solve(['Banana','Orange','Coconut','Apple','15']);
