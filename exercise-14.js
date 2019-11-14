function changeVocals (str) {
  //code di sini
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
      switch (str[i]) {
        case 'a':
            newStr += 'b';
            break;

        case 'A':
            newStr += 'B';
            break;
        
        case 'e':
            newStr += 'f';
            break;

        case 'E':
            newStr += 'F';
            break;

        case 'i':
            newStr += 'j';
            break;

        case 'I':
            newStr += 'J';
            break;

        case 'o':
            newStr += 'p';
            break;

        case 'O':
            newStr += 'P';
            break;

        case 'u':
            newStr += 'v';
            break;

        case 'U':
            newStr += 'V';
            break;

        default:
            newStr += str[i];
            break;
      }
  }
  return newStr;
}
function reverseWord (str) {
  //code di sini
  var newStr = '';
  for (var i = str.length-1; i >= 0; i--) {
      newStr += str[i];
  }
  return newStr;
}

function setLowerUpperCase (str) {
  //code di sini
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
        newStr += str[i].toLowerCase();
    } else {
        newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}

function removeSpaces (str) {
  //code di sini
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
      if (str[i] != ' ') {
          newStr += str[i];
      }
  }
  return newStr;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length <= 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  var vocal = changeVocals(name);
  var reverse = reverseWord(vocal);
  var wordCase = setLowerUpperCase(reverse);
  return removeSpaces(wordCase);
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'


// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal 
// yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi