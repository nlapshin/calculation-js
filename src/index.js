const _ = require("lodash");

module.exports = class Calculation {
	constructor(options = {}) {
		this.fixed = ('fixed' in options) ? options.fixed : 0;
	}

	sumArr(arr, fixed, outputType) {
		let value = arr.reduce((sum, v) => sum + Number(v), 0);

		return this.__prepareResult(value, fixed, outputType);
	}

	diff(value1, value2, fixed, outputType) {
	    var value = value1 - value2;

	    return this.__prepareResult(value, fixed, outputType);
	}

	average(sum, count, fixed, outputType) {
	    var value = (sum / count);

	    return this.__prepareResult(value, fixed, outputType);
	}

	averageArr(arr, fixed, outputType) {
	    var input = this.sumArr(arr);

	    return this.average(input, arr.length, fixed, outputType);
	}

	averageWindow(min, max, percent, fixed, outputType) {
	    let step = (max - min) / 100;
	    let value = max - (percent * step);

	    return this.__prepareResult(value, fixed, outputType);
	}

	probability(num, fixed, outputType) {
		let value = 1 / Number(num);

	    return this.__prepareResult(value, fixed, outputType);
	}

	mediana(arr, fixed, outputType) {
		const sortArr = arr.sort();
	    const count = arr.length;

	    if (count == 0) {
	        var value = 0;
	    } else if (count == 1) {
	        var value = sortArr[0];
	    } else if (count == 2) {
	        var value = (sortArr[0] + sortArr[1]) / 2;
	    } else if (count % 2) {
	        var n = parseInt(count / 2);
	        var value = sortArr[n];
	    } else {
	        var n = parseInt(count / 2) - 1;
	        var value = (sortArr[n] + sortArr[n + 1]) / 2
	    };

	    return this.__prepareResult(value, fixed, outputType);
	}

	moda(values, fixed, outputType) {
	    var counts = _.countBy(values, _.identity);

	    var maxNum = [];
	    var maxVal = 0;

	    _.each(counts, function(value, num) {
	        if (value < maxVal) return;

	        if (value == maxVal) maxNum.push(parseInt(num));

	        if (value > maxVal) {
	            maxVal = value;
	            maxNum.length = 0;
	            maxNum.push(parseInt(num));
	        };
	    });

	    return maxNum;
	}

	chance(value, len, fixed, outputType) {
		var output = (value / len) * 100;

		return this.__prepareResult(output, fixed, outputType);
	}

	persent(value, len) {
	    return chance(value, len, 0);
	}

	poisson(l,x) {
	    var e = 2.71828;
	    var p = Math.pow(l,x);
	    var g = Math.pow(e,-l);
	    var r = 1;

	    for (y = x; y >= 1; y--) {
	        r = r * y;
	    };

	    var res = Math.round(((p * g) / r)*1000) / 1000;

	    return res;
	}

	/* private */

	__prepareResult(value, fixed, outputType) {
		let curFixed = (typeof fixed != "undefined") ? fixed : this.fixed;

		let outputValue = value.toFixed(curFixed);

		return outputType == "string" ? outputValue.toString() : Number(outputValue);
	}
};
