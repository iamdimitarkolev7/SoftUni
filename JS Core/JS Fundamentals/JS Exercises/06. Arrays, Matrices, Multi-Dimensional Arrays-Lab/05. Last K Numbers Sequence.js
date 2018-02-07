function solve(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let numsForSum = arr.slice(Math.max(0, i - k), i);

        for (let num of numsForSum) {
            sum += num;
        }

        arr[i] = sum;
    }

    console.log(arr.join(' '));
}