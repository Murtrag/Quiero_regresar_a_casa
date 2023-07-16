import React from 'react';

/* const [first, second, third] = parseArray([first, second, third]) */
function parseArray(...arr){
	return arr.map(
		el=>JSON.parse(el)
	)
}


function nlToBr(text) {
  const lines = text.split('\n');
  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
}

export {
	parseArray,
	nlToBr,
}
