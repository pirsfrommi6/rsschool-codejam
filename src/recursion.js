function recursion(objectTree) {
	if (!(objectTree.left && objectTree.right)) {
		return [ [ objectTree.value ] ];
	}
	
	// only if left&right not null & ===
	
	const left = recursion(objectTree.left);
	const right = recursion(objectTree.right);
	const arr = [];
	const lefLength = left.length;
		arr.push([ objectTree.value ]);
	for (let i = 0; i < lefLength; i++) {
		arr.push(left[i].concat(right[i]));
	}
	return arr;
}

module.exports = recursion;
