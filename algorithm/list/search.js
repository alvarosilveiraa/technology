function binary(list, word) {
	let c = 0, min = 0, max = list.length;
	while(min <= max) {
		let i = Math.floor((min + max) / 2);
		if(word == list[i]) return {index: i, count: c};
		else if(word > list[i]) min = i + 1;
		else max = i - 1;
		c++;
	}
	return {index: undefined, count: c};
}