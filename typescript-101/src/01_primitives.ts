console.log('=================== PRIMITIVES START ===================');

// Primitives
const str: string = 'Some string';
const num: number = 100;
const bool: boolean = true;
const someNull: null = null;
const someUndefined: undefined = undefined;

// Non-primitives
const arr: Array<number> = [0, 1, 2, 3, 4];
const obj: object = {
	someKey: 'test'
};

const inline: { a: number; b: string } = {
	a: 1,
	b: 'some string'
};

let anything: any = 5;
console.log('"anything" is: ', anything);

anything = 'A string';
console.log('"anything" is: ', anything);

// Function types
function printSomething(): void {
	console.log('something');
}

function addTwoNumbers(a: number, b: number): number {
	return a + b;
}

function sayHello(name?: string): void {
	console.log(`Hello ${name ? name : 'friend'}`);
}

function addAll(...numbers: Array<number>): number {
	return numbers.reduce((sum, number) => (sum += number), 0);
}

const addTwoNumbersExpression: (a: number, b: number) => number = 
	(a: number, b: number) => a + b;

console.log('==================== PRIMITIVES END ====================');
