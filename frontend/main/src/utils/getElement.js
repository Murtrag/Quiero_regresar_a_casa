function getElementAtIndex(array, index, defaultValue) {
	if (index >= 0 && index < array.length) {
		return array[index];
	} else {
		return defaultValue;
	}
}


export {
	getElementAtIndex
}
