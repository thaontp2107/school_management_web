// Lấy các phần tử HTML
const username = document.getElementById("username");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const message = document.getElementById("message");

// Xử lý sự kiện đăng nhập
btnLogin.addEventListener("click", function () {

    // Lấy dữ liệu người dùng nhập
    const user = username.value.trim();
    const pass = password.value;

    // Kiểm tra dữ liệu trống
    if (user === "" || pass === "") {
        message.textContent = "Vui lòng nhập đầy đủ thông tin!";
        message.style.color = "red";
        return;
    }

    // Lấy danh sách tài khoản đã đăng ký
    const accounts = JSON.parse(
        localStorage.getItem("accounts")
    ) || [];

    // Tìm tài khoản phù hợp
    const account = accounts.find(function (item) {
        return item.username === user &&
               item.password === pass;
    });

    // Kiểm tra kết quả đăng nhập
    if (account) {

        // Lưu thông tin tài khoản đang đăng nhập
        localStorage.setItem(
            "currentUser",
            JSON.stringify(account)
        );

        message.textContent = "Đăng nhập thành công!";
        message.style.color = "green";

        // Chuyển đến trang chủ
        setTimeout(function () {
            window.location.href = "home.html";
        }, 1000);

    } else {
        message.textContent = "Tên đăng nhập hoặc mật khẩu không đúng!";
        message.style.color = "red";
    }
});