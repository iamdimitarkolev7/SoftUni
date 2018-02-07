function solve(input) {
    let regex = /www\.[A-Za-z0-9-]+\.([a-zA-Z]+\.)*([a-zA-Z]+)/g;
    for (let el of input) {
        let matches = el.match(regex);
        if (matches) {
            for (let i = 0; i < matches.length; i++) {
                console.log(matches[i]);
            }
        }
    }
}

solve(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko']);