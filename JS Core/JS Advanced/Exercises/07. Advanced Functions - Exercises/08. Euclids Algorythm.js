function euclidsAlgorithm(a, b) {
    [a, b] = [a, b].map(Number);
    if (Math.min(a, b) === 0)
        return Math.max(a, b);
    return euclidsAlgorithm(b, a % b);
}