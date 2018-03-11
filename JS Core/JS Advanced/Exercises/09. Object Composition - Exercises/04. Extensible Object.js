function getExtensibleObject() {
    let obj = {
        __proto__: {},
        extend: function (template) {
            for (let key in template) {
                let element = template[key];
                if (typeof  element === 'function') {
                    Object.getPrototypeOf(obj)[key] = element;
                } else {
                    obj[key] = element;
                }
            }
        }
    };

    return obj;
}

let template =  {
    extensionMethod: () => {
        console.log("From extension method");
    },
    extensionProperty: 'someString'
};
