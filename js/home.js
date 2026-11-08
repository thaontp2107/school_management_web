function showContent(section) {
    const title = document.getElementById("title");
    const box = document.getElementById("contentBox");
    
    if (section === "Dashboard") {
        title.innerText = "Dashboard";
        box.innerText = "Nội dung Dashboard";
    } else if (section === "Students") {
        title.innerText = "Students";
        box.innerText = "Danh sách sinh viên";
    } else if (section === "Staff") {
        title.innerText = "Academic Staff";
        box.innerText = "Danh sách giảng viên";
    } else if (section === "Non-Academic") {
        title.innerText = "Non-Academic";
        box.innerText = "Non-academic";
    } else if (section === "Parent") {
        title.innerText = "Parent";
        box.innerText = "Parent";
    } else if (section === "Admin") {
        title.innerText = "Admin";
        box.innerText = "Trang quản trị";
    }
}

function changePage(menu, element) {
    // Xóa active của tất cả menu
    document.querySelectorAll("#menu li")
        .forEach(item => item.classList.remove("active"));

    // Gán active cho mục đang bấm
    element.classList.add("active");

    // // Đổi tiêu đề & nội dung
    document.getElementById("title").innerText = menu;
    document.getElementById("contentBox").innerText = "Nội dung " + menu;
}

document.addEventListener("DOMContentLoaded", function () {
    const firstMenu = document.querySelector("#menu li");
    if (firstMenu) {
        firstMenu.classList.add("active");
        changePage("Dashboard", firstMenu);
    }
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display =
        menu.style.display === "none" ? "block" : "none";
}
