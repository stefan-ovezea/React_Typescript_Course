console.log('\n=================== GENERICS START ===================');

interface ArrayClone<T> {
	map<U>(
		callback: (value: T, index?: number, array?: ArrayClone<T>) => U
	): ArrayClone<U>;
}

const numberArray: ArrayClone<number> = [32, 12, 22, 1, 17];


// Conditional Types
declare function numberStringSwapDeclaration<T extends number | string>(
	value: T
): T extends number ? string : number;

type IdLabel = any;
type NameLabel = any;

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

console.log('=================== GENERICS END ===================');
