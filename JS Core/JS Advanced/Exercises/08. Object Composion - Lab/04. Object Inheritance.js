function solve(input) {
    let result = [];
    let closure = (function () {
        let store = {};
        function create(arr) {
            if (arr.length < 2) {
                store[arr[0]] = {}
            } else {
                store[arr[0]] = Object.create(store[arr[2]]);
            }
        }
        function set(arr) {
            let name = arr[0];
            let key = arr[1];
            let value = arr[2];
            store[name][key] = value;
        }
        function print(arr) {
            let result = [];
            let obj = store[arr[0]];
            for (let key in obj) {
                result.push(key + ":" + obj[key]);
            }
            console.log(result.join(', '));
        }
        return {create, set, print};
    }());

    for (let str of input) {
        let args = str.split(' ');
        let command = args.shift();
        closure[command](args);
    }
}