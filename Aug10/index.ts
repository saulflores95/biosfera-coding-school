const main = async () => {
	const stringExample: string = "Hello World!";
	const numberExample: Number = 1;
	const booleanExample: boolean = true;
	const arrayExample: Array<string> = ["Hello", "World"];
	const objectExample: object = {
		user: {
			name: "John",
			age: 30,
		},
	};

	console.log(stringExample);
	console.log(numberExample);
	console.log(booleanExample);
	console.log(arrayExample);
	console.log(objectExample);
};

main();
