function cipher() {
  var string = document.getElementById("inputMessage").value;
  var array = [];
  var arrayCipher = [];
  var arrayResult = [];

  if (string === string.toUpperCase()) {
    for (i = 0; i < string.length; i++) {
      array[i] = string.charCodeAt(i);
      arrayCipher[i] = (array[i] - 65 + 33) % 26 + 65;
      arrayResult[i] = String.fromCharCode(arrayCipher[i]);
    }
  } else {
    for (i = 0; i < string.length; i++) {
      array[i] = string.charCodeAt(i);
      arrayCipher[i] = (array[i] - 97 + 33) % 26 + 97;
      arrayResult[i] = String.fromCharCode(arrayCipher[i]);
    }
  }

  resultCipher = arrayResult.join("");
  document.getElementsByClassName("result")[0].innerHTML = resultCipher;
}

function decipher() {
  var string = document.getElementById("inputMessage").value;
  var array = [];
  var arrayDecipher = [];
  var arrayResult = [];

  if (string === string.toUpperCase()) {
    for (i = 0; i < string.length; i++) {
      array[i] = string.charCodeAt(i);
      arrayDecipher[i] = (array[i] + 65 - 33) % 26 + 65;
      console.log(arrayDecipher);
      arrayResult[i] = String.fromCharCode(arrayDecipher[i]);
    }
  } else {
    for (i = 0; i < string.length; i++) {
      array[i] = string.charCodeAt(i);
      arrayDecipher[i] = (array[i] + 97 - 33) % 26 + 97;
      arrayResult[i] = String.fromCharCode(arrayDecipher[i]);
    }
  }

  resultDecipher = arrayResult.join("");
  document.getElementsByClassName("result")[0].innerHTML = resultDecipher;
}
