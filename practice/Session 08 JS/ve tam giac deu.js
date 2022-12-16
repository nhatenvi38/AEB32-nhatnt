// index = 1 * = 1 space = 4 >>>> space = index -1. star = 2* index -1
// index = 2 * = 3 space = 2
// index = 3 * = 5 space = 2
// index = 4 * = 7 space = 1
// index = 5 * = 9 space = 0

for (let i = 0; i <= 5; i++) {
  let str = "";
  for (j = 0; j < 5 - i; j++) {
    str += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }
  console.log(str);
}
