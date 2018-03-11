function solve(array, order) {
    let ascendingComparator = function (a, b) {
        return a - b;
    };
    let descendingComparator = function (a, b) {
        return b - a;
    };
    let sortingStrategy = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };

    return array.sort(sortingStrategy[order]);
}

solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');