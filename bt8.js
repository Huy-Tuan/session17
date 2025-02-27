
let ngay1 = prompt("Nhập vào ngày đầu tiên (YYYY-MM-DD):");
let ngay2 = prompt("Nhập vào ngày thứ hai (YYYY-MM-DD):");

let date1 = new Date(ngay1);
let date2 = new Date(ngay2);

let chenhLech = Math.abs(date2 - date1);
let soNgay = chenhLech / (1000 * 3600 * 24);

console.log("Độ lệch là " + soNgay + " ngày");
