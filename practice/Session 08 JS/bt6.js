let n = prompt("nhap so nguyen duong n");
let m = prompt("nhap so nguyen duong m");
let p;
for (let x = 0; x <= m && x <= n; x++) {
  if (m % x === 0 && n % x === 0) {
    p = x;
  }
}
console.log(p);

// if (max%min === 0)