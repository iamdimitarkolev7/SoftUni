function solve(minimumAge, name1, age1, name2, age2) {
    let firstPerson = {
        name: name1,
        age: Number(age1)
    };
    let secondPerson = {
        name: name2,
        age: Number(age2)
    };

    if (firstPerson.age >= Number(minimumAge)) {
        console.log(firstPerson);
    }

    if (secondPerson.age >= Number(minimumAge)) {
        console.log(secondPerson);
    }
}