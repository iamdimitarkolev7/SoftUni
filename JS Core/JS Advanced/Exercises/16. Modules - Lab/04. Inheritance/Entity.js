class Entity {
    constructor(name) {
        if(new.target === Entity){
            throw new TypeError('Abstract file')
        }
        this.name = name;
    }
}

module.exports = Entity;