function solve(input) {
    let usernames = [];
    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split('@');
        let username= tokens[0] + '.';
        let domain = tokens[1].split('.');

        for (let str of domain) {
            username += str[0];
        }

        usernames.push(username);
    }

    console.log(usernames.join(', '));
}