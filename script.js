function translateNumbers(input) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '3') {
      result += 'w';
    } else if (char === '7') {
      result += 'l';
    } else {
      result += char;
    }
  }
  return result;
}

function reverseWords(input) {
  return input.split(" ").reverse().join(" ");
}

function shiftCharacters(input, shiftAmount) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    let code = input.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 - shiftAmount + 26) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 - shiftAmount + 26) % 26) + 97);
    } else {
      result += char;
    }
  }
  return result;
}

function encodeMessage(message, shiftAmount) {
  let result = '';
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    let code = message.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
    } else {
      result += char;
    }
  }
  return result;
}

document.getElementById("decodeButton").addEventListener("click", function () {
  const encodedMessage = document.getElementById("encodedInput").value;
  const decodedStep1 = translateNumbers(encodedMessage);
  const decodedStep2 = reverseWords(decodedStep1);
  const decodedStep3 = shiftCharacters(decodedStep2, 3);
  document.getElementById("decodedOutput").innerText = decodedStep3;
});














document.getElementById("encodeButton").addEventListener("click", function () {
  const plainMessage = document.getElementById("plainInput").value;
  const shift = parseInt(document.getElementById("shiftInput").value);
  const encoded = encodeMessage(plainMessage, shift);
  document.getElementById("encodedOutput").innerText = encoded;
});
