function solve(number) {
    number = number.toString();
    let findAverage = number => {
        let sum = 0;
        for (let digit of number) {
            sum += Number(digit);
        }
        return sum / number.length;
    };

    let average = findAverage(number);

    while (average <= 5){
        number += '9';
        average = findAverage(number);
    }

    console.log(number);
}