let number = prompt("Hay nhap vao mot so nguyen");

if(Number.isInteger(Math.sqrt(number)) == true){
    console.log(`${number} la so chinh phuong` );
    
}
else {
    console.log(`${number} khong phai la so chinh phuong`); 
}