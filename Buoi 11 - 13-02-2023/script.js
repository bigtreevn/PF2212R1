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