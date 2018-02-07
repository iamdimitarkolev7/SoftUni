function solve([speed, area]) {
    speed = Number(speed);
    area = area.toString();
    let getLimit = area => {
        switch (area) {
            case 'motorway': return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    };

    let speedDifference = speed - getLimit(area);

    if (speedDifference <= 0) {
        console.log('');
    } else if (speedDifference > 0 && speedDifference <= 20) {
        console.log('speeding');
    } else if (speedDifference > 20 && speedDifference <= 40) {
        console.log('excessive speeding');
    } else if (speedDifference > 40) {
        console.log('reckless driving');
    }
}
