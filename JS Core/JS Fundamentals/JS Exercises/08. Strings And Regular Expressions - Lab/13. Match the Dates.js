function solve(input) {
    let dateRegex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let match = dateRegex.exec(input);
    while (match) {
        let wholeDate = match[0];
        let day = match[1];
        let month = match[2];
        let year = match[3];

        console.log(`${wholeDate} (Day: ${day}, Month: ${month}, Year: ${year})`);
        match = dateRegex.exec(input);
    }
}

solve('I am born on 30-Dec-1994. This is not date: 512-Jan-1996. My father is born on the 29-Jul-1955.')