function solve(matrix) {
    let result = [];
    for (let array of matrix) {
        let obj = {
            width: array[0],
            height: array[1],
            area: function() {
                return Number(this.width * this.height);
            },
            compareTo: function (other) {
                let difference = other.area() - this.area();
                if (difference !== 0) {
                    return difference;
                } else {
                    return other.width - this.width;
                }
            }
        };

        result.push(obj);
    }

    result.sort((a,b) => a.compareTo(b));
    return result;
}

console.log(solve([[10,5], [3,20], [5,12]]));