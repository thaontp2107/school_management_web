function showContent(section) {
    const title = document.getElementById("title");
    const box = document.getElementById("contentBox");
    
    if (section === "dashboard") {
        title.innerText = "Dashboard";
        box.innerText = "Nội dung Dashboard";
    } else if (section === "Students") {
        title.innerText = "Students";
        loadPage("../pages/student_list.html");  
    } else if (section === "staff") {
        title.innerText = "Academic Staff";
        box.innerText = "Danh sách giảng viên";
    } else if (section === "non-academic") {
        title.innerText = "Non-Academic";
        box.innerText = "Non-academic";
    } else if (section === "parent") {
        title.innerText = "Parent";
        box.innerText = "Parent";
    } else if (section === "admin") {
        title.innerText = "Admin";
        box.innerText = "Trang quản trị";
    }
}

function changePage(menu, element) {
    document.querySelectorAll(".menu li")
        .forEach(item => item.classList.remove("active"));
    element.classList.add("active");
    showContent(menu);
}

function loadPage(url) {
    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("Load error");
            return res.text();
        })
        .then(html => {
            document.getElementById("contentBox").innerHTML = html;
        })
        .catch(() => {
            document.getElementById("contentBox").innerText =
                "Không tải được nội dung";
        });
}

document.addEventListener("DOMContentLoaded", function () {
    const firstMenu = document.querySelector(".menu li");
    if (firstMenu) {
        firstMenu.classList.add("active");
        showContent("dashboard"); 
    }
});

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display =
        sidebar.style.display === "none" ? "block" : "none";
}

