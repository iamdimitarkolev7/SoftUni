function solve(input) {
    let result = '<?xml version="1.0" encoding="UTF-8"?>' + '\n';
    result += '<quiz>\n';
    for (let i = 0; i < input.length; i += 2) {
        result += '<question>\n';
        result += input[i] + '\n';
        result += '</question>\r\n';
        result += '<answer>\n';
        result += input[i + 1] + '\n';
        result += '</answer>\n';
    }
    result += '</quiz>\n';

    console.log(result);
}