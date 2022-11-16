/**
 * convert number to US format
 * 
 * @param {number} num 
 * @returns {string}
 */
 function numberFormat(num) {
    let usNumberFormat = num.toLocaleString('en-US'),
        splitedNumber = usNumberFormat.split('.'),
        firstPart = splitedNumber[0],
        secondPart = splitedNumber.length > 1 ? splitedNumber[1] : '00';

    switch(true) {
        case secondPart.length > 1:
            return firstPart + '.' + secondPart;
        case secondPart.length === 1:
            return firstPart + '.' + secondPart + '0';
        default:
            return firstPart + '.00';
    }
}

export {numberFormat} 