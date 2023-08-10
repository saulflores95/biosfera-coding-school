import { createInterface } from "readline";

const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
});

const question = (questionText: string, lastQuestion?: boolean) =>
	new Promise<string>((resolve) => rl.question(questionText, resolve)).finally(
		() => {
			if (lastQuestion) rl.close();
		}
	);

export default question;
