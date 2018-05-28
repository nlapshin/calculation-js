const { assert } = require("chai");
const Calculation = require("./index");

describe("sumArr", () => {

	it("it should correctly count the sum of numbers in the form of an array", () => {
		let calc = new Calculation({ fixed: 2 });

		assert.equal(calc.sumArr([1, 2]), 3);
		assert.equal(calc.sumArr([1, 2, -1, -2]), 0);
		assert.equal(calc.sumArr([1.5, 2.5, -1, -2]), 1);
		assert.equal(calc.sumArr([1.512, 2.623, -1, -2]), 1.13);
		assert.equal(calc.sumArr([1.5, 2.6, -1, -2], 1), 1.1);
		assert.equal(calc.sumArr([1.5, 2.6, -1, -2], 1, "string"), "1.1");
	});

});

describe("diff", () => {

	it("it should correctly calculate the difference of two numbers", () => {
		let calc = new Calculation({ fixed: 2 });

		assert.equal(calc.diff(2, 1), 1);
		assert.equal(calc.diff(-1, 1), -2);
		assert.equal(calc.diff(-1.1, 2.3), -3.4);
		assert.equal(calc.diff(-1.11, 2.31), -3.42);
		assert.equal(calc.diff(-1.11, 2.31, 1), -3.4);
		assert.equal(calc.diff(2, 1, 0, "string"), "1");
	});

});

describe("average", () => {

	it("it should correctly calculate the average value", () => {
		let calc = new Calculation({ fixed: 2 });

		assert.equal(calc.average(6, 2), 3);
		assert.equal(calc.average(5, 2), 2.5);
		assert.equal(calc.average(5.2, 1.1), 4.73);
		assert.equal(calc.average(6, 2, 0, "string"), "3");
	});

});

describe("averageArr", () => {

	it("it should correctly calculate the average value of an array of numbers", () => {
		let calc = new Calculation({ fixed: 2 });

		assert.equal(calc.averageArr([1, 3, 5]), 3);
		assert.equal(calc.averageArr([1, 3.4, 5.5]), 3.3);
		assert.equal(calc.averageArr([1, 3.4, 5.5], 1, "string"), "3.3");
	});

});

describe("averageWindow", () => {

	it("it should correctly calculate the average window", () => {
		let calc = new Calculation({ fixed: 2 });

		assert.equal(calc.averageWindow(40, 60, 50), 50);
		assert.equal(calc.averageWindow(30, 70, 45), 52);
		assert.equal(calc.averageWindow(30, 70, 40), 54);
	});

});

describe("probability", () => {

	it("it should correctly calculate probability", () => {
		let calc = new Calculation({ fixed: 2 });

		assert.equal(calc.probability(4), 0.25);
		assert.equal(calc.probability(10), 0.1);
		assert.equal(calc.probability(2), 0.5);
	});

});

describe("mediana", () => {

	it("it should correctly calculate mediana", () => {
		let calc = new Calculation({ fixed: 2 });

		assert.equal(calc.mediana([]), 0);
		assert.equal(calc.mediana([1]), 1);
		assert.equal(calc.mediana([1, 2]), 1.5);
		assert.equal(calc.mediana([1, 2, 3]), 2);
		assert.equal(calc.mediana([1, 2, 2, 3]), 2);
		assert.equal(calc.mediana([1, 4, 3, 2, 5]), 3);
		assert.equal(calc.mediana([1, 2, 2, 3, 3, 4]), 2.5);
	});

});

describe("moda", () => {

	it("it should correctly calculate moda", () => {
		let calc = new Calculation({ fixed: 2 });

		assert.deepEqual(calc.moda([1]), [1]);
		assert.deepEqual(calc.moda([1, 2]), [1, 2]);
		assert.deepEqual(calc.moda([1, 2, 3]), [1, 2, 3]);
		assert.deepEqual(calc.moda([1, 2, 2, 3]), [2]);
		assert.deepEqual(calc.moda([1, 4, 3, 2, 5]), [1, 2, 3, 4, 5]);
		assert.deepEqual(calc.moda([1, 2, 2, 3, 3, 4]), [2, 3]);
	});

});

describe("chance", () => {

	it("it should correctly calculate chance", () => {
		let calc = new Calculation({ fixed: 2 });

		assert.deepEqual(calc.chance(75, 100), 75);
		assert.deepEqual(calc.chance(6, 10), 60);
	});

});

describe("persent", () => {

	it("it should correctly calculate persent", () => {
		let calc = new Calculation({ fixed: 2 });

		assert.deepEqual(calc.chance(75, 100), 75);
		assert.deepEqual(calc.chance(6, 10), 60);
	});

});