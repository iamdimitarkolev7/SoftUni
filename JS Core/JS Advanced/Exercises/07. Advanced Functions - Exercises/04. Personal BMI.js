function solve(name, age, weight, height) {
    let bmi = Math.round(weight / (height * height / 10000));
    let status = '';
    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        status = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese'
    }

    let result = {};

    if (status === 'obese') {
        result = {
            name: name,
            personalInfo: {
                age: age,
                weight: weight,
                height: height
            },
            BMI: bmi,
            status: status,
            recommendation: "admission required"
        };
    } else {
        result = {
            name: name,
            personalInfo: {
                age: age,
                weight: weight,
                height: height
            },
            BMI: bmi,
            status: status
        }
    }

    return result;
}

solve('Peter', 29, 75, 182);
solve('Honey Boo Boo', 9, 57, 137);