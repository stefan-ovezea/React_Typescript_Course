class SomeClass {
	property1: any;
	property2: any = 'asdasd';
}

class AnotherClass {
	x?: any;
	y?: any;
}

type ExcludeExample = Exclude<string | number | SomeClass, string | SomeClass>; // number
type ExtractExample = Extract<string | number | SomeClass, string | SomeClass>; // string | SomeClass
type NonNullableExample = NonNullable<
	string | number | null | undefined | void
>; // string | number
type ReturnTypeExample = ReturnType<() => boolean>; // boolean

type InstanceOfExample = InstanceType<typeof SomeClass>; // SomeClass

const partialObject: Partial<SomeClass> = { property1: 'test' };

const requiredObject: Required<AnotherClass> = { x: 1, y: 2 };
