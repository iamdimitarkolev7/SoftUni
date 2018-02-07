function solve(n) {
    for (let i = 1; i <= n - 1; i++) {
        console.log('*'.repeat(i));
    }
    console.log('*'.repeat(n));
    for (let i = n - 1; i >= 1; i--) {
        console.log('*'.repeat(i));
    }
}