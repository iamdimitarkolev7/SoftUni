function solve(face, suit) {
    const validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q'];
    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (validCards.indexOf(face) < 0 || !validSuits.hasOwnProperty(suit)) {
        throw new Error('Invalid face');
    }

    return {
        card: face,
        suit: suit,
        toString: function () {
            return this.card + validSuits[this.suit];
        }
    };
}

console.log('' + solve('A', 'S'));
console.log('' + solve('10', 'H'));
console.log('' + solve('1', 'C')); //error