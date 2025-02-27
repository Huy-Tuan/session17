let a = Number( prompt("Nhap a"));
if(a < 0) {
    console.log("Khong hop le!");
}
let b = Number( prompt("Nhap b"));
let c = Number( prompt("Nhap c"));

let x;
let y;

let delta = b ** 2 - 4 * a * c;

if(delta = 0 || delta > 0){
    x = (-b + Math.sqrt(delta))/2*a;
    y = (-b - Math.sqrt(delta))/2*a;

    console.log(x);
    console.log(y);
    
}
else {
    console.log("Phuong trình vô nghiệm");
}
