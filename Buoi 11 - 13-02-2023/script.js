// Bài 1
let btnAction1 = document.getElementById("btn-action-1");
    btnAction1.addEventListener("click", () => {
        let length = parseInt(document.getElementById("length").value);
        let width = parseInt(document.getElementById("width").value);

        if (length == width){
            alert("Đây là hình vuông");
        } else {
            alert("Đây là hình chữ nhật");
        }
    });
    // Bài 2
    let btnAction2 = document.getElementById("btn-action-2");
    btnAction2.addEventListener("click", () => {
        let a = parseInt(document.getElementById("number-a").value);
        let b = parseInt(document.getElementById("number-b").value);

        if (a>b){
            alert(`số lớn nhất là ${a}`);
        } else 
        if(a<b){
            alert(`số lớn nhất là ${b}`)
        } else {
            alert('Hai số bằng nhau');
        }
    });
    // Bài 3
    let btnAction3 = document.getElementById("btn-action-3");
    btnAction3.addEventListener("click", () => {
        let n = parseInt(document.getElementById("n").value);
        if (n>=0){
            alert(`giá trị tuyệt đối của n là: ${n}`);
        } else {
            alert(`giá trị tuyệt đối của n là ${-n}`)
        }
        // Toán tử ba ngôi ~ Tenary Operator
        n >= 0 ? alert(`giá trị tuyệt đối của ${n} là ${n}`) : alert(` giá trị tuyệt đối của ${n} là ${-n}`);
    });
    // Bài 4
    let btnAction4 = document.getElementById("btn-action-4");
    btnAction4.addEventListener("click", () => {
        let day = parseInt(document.getElementById("day").value);
        if (day==2){alert("Thứ hai - Monday")}; 
        else if (day==3) {alert("Thứ ba - Tuesday")};
        else if (day==4) {alert("Thứ tư - Wednesday")};
        else if (day==5) {alert("Thứ năm - Thursday")};
        else if (day==6) {alert("Thứ sáu - Friday")};
        else if (day==7) {alert("Thứ bảy - Saturday")};
        else if (day==8) {alert("Chủ nhật - Sunday")};
        else if (day != 2, 3, 4, 5, 6, 7, 8) {alert("không phải thứ trong tuần")};
    });
    // Bài 5
    let btnAction5 = document.getElementById("btn-action-5");
    btnAction5.addEventListener("click", () => {
        let n1 = parseInt(document.getElementById("n1").value);
        let n2 = parseInt(document.getElementById("n2").value);
        let n3 = parseInt(document.getElementById("n3").value);

        if (n1>n2) and (n2>=n3) {alert(`số lớn nhất là ${n1}`)};
        else if(n2>n3) and (n3>=n1) {alert(`số lớn nhất là ${n2}`)};
        else if(n3>n1) and (n1>=n2)  {alert(`số lớn nhất là ${n3}`)};

    });