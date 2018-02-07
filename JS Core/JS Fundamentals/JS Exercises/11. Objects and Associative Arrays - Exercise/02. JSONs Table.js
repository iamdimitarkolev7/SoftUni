function solve(lines) {
    let result = '<table>\n';

    for (let line of lines) {
        let obj = JSON.parse(line);
        result += '    <tr>\n';

        for (let index in obj) {
            result += `    <td>${obj[index]}</td>\n`;
        }
        result += '    <tr>\n';
    }

    result += '</table>\n';

    console.log(result);
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);