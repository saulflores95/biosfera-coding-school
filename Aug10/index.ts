import question from "./question";

const chatBot = async () => {
	const name = await question("What is your name? ").then((answer) =>
		console.log(`Hello ${answer}!`)
	);

	const age = await question("How old are you? ").then((answer) =>
		console.log(`Wow ${answer} years old! You are really old.`)
	);

	const favColor = await question("What is your favorite color? ", true).then(
		(answer) => console.log(`I like ${answer} too!`)
	);
};

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

	// chatBot();
};

main();
