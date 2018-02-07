function checkPalindrom(input) {

    let result = "";

    for (let i = 0; i < input.length ; i++) {
        if (input[i] !== input[input.length - i - 1]) {
            result = 'false'
        }
        else{
            result = 'true';
        }
    }
    console.log(result);
}