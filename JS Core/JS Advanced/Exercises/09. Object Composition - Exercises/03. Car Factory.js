function solve(obj) {
    let resultObj = {
        model: obj.model,
        engine: { power: 0, volume: 0 },
        carriage: { type: '', color: '' },
        wheels: []
    };
    if (obj.power <= 90) {
        resultObj.engine.power = 90;
        resultObj.engine.volume = 1800;
    } else if (obj.power <= 120) {
        resultObj.engine.power = 120;
        resultObj.engine.volume = 2400;
    } else {
        resultObj.engine.power = 200;
        resultObj.engine.volume = 3500;
    }

    resultObj.carriage.type = obj.carriage;
    resultObj.carriage.color = obj.color;

    if (obj.wheelsize % 2 === 0) {
        for (let i = 1; i <= 4; i++) {
            resultObj.wheels.push(obj.wheelsize - 1);
        }
    } else {
        for (let i = 1; i <= 4; i++) {
            resultObj.wheels.push(obj.wheelsize);
        }
    }

    return resultObj;
}

solve({ model: 'VW Golf II',
power: 90,
    color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });