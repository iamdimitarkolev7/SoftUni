function solve(lines) {
    let names = new Set();

    for (let line of lines) {
        names.add(line);
    }

    let sortedNames = Array.from(names).sort().sort((a,b) => {
        if (a.length > b.length) return 1;
        else if (a.length < b.length) return -1;

        return a.toLowerCase().localeCompare(b.toLowerCase());

    }).forEach(name => console.log(name));
}

solve(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston'])