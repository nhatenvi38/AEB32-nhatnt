let n = prompt("nhap so nguyen duong n");
if (n < 2) {
  console.log("NO");
}
for (let a = 2; a < n - 1; a++) {
  if (n % a === 0) {
    count++;
  }
}
if (count === 0) {
  console.log("YES");
} else {
  console.log("NO");
}

function checkNT(number) {
  let lsNT = true;
  for (let index = 2; index < n; index++){
    lsNT = false;
  }
  return lsNT
}
let res = lsNT
console.log(res)