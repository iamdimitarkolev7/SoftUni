function solve(obj) {
    if (obj['handsShaking']) {
        obj.bloodAlcoholLevel += Number(obj['weight']) * Number(obj['experience']) / 10;
        obj['handsShaking'] = false;
    }
    return obj;
}

solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true });