function solution(username,email,number,text=[]) {
    let result = [];
    let regexUserName = /<![a-zA-Z]+!>/g;
    let regexEmail = /<@[a-zA-Z]+@>/g;
    let regexNumber = /<\+[a-zA-Z]+\+>/g;

    function replacer (str){
        str = str.replace(regexUserName,username);
        str =  str.replace(regexEmail,email);
        str =  str.replace(regexNumber,number)
        console.log(str)
    }

    for (let sentence of text) {
        replacer(sentence);
    }

}