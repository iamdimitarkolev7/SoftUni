function mapSort(map, sortFn) {

    if (!sortFn) {
        sortFn = function(a,b){
            return a[0].toString().localeCompare(b[0].toString())
        }
    }
    let result = new Map;
    let keys = Array.from(map.entries()).sort(sortFn);

    for (let key of keys) {
        result.set(key[0], map.get(key[0]));
    }

    return result
}

module.exports = mapSort;