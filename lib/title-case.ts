export function titleCase(str: string): string {
	const strLowerCase = str.toLowerCase();
	const wordArr = strLowerCase.split(' ').map(function (currentValue) {
		return currentValue[0].toUpperCase() + currentValue.substring(1);
	});

	return wordArr.join(' ');
}
