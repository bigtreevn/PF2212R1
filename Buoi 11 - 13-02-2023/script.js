// Bài 1
let btnAction = document.getElementById("btn-action");
    btnAction.addEventListener("click", () => {
        let chieudai = document.getElementById("length").value;
        let chieurong = document.getAnimations("width").value;

        if (parseFloat(chieudai) != (chieurong)){
            console.log("Hình chữ nhật");
        } else {
            console.log("Hình vuông");
        }
    });