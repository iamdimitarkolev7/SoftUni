function solve(text, bannedWords) {
    for (let str of bannedWords) {
        let regex = new RegExp(str, 'g');
        let dashes = '-'.repeat(str.length);
        text = text.replace(regex, dashes);
    }

    console.log(text);
}