function solve(text, word) {
    let regex = new RegExp('\\b' + word + '\\b', 'ig');
    let match = text.match(regex);
    if (match) {
        console.log(match.length);
    } else {
        console.log('0');
    }
}

solve('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');