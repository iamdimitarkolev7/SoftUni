function keyValue (args) {
    let dict = {};
    for(let i = 0;i<args.length-1;i++){
        let tokens = args[i].split(' ');
        let key = tokens[0];
        let value = tokens[1];
        if(!dict[key]){
            dict[key] = [];
        }
        dict[key].push(value);
    }
    let keyToOutput = args[args.length-1];

    console.log(dict[keyToOutput] ? dict[keyToOutput].join('\n') : 'None');
}