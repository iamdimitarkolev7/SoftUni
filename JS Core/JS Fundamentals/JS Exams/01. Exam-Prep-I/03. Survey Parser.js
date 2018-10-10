function solve(string) {
    let patternForNoSurvey = /<svg>(.|\n)+<\/svg>/g;
    let truePattern = /<svg>\s*<cat>\s*<text>(?:.)*\[((?:.|\n)+)](?:.)*<\/text>\s*<\/cat>\s*<cat>(.*)\s*<\/cat><\/svg>/;
    let otherPattern = /<g><val>(.+?)<\/val>(.+?)<\/g>/g;

    if (!string.match(patternForNoSurvey)) {
        console.log('No survey found');
        return
    }
    if (!string.match(truePattern)) {
        console.log('Invalid format');
        return
    }
    let match = truePattern.exec(string);
    let votes = match[2];
    let matches = otherPattern.exec(votes);
    let totalVotes = 0;
    let allCounts = 0;
    while (matches) {
        let value = Number(matches[1]);
        let count = Number(matches[2]);

        if (!(isNaN(value) || isNaN(count))) {
            allCounts += count;

            totalVotes += count * value;
        }

        matches = otherPattern.exec(votes)
    }

    console.log(match[1] + ': ' + Math.round((totalVotes / allCounts) * 100) / 100);
}


solve('<svg><cat><g><val>10<\/val>3<\/g><g><cat><text>[dasda90]asdasd</text></cat><val>3</val>2</g><g><val>1</val>3</g><\/cat><\/svg>');