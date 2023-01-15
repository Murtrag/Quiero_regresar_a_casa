function findChildren(children, type){
	return children.filter(
		child=>child.type===type
	)
}

function findChild(children, type){
	const response = findChildren(children, type)
	switch (response.length){
		case 0:
			return undefined

		case 1:
			return response[0]

		default:
			throw new Error(`${type} returned more than one child`)
	}
}

export {
	findChildren,
	findChild
}
