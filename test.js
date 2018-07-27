import test from 'ava';
import cU from '.';

test('Testing consecutively unique values', t => {

	const consecutivelyUnique = cU(1, 10);
	let numOfTests = 777;
	let currentVal;
	let previusValue;

	while (--numOfTests > 0) {
		currentVal = consecutivelyUnique();

		if (
			currentVal === previusValue ||
			currentVal > 10 ||
			currentVal < 1
		) t.fail();

		previusValue = currentVal;
	} t.pass();
});
