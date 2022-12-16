let numInput = prompt("nhap so nguyen duong n:");
  let arrayInput = prompt("nhap n cac so nguyen duong cach nhau 1 space:");
  let N = parseInt(num);
  let ar = arrayInput.split(" ");
  let count = 0;
  for (let index = 0; index <= parseInt(N / 2) - 1; index++) {
    if (parseInt(arr[index]) !== parseInt(arr[N - 1 - index])) {
      count++;
    }
  }
  if (count > 0) {
    console.log("FALSE");
  } else {
    console.log("TRUE");
  }
