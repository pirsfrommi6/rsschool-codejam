function recursion(arg) {
	if (!(arg.left && arg.right)) {
		return [ [ arg.value ] ];
	}
	// only if left&right not null & ===
	const left = recursion(arg.left);
	const right = recursion(arg.right);
	const arr = [];
	const leftsize = left.length;
	arr.push([ arg.value ]);
	for (let i = 0; i < leftsize; i++) {
		arr.push(left[i].concat(right[i]));
	}
	return arr;
}

module.exports = recursion;