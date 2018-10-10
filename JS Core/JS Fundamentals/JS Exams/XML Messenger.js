function solve(input) {
    let regex = /^<message((?:\s+[a-z]+="[A-Za-z0-9. ]+")+)>((?:.|\n)+)<\/message>$/;
    let match = regex.exec(input);
    let result = `<article>\n`;

    if (match !== null) {
        let to = /\bto="([A-Za-z0-9. ]+)"/;
        let matchTo = to.exec(match[1]);
        let from = /\bfrom="([A-Za-z0-9. ]+)"/;
        let matchFrom = from.exec(match[1]);

        if (matchTo === null) {
            console.log('Missing attributes');
            return;
        }
        if (matchFrom === null) {
            console.log('Missing attributes');
            return;
        }

        let divFrom = `  <div>From: <span class="sender">${matchFrom[1]}</span></div>`;
        let divTo = `  <div>To: <span class="recipient">${matchTo[1]}</span></div>`;
        result += divFrom + '\n';
        result += divTo;
        let messages = match[2].split('\n');
        let messagesDiv = `  <div>\n`;
        for (let i = 0; i < messages.length; i++) {
            let p = `    <p>${messages[i]}</p>\n`;
            messagesDiv += p;
        }
        messagesDiv += '  </div>';
        result += '\n' + messagesDiv;
        result += '\n' + '</article>';
    } else {
        console.log('Invalid message format');
        return;
    }
    console.log(result);
}

solve(`<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>`);