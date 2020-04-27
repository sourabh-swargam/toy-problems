function deepEqual(a, b) {
	if (typeof a === 'object' && typeof b === 'object') {
		let aKey = Object.keys(a)
		let bKey = Object.keys(b)
		if (aKey.length === bKey.length) {
			for (let i = 0; i < aKey.length; i++) {
				if (deepEqual(aKey[i], bKey[i])) {
					console.log(aKey[i], bKey[i])
					continue
				}
				else {
					return false
				}
			}			
		}
		else {
			return false
		}

	}
	else if (a === b) {
		return true
	}
	else {
		return false
	}
	return true

}


const one = {
	1:'one',
	2:'two',
}

const two = {
	1:'one',
	2:'three',
}

const three = {
	1:'one',
	2:'two',
	inner: {
		key:"value"
	},
}



// console.log(deepEqual(5, 5))
console.log(deepEqual(one, two))
console.log(deepEqual(one, three))
