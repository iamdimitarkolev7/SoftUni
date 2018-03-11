function solve(arr) {
    let closure = (function () {
        let result = [];
        return {
            add: (str) => result.push(str),
            remove: (str) => result = result.filter(el => el !== str),
            print: () =>  console.log(result)
        }
    })();

    for (let str of arr) {
        let [command, value] = str.split(' ');
        closure[command](value);
    }
}

solve([]);

