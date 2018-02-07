function solve(n) {
    if (n % 2 === 0) {
        let result = '+';
        //upper roll
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+';
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+' + '\n';

        if (n - 4 !== 0) {
            for (let j = 1; j <= (n - 4) / 2; j++) {
                result += '|';
                for (let i = 1; i <= n - 2; i++) {
                    result += ' ';
                }
                result += '|';
                for (let i = 1; i <= n - 2; i++) {
                    result += ' ';
                }
                result += '|' + '\n';
            }
        }


        //middle roll
        result += '+';
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+';
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+' + '\n';

        if (n - 4 !== 0) {
            for (let j = 1; j <= (n - 4) / 2; j++) {
                result += '|';
                for (let i = 1; i <= n - 2; i++) {
                    result += ' ';
                }
                result += '|';
                for (let i = 1; i <= n - 2; i++) {
                    result += ' ';
                }
                result += '|' + '\n';
            }
        }

        //downer roll
        result += '+';
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+';
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+' + '\n';
        console.log(result);
    } else {
        let result = '+';
        //upper roll
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+';
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+' + '\n';

        for (let j = 1; j <= (n - 2) / 2; j++) {
            result += '|';
            for (let i = 1; i <= n - 2; i++) {
                result += ' ';
            }
            result += '|';
            for (let i = 1; i <= n - 2; i++) {
                result += ' ';
            }
            result += '|' + '\n';
        }

        //middle roll
        result += '+';
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+';
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+' + '\n';

        for (let j = 1; j <= (n - 2) / 2; j++) {
            result += '|';
            for (let i = 1; i <= n - 2; i++) {
                result += ' ';
            }
            result += '|';
            for (let i = 1; i <= n - 2; i++) {
                result += ' ';
            }
            result += '|' + '\n';
        }

        //downer roll
        result += '+';
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+';
        for (let i = 1; i <= n - 2; i++) {
            result += '-'
        }
        result += '+' + '\n';
        console.log(result);
    }
}