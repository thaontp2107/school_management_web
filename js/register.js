// Lấy các phần tử HTML
const role = document.getElementById("role");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const btnRegister = document.getElementById("btnRegister");
const message = document.getElementById("message");

// Xử lý sự kiện đăng ký
btnRegister.addEventListener("click", function () {

    // Lấy dữ liệu người dùng nhập
    const selectedRole = role.value;
    const user = username.value.trim();
    const pass = password.value;
    const confirmPass = confirmPassword.value;

    // Kiểm tra thông tin trống
    if (
        selectedRole === "" ||
        user === "" ||
        pass === "" ||
        confirmPass === ""
    ) {
        message.textContent = "Vui lòng nhập đầy đủ thông tin!";
        message.style.color = "red";
        return;
    }

    // Kiểm tra độ dài mật khẩu
    if (pass.length < 6) {
        message.textContent = "Mật khẩu phải có ít nhất 6 ký tự!";
        message.style.color = "red";
        return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (pass !== confirmPass) {
        message.textContent = "Mật khẩu xác nhận không khớp!";
        message.style.color = "red";
        return;
    }

    // Lấy danh sách tài khoản
    const accounts = JSON.parse(
        localStorage.getItem("accounts")
    ) || [];

    // Kiểm tra tên đăng nhập đã tồn tại
    const exists = accounts.some(function (item) {
        return item.username.toLowerCase() === user.toLowerCase();
    });

    if (exists) {
        message.textContent = "Tên đăng nhập đã tồn tại!";
        message.style.color = "red";
        return;
    }

    // Tạo tài khoản mới
    const newAccount = {
        username: user,
        password: pass,
        role: selectedRole
    };

    // Thêm tài khoản vào danh sách
    accounts.push(newAccount);

    // Lưu danh sách vào localStorage
    localStorage.setItem(
        "accounts",
        JSON.stringify(accounts)
    );

    message.textContent = "Đăng ký thành công!";
    message.style.color = "green";

    // Xóa dữ liệu trên form
    username.value = "";
    password.value = "";
    confirmPassword.value = "";
    role.value = "";

    // Chuyển về trang đăng nhập
    setTimeout(function () {
        window.location.href = "login.html";
    }, 1000);
});