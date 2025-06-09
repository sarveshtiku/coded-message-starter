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
    let code = input.charCodeAt(i); // Gusing the .charCodeAt() function for ASCII code

    // Uppercase letters
    if (code >= 65 && code <= 90) {
      let shiftedCode = ((code - 65 - shiftAmount + 26) % 26) + 65;
      result += String.fromCharCode(shiftedCode);

    // Lowercase letters
    } else if (code >= 97 && code <= 122) {
      let shiftedCode = ((code - 97 - shiftAmount + 26) % 26) + 97;
      result += String.fromCharCode(shiftedCode);

    // The rest of the non-letter items will be unchanged
    } else {
      result += char;
    }
  }
  return result;
}


document.getElementById("decodeButton").addEventListener("click", function () {
  const encodedMessage = document.getElementById("encodedInput").value;
  console.log("Encoded Input:", encodedMessage);

    const decodedStep1 = translateNumbers(encodedMessage);
    console.log("Decoded Step 1:", decodedStep1);

    const decodedStep2 = reverseWords(decodedStep1);
    console.log("Decoded Step 2:", decodedStep2);
    
    const decodedStep3 = shiftCharacters(decodedStep2, 3);
    console.log("Decoded Step 3:", decodedStep3);

  document.getElementById("decodedOutput").innerText = decodedStep3;
});