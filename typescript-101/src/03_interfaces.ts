console.log('\n=================== INTERFACES START ===================');

// Point interface
interface Point {
	x: number;
	y: number;
}

// Extended Point interface

interface Point3D extends Point {
	z: number;
}

// Variable key interface
interface StringKeyMap<T> {
	[key: string]: T;
}

// Implementation
interface CanBark {
	bark(): void;
}


console.log('==================== INTERFACES END ====================');
