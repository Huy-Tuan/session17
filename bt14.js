let radius = prompt("Mời bạn nhập vào bán kính: ");
let height = prompt("Mời bạn nhập vào chiều cao: ");

let surArea = (2 * Math.PI * radius * height);
let totalArea = (2 * Math.PI * radius * height) + (2 * Math.PI * radius *radius);
let volume = (Math.PI * radius *radius * height);
let circum = (2 * Math.PI * radius);

console.log(` Diện tích xung quanh hình trụ là: ${surArea}`);
console.log(` Diện tích toàn phần hình trụ la: ${totalArea}`);
console.log(` Thể tích hình trụ là: ${volume}`);
console.log(` Chu vi đáy hình trụ là: ${circum}`);