/* Write a function to decode a given input string.
Each letter is paired with the letter that it coincides with when the alphabet is reversed.
For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc
Spaces are not encoded/decoded. For example: "gsrh nvhhztv" will be decoded as "this message"
*/

const decodeMessage = string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const strArr = string.split("");
  const resultArr = strArr.map(str => {
    if (str === " ") {
      return str;
    } else {
      const num1 = alphabet.indexOf(str);
      return alphabet[25 - num1];
    }
  });
  return resultArr.join("");
};

module.exports = decodeMessage;
