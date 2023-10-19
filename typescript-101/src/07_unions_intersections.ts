console.log(
	'\n=================== UNIONS & INTERSECTIONS START ==================='
);

// Overloading & Conditional Types
function numberStringSwap(value: number): string;
function numberStringSwap(value: string): number;
function numberStringSwap(value: number | string): number | string {
	if (typeof value === 'string') {
		return parseInt(value, 10);
	} else if (typeof value === 'number') {
		return String(value);
	}
}

// Casting
const resultedNumber: number = <number>numberStringSwap('1234');
console.log('Resulted number:', resultedNumber, typeof resultedNumber);

const resultedString = numberStringSwap(1234) as string;
console.log('Resulted string:', resultedString, typeof resultedString);

interface HasKeyOne {
	keyOne: any;
}

class HasKeyTwo {
	keyTwo: any;
}

// Type aliases
type MustHaveBothKeys = HasKeyOne & HasKeyTwo;

function checkBothKeys(obj: MustHaveBothKeys): boolean {
	return obj.keyOne && obj.keyTwo;
}

console.log(
	'==================== UNIONS & INTERSECTIONS END ===================='
);
