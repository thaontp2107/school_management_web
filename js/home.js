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


function showStudentList() {
    const box = document.getElementById("contentBox");

    const students = [
        { id: "2222", name: "Phương Thảo", class: "Grade 06", dob: "08/05/2007" },
        { id: "2223", name: "Nguyễn Văn An", class: "Grade 07", dob: "12/09/2007" },
        { id: "2224", name: "Doan Thi Anh", class: "Grade 08", dob: "02/05/2007" },
        { id: "2225", name: "Nguyễn Phuong", class: "Grade 09", dob: "21/09/2007" },
        { id: "2226", name: "Tran Văn HUng", class: "Grade 10", dob: "01/09/2007" },
        { id: "2227", name: "Nguyễn Cam Van", class: "Grade 13", dob: "18/08/2007" },
        { id: "2228", name: "Le Văn B", class: "Grade 02", dob: "22/07/2007" },
        { id: "2229", name: "Phan A", class: "Grade 01", dob: "05/09/2007" },
        { id: "2230", name: "Nguyễn Nguyen", class: "Grade 05", dob: "09/12/2007" },
        { id: "2231", name: "Tran Thi Ly", class: "Grade 11", dob: "17/10/2007" }
    ];

    let html = `
    <div class="student-box">
        <div class="student-header">
            <span class=>Mã số</span>
            <span>Họ tên</span>
            <span>Lớp</span>
            <span>Ngày sinh</span>
        </div>
    `;

    students.forEach(s => {
        html += `
        <div class="student-row">
            <span>${s.id}</span>
            <span>${s.name}</span>
            <span>${s.class}</span>
            <span>${s.dob}</span>
        </div>
        `;
    });

    html += `</div>`;
    box.innerHTML = html;
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

