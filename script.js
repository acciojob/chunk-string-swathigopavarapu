function stringChop(str, size) {
  // your code here
	if (!str) return [];
	if (size <= 0) return [str];
	let result = [];
	for (let i = 0; i < str.length; i += size) {
		result.push(str.substring(i, i + size));
	}
	return result;
		

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
