function solve(text) {
    let map = new Map();
    for (let sentence of text) {
        let words = sentence
            .split(/[^a-zA-Z0-9_]/)
            .filter(el => el !== '');

        for (let word of words) {
            word = word.toLowerCase();
            if (!(map.has(word))) {
                map.set(word, 1);
            } else {
                map.set(word, map.get(word) + 1);
            }
        }
    }

    let allWords = Array.from(map.keys())
        .sort()
        .forEach(w => console.log(`'${w}' -> ${map.get(w)} times`));

}

solve(['JS devs use Node.js for server-side JS.-- JS for devs']);