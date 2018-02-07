function solve(email) {
    let regex = /^([A-Za-z0-9]+\@[a-z]+.[a-z]+)$/g;

    if (regex.test(email)) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}

solve('valid@email.bg');
solve('invalid@emai1.bg');