function solve(arr) {
    let inventory = [];
    let stringInventory = arr[0];
    //let tokens = stringInventory.split(' ').filter(a => a !== '');
    inventory = stringInventory.split(' ').filter(a => a !== '');

    for (let i = 1; i < arr.length; i++) {
        let tokens = arr[i].split(' ');
        let command = tokens[0];

        switch(command) {
            case 'Buy':
                //check wether element is there
                let element = tokens[1];
                if (!inventory.includes(element)) {
                    inventory.push(element);
                }
                break;
            case 'Trash':
                let element1 = tokens[1];
                if (inventory.includes(element1)) {
                    let indexOfElement1 = inventory.indexOf(element1);
                    inventory.splice(indexOfElement1, 1);
                }
                break;
            case 'Repair':
                let element2 = tokens[1];
                if (inventory.includes(element2)) {
                    let indexOfElement2 = inventory.indexOf(element2);
                    inventory.splice(indexOfElement2, 1);
                    inventory.push(element2);
                }
                break;
            case 'Upgrade':
                let tokenss = tokens[1].split('-');
                let equipment = tokenss[0];
                let upgrade = tokenss[1];
                if (inventory.includes(equipment)) {
                    let indexOfEquipment = inventory.indexOf(equipment);
                    let insertedElement = `${equipment}:${upgrade}`;
                    inventory.splice(indexOfEquipment + 1, 0, insertedElement);
                }
                break;
            case 'Fight!':
                console.log(inventory.join(' '));
                break;
        }
    }
}

solve(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel', 'Fight!']);