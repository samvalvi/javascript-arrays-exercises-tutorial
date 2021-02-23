let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(color){
    // your code here
    return `<li>${color.label}</li>`
}

function filterColors(color){
    // your code here
	//This is a short 'if'. If the answer is true the result is asigned to 'colorSexy' variable.
	let colorSexy = (color.sexy === true)? color.label : null;
	return colorSexy;
}

function generateHTMLFromArray(array){
	
	let filteredOptions = array.filter(filterColors);
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(elm){
		htmlString += elm;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));

