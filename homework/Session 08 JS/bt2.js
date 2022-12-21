let matrixSize = prompt("nhap size ma tran mxn va so k:");
let M = matrixSize.split(" ");
let m = parseInt(M[0]);
let n = parseInt(M[1]);
let k = parseInt(M[2]);
let A = [];
for (let i = 0; i < m; i++) {
  let inputROw = prompt("nhap " + n + " phan tu cua hang " + (i + 1));
  let ref = inputROw.split(" ");
  let row = [];
  for (let j = 0; j < n; j++) {
    let Aij = parseInt(ref[j]);
    row.push(Aij);
  }
  A.push(row);
}
let count = 0;
for (let a = 0; a < m; a++) {
  for (let b = 0; b < n; b++) {
    if (A[a][b] === k) {
      count++;
    }
  }
}
console.log(count);
