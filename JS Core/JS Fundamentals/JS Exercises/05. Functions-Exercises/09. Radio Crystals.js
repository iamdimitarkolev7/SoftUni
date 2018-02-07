function solve(input) {
    let finalThickness = Number(input[0]);

    function process(crystalThickness, action) {
        switch (action) {
            case "cut":
                crystalThickness /= 4;
                cutCount++;
                break;
            case "lap":
                crystalThickness /= 1.25;
                lapCount++;
                break;
            case "grind":
                crystalThickness -= 20;
                grindCount++;
                break;
            case "etch":
                crystalThickness -= 2;
                etchCount++;
                break;
            case "xRay":
                crystalThickness += 1;
                xrayCount++;
                return crystalThickness;
        }

        return transportingWashing(crystalThickness);
    }
}

solve([1375, 5000]);