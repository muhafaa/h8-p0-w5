function hapusSimbol(str) {
  // you can only write your code here!
  let result = "";
  let regex = /[a-z0-9A-Z]/;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      result += str[i];
    }
  }
  return result;
}

// TEST CASES
console.log(hapusSimbol("test%$4aa")); // test4aa
console.log(hapusSimbol("devel0p3r s3j@@ati")); // devel0p3rs3jati
console.log(hapusSimbol("ma@#k!an~")); // makan
console.log(hapusSimbol("coDing")); // coding
console.log(hapusSimbol("1+3-5*2=100")); // 1352100
