/**
 * Nhập vào số hạng đầu tiên và công sai của cấp số cộng.
 * In ra 10 số đầu tiên của cấp số cộng đó.
 * Ví dụ: số hạng đầu tiên = 3, công sai = 5
 * Output: 3 8 13 18 23 28 33 38 43 48.
 */
let n = parseInt(prompt("Nhập số hạng đầu tiên:"));
d = parseInt(prompt("Nhập công sai:"))
document.write(n + ` `); // số hạng đầu tiên của cấp số cộng
for (let i = 0; i < 9; i++) {
    n += d;
    document.write(n + ` `);
}