function hapusSimbol(str) {
  // you can only write your code here!
  var result = '';
  for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57 ||  // angka
          str[i].toUpperCase().charCodeAt() >= 65 && str[i].toUpperCase().charCodeAt() <= 90 ) { // huruf
          result += str[i];
      }
  }
  return result;
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coDing')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100