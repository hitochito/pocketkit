type Character = {
	name: string;
	image: string;
};

export const load = async ({ fetch }) => {
	// Add a fake delay of 2 seconds
	await new Promise((resolve) => setTimeout(resolve, 2000));

	const res = await fetch('https://svelte.fun/api/bobs-burgers/characters');
	const characters: Character[] = await res.json();
	return { characters };
};
