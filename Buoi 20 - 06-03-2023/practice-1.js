/**
 * Viết hàm isLeapYear() nhận vào 1 tham số year
 * và kiểm tra xem year có phải năm nhuận hay không
 */
function isLeapYear(year) {
    return(year % 4 == 0 && year % 100 !=0) || year % 400 == 0;
}
console.log(isLeapYear(2023));