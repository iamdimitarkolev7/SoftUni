let Entity = require('./Entity');
class Person extends Entity{
    constructor(name, phrase, dog ){
        super(name);
        this.phrase = phrase;
        this.dog = dog;
    }

    saySomething(){
        return `${this.name} says: ${this.phrase}${this.dog.name} barks!`
    }
}
module.exports = Person