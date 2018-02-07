function solve(num1, num2, operand) {
    let result = 0;
    switch(operand) {
        case '+':
            result = num1 + num2;
            console.log(result);
            break;
        case '-':
            result = num1 - num2;
            console.log(result);
            break;
        case '/':
            result = num1 / num2;
            console.log(result);
            break;
        case '*':
            result = num1 * num2;
            console.log(result);
            break;
        case '%':
            result = num1 % num2;
            console.log(result);
            break;
    }
}