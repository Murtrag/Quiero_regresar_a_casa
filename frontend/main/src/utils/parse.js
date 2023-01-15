/* const [first, second, third] = parseArray([first, second, third]) */
function parseArray(...arr){
	return arr.map(
		el=>JSON.parse(el)
	)
}

export {
	parseArray
}
