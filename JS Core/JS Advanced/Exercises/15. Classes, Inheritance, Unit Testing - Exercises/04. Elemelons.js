function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error("Abstract class cannot be instantiated directly");
            }
            this.weight = Number(weight);
            this.melonSort = melonSort;
        }

        get elementIndex() {
            return this.weight * this.melonSort.length;
        }

        toString() {
            return `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }

        toString() {
            return 'Element: Water\n' + super.toString();
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Fire';
        }

        toString() {
            return 'Element: Fire\n' + super.toString();
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Earth';
        }

        toString() {
            return 'Element: Earth\n' + super.toString();
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Air';
        }

        toString() {
            return 'Element: Air\n' + super.toString();
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }

        morph() {
            if (this.element === "Water") {
                this.element = "Fire";
            } else if (this.element === "Fire") {
                this.element = "Earth";
            } else if (this.element === "Earth") {
                this.element = "Air";
            } else {
                this.element = "Water";
            }
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}