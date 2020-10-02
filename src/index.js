module.exports = function toReadable (number) {

	number = String(number);

    const one = {
    	'0': 'zero', 		'1': 'one',
        '2': 'two', 		'3': 'three', 		
        '4': 'four', 		'5': 'five',  		
        '6': 'six', 		'7': 'seven', 		
        '8': 'eight', 		'9': 'nine',  		
        '10': 'ten', 		'11': 'eleven', 	
        '12': 'twelve', 	'13': 'thirteen', 	
        '14': 'fourteen', 	'15': 'fifteen', 	
        '16': 'sixteen', 	'17': 'seventeen', 	
        '18': 'eighteen', 	'19': 'nineteen',
    };
    const two = {
        '20': 'twenty', '30': 'thirty',
        '40': 'forty', 	'50': 'fifty',
        '60': 'sixty', 	'70': 'seventy',
        '80': 'eighty', '90': 'ninety',
    };

	if (parseInt(number) <= 19) {
		return one[number];
	}

	if (number.length === 2 && number[1] === '0') {
		return two[number];
	} else if (number.length === 2) {
		return two[number[0] + '0'] + ' ' + one[number[1]];
	}

	if (number.length === 3 && number[1] === '0' && number[2] === '0') {
		return one[number[0]] + ' hundred';
	} else if (number.length === 3 && number[2] === '0') {
		if (number[1] === '1') {
			return one[number[0]] + ' hundred ' + one[number[1] + '0'];		
		} else {
			return one[number[0]] + ' hundred ' + two[number[1] + '0'];
		}
	} else if (number.length === 3 && number[1] === '0') {
		return one[number[0]] + ' hundred ' + one[number[2]];
	} else {
		if ((number[1] + number[2]) >= 10 && (number[1] + number[2]) <= 19) {
			return one[number[0]] + ' hundred ' + one[number[1] + '' + number[2]];			
		} else {
			return one[number[0]] + ' hundred ' + two[number[1] + '0'] + ' ' + one[number[2]];	
		}
	}

}
