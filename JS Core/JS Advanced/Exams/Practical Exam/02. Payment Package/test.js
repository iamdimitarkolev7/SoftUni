let expect = require("chai").expect;
let PaymentPackage = require("./payment-package");

describe("Tester", function() {
    let paymentPackage;
    it("Should not throw", function() {
        paymentPackage = new PaymentPackage('ask', 1500);
        expect(paymentPackage).to.not.throw;
    });


    describe("Test throwing errors", function () {
        it("Should throw", function () {
            expect(() => new PaymentPackage('', 1500)).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => new PaymentPackage(1500, 1500)).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => new PaymentPackage({abc: 12}, 1500)).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => new PaymentPackage('asd', -1)).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => new PaymentPackage('asd', 'angry')).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => new PaymentPackage()).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => {paymentPackage = new PaymentPackage("String", 1500);
                paymentPackage.active = null}).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => {paymentPackage = new PaymentPackage("String", 1500);
                paymentPackage.active = 'qwerty'}).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => {paymentPackage = new PaymentPackage("String", 1500);
                paymentPackage.VAT = -1}).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => {paymentPackage = new PaymentPackage("String", 1500);
                paymentPackage.VAT = 'asd'}).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => {
                paymentPackage = new PaymentPackage("String", 1500);
                paymentPackage.active = null;
                paymentPackage.VAT = 2;
            }).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => {
                paymentPackage = new PaymentPackage("String", 1500);
                paymentPackage.active = null;
                paymentPackage.VAT = -20000;
            }).to.throw(Error);
        });
        it("Should throw", function () {
            expect(() => {
                paymentPackage = new PaymentPackage("", {});
                paymentPackage.active = 123;
                paymentPackage.VAT = "---";
            }).to.throw(Error);
        });
    });

    describe("Test toString", function () {
        it("tests toString reqularily", function () {
            paymentPackage = new PaymentPackage("String", 1500);
            paymentPackage.active = true;
            paymentPackage.VAT = 2;
            expect(paymentPackage.toString()).to.be.equal('Package: String\n- Value (excl. VAT): 1500\n- Value (VAT 2%): 1530');
        });
        it("tests toString reqularily", function () {
            paymentPackage = new PaymentPackage("String", 1500);
            paymentPackage.active = false;
            paymentPackage.VAT = 2;
            expect(paymentPackage.toString()).to.be.equal('Package: String (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 2%): 1530');
        });
        it("tests toString reqularily", function () {
            paymentPackage = new PaymentPackage("String", 1500);
            paymentPackage.active = false;
            expect(paymentPackage.toString()).to.be.equal('Package: String (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });
        it("Should not throw", function() {
            paymentPackage = new PaymentPackage('ask', 1500);
            expect(paymentPackage.toString()).to.be.equal('Package: ask\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });
        it("tests toString reqularily", function () {
            paymentPackage = new PaymentPackage("String", 1500);
            paymentPackage.active = true;
            paymentPackage.VAT = 0;
            expect(paymentPackage.toString()).to.be.equal('Package: String\n- Value (excl. VAT): 1500\n- Value (VAT 0%): 1500');
        });
        it("tests toString reqularily", function () {
            paymentPackage = new PaymentPackage("S", 0);
            paymentPackage.active = true;
            paymentPackage.VAT = 100;
            expect(paymentPackage.toString()).to.be.equal('Package: S\n- Value (excl. VAT): 0\n- Value (VAT 100%): 0');
        });
        it("tests toString regularily", function () {
            paymentPackage = new PaymentPackage("123", 123);
            paymentPackage.active = false;
            paymentPackage.VAT = 83;
            expect(paymentPackage.toString()).to.be.equal('Package: 123 (inactive)\n- Value (excl. VAT): 123\n- Value (VAT 83%): 225.09');
        });
        it("tests toString regularily", function () {
            paymentPackage = new PaymentPackage("123", 123);
            paymentPackage.active = true;
            paymentPackage.VAT = 1000;
            expect(paymentPackage.toString()).to.be.equal('Package: 123\n- Value (excl. VAT): 123\n- Value (VAT 1000%): 1353');
        });
        it("tests toString regularily", function () {
            paymentPackage = new PaymentPackage("123", 3333333);
            paymentPackage.active = false;
            paymentPackage.VAT = 83;
            expect(paymentPackage.toString()).to.be.equal('Package: 123 (inactive)\n- Value (excl. VAT): 3333333\n- Value (VAT 83%): 6099999.390000001');
        });
        it("tests toString regularily", function () {
            expect(() => {
                paymentPackage = new PaymentPackage("a", 0);
            }).to.not.throw();
        });
    });
});
