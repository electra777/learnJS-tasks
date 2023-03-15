'use strict';

async function getUsers(names) {
	let persons = [];

	for (let name of names) {
		let person = fetch(`https://api.github.com/users/${name}`).then((successResponse) => {
			if (successResponse.status != 200) {
				return null;
			}
			return successResponse.json();
		});
		persons.push(person);
	}
	let results = await Promise.all(persons);
	return results;
}
