class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this.element = this.createElement();

        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        if (value) {
            this.element.find('.title').addClass('online');
        } else {
            this.element.find('.title').removeClass('online');
        }

    }
    render(id) {
        let container = $('#' + id);
        container.append(this.element);
    }

    createElement() {
        let articleDiv = $('<article>');
        let titleDiv = $(`<div class="title">${this.firstName} ${this.lastName}</div>`);
        let button = $(`<button>&#8505;</button>`).on('click', () => {
            infoDiv.toggle();
        });
        let infoDiv = $(`<div class="info" style="display:none">
                            <span>&phone; ${this.phone}</span>
                            <span>&#9993; ${this.email}</span>
                         </div>
                        `);

        articleDiv.append(titleDiv.append(button))
            .append(infoDiv);
        return articleDiv;
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));
// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);