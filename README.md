
# integer-digits

## Features

### Iterate digits

 * Iterate bits, hex-digits, oct-digits
 * Iterate power-of-two base digits

### Convert bases

 * Convert an integer to a string of digits
 * Convert an integer to an array of digits

## Examples

### Binary to booleans

```javascript
// 11 digits of 0b10011010010
var booleans = require('integer-digits/bin').boolean(0b10011010010, 10);
console.log(booleans);
```

### Binary, Hexadecimal, Octal strings

```javascript
var integer = 1234;
console.log({
	bin: require('integer-digits/bin').string(integer, 10), // 11 digits
	hex: require('integer-digits/hex').string(integer, 2), // 3 digits
	oct: require('integer-digits/oct').string(integer, 3) // 4 digits
});
```

### Binary, Hexadecimal, Octal arrays

```javascript
var integer = 1234;
console.log({
	bin: require('integer-digits/bin').array(integer, 10), // 11 digits
	hex: require('integer-digits/hex').array(integer, 2), // 3 digits
	oct: require('integer-digits/oct').array(integer, 3) // 4 digits
});
```

### Power-Of-Two Base digits: Base 4

```javascript
var Base4 = require('integer-digits/exp')(2, 5); // 6 digits of base 1 << 2 (i.e. 4)
console.log(new Base4(1234).string);
```
