let Entity = require('./Entity');

class Dog extends Entity {
    constructor(name){
        super(name)
    }
    saySomething(){
        return this.name + 'barts!';
    }
}

module.exports = Dog;