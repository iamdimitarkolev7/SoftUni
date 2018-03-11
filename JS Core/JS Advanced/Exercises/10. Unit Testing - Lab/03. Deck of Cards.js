function printCards(arr) {
    function makeCard(face, suit) {
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
    let result = [];

    for (let line of arr) {
        let face = line.substring(0, line.length - 1);
        let suit = line.substr(line.length - 1, 1);

            try {
                result.push(makeCard(face, suit));
            }
            catch (err) {
                console.log('Invalid card: ' + line);
                return
            }
    }
    console.log(result.join(' '));
}

printCards(['AS', '10D', 'KH', '2C']);