// Nhập vào 1 số nguyên n.
// Tính tổng các số chẵn từ 0 đến n.

let n=parseInt(prompt("Please input n:"))
let total = 0;

for (let i = 0; i <= n; i += 2) {
    total += i;
}
alert(total);