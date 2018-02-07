function solve(lines) {
    let systems = new Map();

    for (let line of lines) {
        let tokens = line.split(' | ').filter(a => a !== '');
        let systemName = tokens[0];
        let componentName = tokens[1];
        let subcomponentName = tokens[2];

        if (!systems.has(systemName)) {
            systems.set(systemName, new Map());
        }

        if (!systems.get(systemName).has(componentName)) {
            systems.get(systemName).set(componentName, []);
        }

        systems.get(systemName).get(componentName).push(subcomponentName);
    }

    let keys = Array.from(systems.keys()).sort((a,b) => sortByFirstCriteria(a,b,systems));

    for (let key of keys) {
        console.log(key);

        let components = [...systems.get(key).keys()]
            .sort((s1, s2) => systems.get(key).get(s2).length - systems.get(key).get(s1).length); // sort by second criteria

        for (let component of components) {
            console.log(`|||${component}`);

            for (let subComponent of systems.get(key).get(component)) {
                console.log(`||||||${subComponent}`);
            }
        }

    }

    function sortByFirstCriteria(sysA, sysB, catalogue) {
        let aComponents = catalogue.get(sysA).size;
        let bComponents = catalogue.get(sysB).size;
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLocaleLowerCase());
    }
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security'])