function solve(arr) {
    return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .sort((a,b) => a.length - b.length)
        .join('\n');
}

solve(['alpha', 'beta', 'gamma']);