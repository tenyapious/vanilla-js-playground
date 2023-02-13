// async always returns a promise
// async is used to await a promise

const example = async () => {
	return "Hello there";
};

async function someFunc() {
	const result = await example();
	console.log(result);
}

// console.log(example());
console.log(someFunc());
