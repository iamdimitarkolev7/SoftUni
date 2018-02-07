function solve(lines) {
    let allDifferentArrays=new Set();

    for (let line of lines) {
        let str=JSON.parse(line).map(Number).sort((x,y)=>y-x).join(', ');

        allDifferentArrays.add(str);
    }

    let result=Array.from(allDifferentArrays).sort((x,y)=>x.split(', ').length-y.split(', ').length);

    for (let str of result) {
        console.log(`[${str}]`)
    }
}