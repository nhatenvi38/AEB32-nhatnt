parseInt(Number);
let input = prompt("nhap cac so tu nhien cach nhau boi dau ,");
console.log(input, typeof input);
let ar = input.split(",");
console.log(ar[0]);
console.log(ar[1]);
console.log(ar[2]);
console.log(ar[3]);
console.log(a, b, c, d);
let min = prompt("nhap so thu nhat");
let b = prompt("nhap so thu hai");
let c = prompt("nhap so thu ba");
let d = prompt("nhap so thu tu");
if (parseInt(b) < parseInt(min)) {
  console.log((min = b));
}
if (c < min) min = c;
if (d < min) min = d;
