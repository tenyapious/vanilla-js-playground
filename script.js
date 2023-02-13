const users = [
	{ id: 1, name: "john" },
	{ id: 2, name: "susan" },
	{ id: 3, name: "anna" },
];

const articles = [
	{ userId: 1, articles: ["one", "two", "three"] },
	{ userId: 2, articles: ["four", "five", "six"] },
	{ userId: 3, articles: ["seven", "eight", "nine"] },
];

function getUser(name) {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.name == name);

		if (user) {
			return resolve(user);
		} else {
			reject(`No such user with name : ${name}`);
		}
	});
}

function getArticle(userId) {
	return new Promise((resolve, reject) => {
		const userArticle = articles.find((user) => user.userId === userId);

		if (userArticle) return resolve(userArticle.articles);
		else reject("Wrong ID");
	});
}

async function getUserArticle(user) {
	try {
		const userId = await getUser(user);
		if (user) {
			const userArticle = await getArticle(userId.id);
			console.log(userArticle);
		}
	} catch (error) {
		console.log(error);
		console.log("abeg check the name again!");
	}
}

getUserArticle("annas");

// getUser("susan")
// 	.then((userObj) => {
// 		return getArticle(userObj.id);
// 	})
// 	.then((userArticle) => {
// 		console.log(userArticle);
// 	})
// 	.catch((err) => console.log(err));
