module.exports = function toReadable(number) {
  const singleDigit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const doubleDigit = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const converter = (num) => {
    if (num === 0) {
      return 'zero';
    }
    if (num < 20) {
      return singleDigit[num];
    }
    if (num >= 20 && num < 100) {
        const toTens = Math.floor(num / 10);
        const toOnes = num % 10;
        return doubleDigit[toTens] + (toOnes > 0 ? ' ' + singleDigit[toOnes] : '');
    }
    if (num >= 100) {
        const toHundreds = Math.floor(num / 100);
        const remainder = num % 100;
        return singleDigit[toHundreds] + ' hundred' + (remainder > 0 ? ' ' + converter(remainder) : '');
    }
    return doubleDigit[toTens] + (toOnes > 0 ? ' ' + singleDigit[toOnes] : '');
  }
  if (number === 0) {
    return 'zero';
  }

  const thousands = Math.floor((number % 1000000) / 1000);
  const remainder = number % 1000;

  let result = '';
  if (thousands > 0) {
    result += converter(thousands) + ' thousand ';
  }
  if (remainder > 0) {
    result += converter(remainder);
  }

  return result.trim();
}
