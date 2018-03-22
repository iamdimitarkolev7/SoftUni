class PaymentProcessor {
    constructor(obj) {
        this.types = ["service", "product", "other"];
        this.precision = 2;
        this.payments = [];
        this.count = 0;
        this.balance = 0;
        if (obj !== undefined) {
            if (obj.hasOwnProperty('types')) {
                this.types = obj['types'];
            }
            if (obj.hasOwnProperty('precision')) {
                this.precision = obj['precision'];
            }
        }
    }

    registerPayment(id, name, type, value) {
        if (id.length === 0 || typeof id !== 'string') {
            throw new Error("invalid ID");
        }
        if (name.length === 0 || typeof name !== 'string') {
            throw new Error("invalid name");
        }
        if (typeof value !== 'number') {
            throw new Error("invalid value");
        }
        if (!this.types.includes(type)) {
            throw new Error("invalid type");
        }
        for (let i = 0; i < this.payments.length; i++) {
            if (id === this.payments[i].id) {
                throw new Error('');
            }
        }

        value = Number(value.toFixed(this.precision));

        this.payments.push({id: id, name: name, type: type, value: value});
        this.count++;
        this.balance += value;
        return this;
    }

    deletePayment(id) {
        for (let i = 0; i < this.payments.length; i++) {
            if (this.payments[i].id = id) {
                this.payments.splice(i, 1);
                return this;
            }
        }

        throw new Error;
    }

    get(id) {
        for (let i = 0; i < this.payments.length; i++) {
            if (this.payments[i].id = id) {
                return `Details about payment ID: ${this.payments[i].id}\n` +
                    `- Name: ${this.payments[i].name}\n` +
                    `- Type: ${this.payments[i].type}\n` +
                    `- Value: ${this.payments[i].value}\n`;
                }
            }
            throw new Error('');
        }

    setOptions(options) {
        if (options.hasOwnProperty('types')) {
            this.types = options['types'];
        }
        if (options.hasOwnProperty('precision')) {
            this.precision = options['precision'];
        }
    }

    toString() {
        return `Summary:\n` +
            `- Payments: ${this.count}\n` +
            `- Balance: ${this.balance}\n`;
    }
}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
generalPayments.registerPayment('01', 'HR Consultation', 'service', 3000);
generalPayments.get('0001');
generalPayments.deletePayment('0001');


