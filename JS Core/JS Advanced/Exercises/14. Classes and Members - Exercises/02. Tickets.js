function solve(lines, order) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let line of lines) {
        let tokens = line.split('|');
        let destinationName = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];

        let ticket = new Ticket(destinationName, price, status);
        tickets.push(ticket);
    }

    let sortedTickets = [];

    switch (order){
        case "destination":
            sortedTickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            sortedTickets = tickets.sort((a, b) => a.price - b.price);
            break;
        case "status":
            sortedTickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return sortedTickets;
}