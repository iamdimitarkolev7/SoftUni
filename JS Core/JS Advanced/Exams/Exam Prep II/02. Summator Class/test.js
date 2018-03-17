let Sumator = require('./Summator');
let expect = require("chai").expect;

describe("Summator Unit Tests", function() {
    let sumator;
    beforeEach(function () {
       sumator = new Sumator();
    });


    it("if data length is empty", function() {
        expect(sumator.data.length).to.be.equal(0);
    });
    describe("Test add func", function () {
        it("add only numbers", function () {
            sumator.add(2);
            sumator.add(3);
            sumator.add(5);
            expect(sumator.data.join(', ')).to.be.equal('2, 3, 5');
        });
        it("add only strings", function () {
            sumator.add('Gosho');
            sumator.add('Pesho');
            sumator.add('Ivan');
            expect(sumator.data.join(', ')).to.be.equal('Gosho, Pesho, Ivan');
        });
        it("add only objects", function () {
            sumator.add({name: 'Gosho'});
            sumator.add({});
            sumator.add({age: 17});
            expect(sumator.data.join(', ')).to.be.equal('[object Object], [object Object], [object Object]');
        });
        it("mix types", function () {
            sumator.add({name: 'Gosho'});
            sumator.add(5);
            sumator.add('String');
            expect(sumator.data.join(', ')).to.be.equal('[object Object], 5, String');
        });
    });

    describe("Test sum nums", function () {
        it("sum only numbers", function () {
            sumator.add(2);
            sumator.add(3);
            sumator.add(5);
            expect(sumator.sumNums()).to.be.equal(10);
        });
        it("sum only strings", function () {
            sumator.add('Gosho');
            sumator.add('Pesho');
            sumator.add('Ivan');
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it("sum mixed", function () {
            sumator.add(3);
            sumator.add('Pesho');
            sumator.add(8);
            expect(sumator.sumNums()).to.be.equal(11);
        });
    });

    describe("Test filter func", function() {
        it("remove all odd numbers", function() {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i);
            }

            sumator.removeByFilter((x) => x % 2 !== 0);
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10');
        });
        it("remove all numbers smaller than 5", function() {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i);
            }

            sumator.removeByFilter((x) => x <= 5);
            expect(sumator.data.join(', ')).to.be.equal('6, 7, 8, 9, 10');
        });
        it("remove all numbers smaller than 5", function() {
            for (let i = 0; i <= 10; i++) {
                if (i === 4) {
                    sumator.add("Pesho");
                    continue;
                }
                sumator.add(i);
            }

            sumator.removeByFilter((x) => typeof x !== 'string');
            expect(sumator.data.join(', ')).to.be.equal('Pesho');
        });
    });
    describe("Test toString func", function () {
        it('Test 1', function () {
            sumator.add(3);
            sumator.add("Gosho");
            sumator.add({});
            expect(sumator.toString()).to.be.equal('3, Gosho, [object Object]')
        });
        it("Test 2", function () {
            sumator.add("Shano");
            sumator.add("rock");
            expect(sumator.toString()).to.be.equal('Shano, rock');
        });
    });
    describe("Test functions exist", function() {
        it("data exists", function () {
            expect(sumator.data !== undefined).to.be.equal(true);
        });
        it("add func", function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true);
        });
        it("sumNums func", function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true);
        });
        it("removeByFilter func", function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true);
        });
        it("toString func", function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true);
        });
    });
});