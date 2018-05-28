const _ = require("lodash");

module.exports = class Calculation {
	consturctor(options = {}) {
		this.fixed = ('fixed' in options) ? options[fixed] : 0;
	},

	sumArr(arr, fixed, outputType) {
		let value = arr.reduce((sum, v) => sum + Number(v), 0);

		return this.__prepareResult(value, fixed, outputType);
	},

	diff(value1, value2, fixed, type) {
	    var value = value1 - value2;

	    return this.__prepareResult(value, fixed, outputType);
	},

	average(sum, count, fixed, type) {
	    var value = (sum / count);

	    return this.__prepareResult(value, fixed, outputType);
	},

	averageArr(arr, fixed, type) {
	    var input = this.umArr(arr);
	    var value = (input / arr.length);

	    return this.__prepareResult(value, fixed, outputType);
	},

	averageWindow(min, max, percent, fixed, outputType) {
	    let step = (max - min) / 100;
	    let value = max - (percent * step);

	    return this.__prepareResult(value, fixed, outputType);
	},

	probability(num, fixed, outputType) {
		let value = 1 / Number(num);

	    return this.__prepareResult(value, fixed, outputType);
	},

	mediana(arr, fixed, outputType) {
	    const count = arr.length;

	    if (count == 0) {
	        var value = 0;
	    } else if (count == 1) {
	        var value = arr[0];
	    } else if (count == 2) {
	        var value = (arr[0] + arr[1]) / 2;
	    } else if (count % 2) {
	        var n = parseInt(count / 2) + 1;
	        var value = arr[n];
	    } else {
	        var n = parseInt(count / 2);
	        var value = (arr[n] + arr[n + 1]) / 2
	    };

	    return this.__prepareResult(value, fixed, outputType);
	},

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

	    var value = _.mean(maxNum);

	    return this.__prepareResult(value, fixed, outputType);
	},

	chance(value, len, fixed) {
	    var fixed = !_.isUndefined(fixed) ? fixed : 1;
	    return ((value / len) * 100).toFixed(fixed);
	},

	persent(value, len) {
	    return chance(value, len, 0);
	},

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
	},

	/* private */

	__prepareResult(value, fixed, outputType) {
		let curFixed = (typeof fixed != "undefined") ? fixed : this.fixed;

		let outputValue = value.toFixed(curFixed);

		return outputType == "string" ? outputValue.toString() : Number(outputValue);
	}
};
