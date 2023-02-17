/**
 * Nhập vào một số n. In ra bảng cửa chương của n
 2 x 1 = 2
 2 x 2 = 4
 ...
 2 x 10 = 20
 */

 let n = parseInt(prompt("Nhập vào số n:"));
 for (let i = 1; i <= 10; i++) {
    document.write(`${n} x ${i} = ${n * i}<br>`);
}