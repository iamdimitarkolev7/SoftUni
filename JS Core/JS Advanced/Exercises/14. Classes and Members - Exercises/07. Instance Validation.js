class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(clientId) {
        let regex = /\b[0-9]{6}\b/;
        if (!regex.test(clientId) || typeof clientId !== 'string') {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = clientId;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        let regex = /^\w+@[a-zA-Z.]+$/;
        if(!regex.test(email)){
            throw new TypeError("Invalid e-mail");
        }

        this._email = email;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(fName) {
        if (fName.length < 3 || fName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        let regex = /^[A-Za-z]+$/;
        if (!regex.test(fName)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = fName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lName) {
        if (lName.length < 3 || lName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        let regex = /^[A-Za-z]+$/;
        if (!regex.test(lName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = lName;
    }
}