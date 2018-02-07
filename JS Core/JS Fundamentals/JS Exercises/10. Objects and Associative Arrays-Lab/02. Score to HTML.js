function solve(strArr) {
    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    let arr = JSON.parse(strArr);
    let result = '<table>\n';
    let keys = Object.keys(arr[0]);
    result += `    <tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`;

    for (let obj of arr) {
        result += `    <tr><td>${escapeChars(obj[keys[0]].toString())}</td><td>${escapeChars(obj[keys[1]].toString())}</td></tr>\n`;
    }

    result += '</table>';
    console.log(result);
}

solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');