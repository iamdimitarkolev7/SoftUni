let vectorMath = (function () {
    function mapNumber(arr) {
        return arr.map(Number);
    }

    return {
        add: (vec1, vec2) => {
            let [a1, b1] = mapNumber(vec1);
            let [a2, b2] = mapNumber(vec2);
            return [a1 + a2, b1 + b2];
        },
        multiply: (vec1, scalar) => {
            scalar = Number(scalar);
            let [a, b] = mapNumber(vec1);
            return [a * scalar, b * scalar];
        },
        length: (vec1) => {
            let [a, b] = mapNumber(vec1);
            return Math.sqrt(a * a + b * b);
        },
        dot: (vec1, vec2) => {
            let [a1, b1] = mapNumber(vec1);
            let [a2, b2] = mapNumber(vec2);
            return a1 * a2 + b1 * b2;
        },
        cross: (vec1, vec2) => {
            let [a1, b1] = mapNumber(vec1);
            let [a2, b2] = mapNumber(vec2);
            return a1 * b2 - b1 * a2;
        }
    }
})();