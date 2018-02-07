function solve(mainString, substring) {
    let lengthOfSubstring = substring.length;
    let substringOFMainString = mainString.substr(0, lengthOfSubstring);
    let result = (substringOFMainString === substring) ? console.log('true') : console.log('false');
}

solve('The quick brown fox...', 'The quick brown fox...');