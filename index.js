'use strict';

module.exports = (minValue, maxValue) => {
	let temp;

	return function consecutivelyUnique() {
		const randomValue = Math.floor((Math.random() * (maxValue - minValue + 1)) + minValue);
		temp = (randomValue === temp && minValue !== maxValue)
			? consecutivelyUnique()
			: randomValue;
		return temp;
	};
};
