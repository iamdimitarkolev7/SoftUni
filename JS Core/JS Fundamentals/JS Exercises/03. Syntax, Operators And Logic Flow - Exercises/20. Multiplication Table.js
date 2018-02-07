function solve(n) {
    let result = '<table border=\"1\">\n';
    result += '<tr><th>x</th>';

    for (let i = 1; i <= n; i++) {
        result += '<th>' + i + '</th>';
    }
    result += '</tr>\n';

    for (let i = 1; i <= n; i++) {
        result += '<tr><th>' + i +'</th>';
        for (let j = 1; j <= n; j++) {
            result += '<td>' + (i * j) + '</td>';
        }
        result += '</tr>\n';
    }
    result += '</table>';

    console.log(result);
}