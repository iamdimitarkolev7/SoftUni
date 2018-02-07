function solve(mainString, substring) {
    let substringOfMainString = mainString.substr(mainString.length - substring.length, mainString.length);
    let result = (substring === substringOfMainString) ? console.log('true') : console.log('false');
}

solve('This sentence ends with fun?', 'fun?');