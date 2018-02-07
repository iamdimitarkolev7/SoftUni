function solve(n) {
    let result = '<div class="chessboard">\n';
    for (let i = 1; i <= n; i++) {
        result += '<div>\n';
        let color = i % 2 === 0 ? 'white' : 'black';
        for (let j = 1; j <= n; j++) {
            result += '    <span class="' + color + '"></span>\n';
            color = (color === 'white') ? 'black' : 'white';
        }
        result += '</div>\n';
    }
    result += '</div>\n';

    console.log(result);
}