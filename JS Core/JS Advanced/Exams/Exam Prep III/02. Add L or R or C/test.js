let expect = require("chai").expect;
let makeList = require("./list-add-left-right-clear");

describe("Tester", function() {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    it("Tests properties existence", function () {
        expect(myList.addLeft).to.exist;
        expect(myList.addRight).to.exist;
        expect(myList.clear).to.exist;
        expect(myList.toString).to.exist;
    });

    it("Tests emptiness of the array", function () {
        expect(myList.toString()).to.be.equal("");
    });

    it("Tests addRight function", function () {
       myList.addRight("Bayern");
       myList.addRight(13);
       myList.addRight("gmail");
       expect(myList.toString()).to.be.equal("Bayern, 13, gmail");
    });

    it("Tests addLeft function", function () {
        myList.addLeft("Bayern");
        myList.addLeft(13);
        myList.addLeft("gmail");
        expect(myList.toString()).to.be.equal("gmail, 13, Bayern");
    });

    it("Tests both function", function () {
        myList.addRight("Bayern");
        myList.addLeft("qwerty");
        myList.addRight("music");
        myList.addLeft("123");
        expect(myList.toString()).to.be.equal("123, qwerty, Bayern, music")
    });

    it("Tests clear function", function () {
        myList.addRight("Bayern");
        myList.addLeft("qwerty");
        myList.addRight("music");
        myList.addLeft("123");
        myList.clear();
        expect(myList.toString()).to.be.equal("")
    });
});
