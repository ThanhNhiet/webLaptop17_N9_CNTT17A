// function validateLoginForm() {
//   const username = document.getElementById("login-username").value.trim();
//   const password = document.getElementById("login-password").value.trim();
//   const usernameError = document.getElementById("login-username-error");
//   const passwordError = document.getElementById("login-password-error");

//   // Kiểm tra tên đăng nhập không được để trống
//   if (username === "") {
//     usernameError.textContent = "Vui lòng nhập tên đăng nhập";
//     usernameError.style.color = "red";
//     return false;
//   } else {
//     usernameError.textContent = "";
//   }

//   // Kiểm tra mật khẩu không được để trống
//   if (password === "") {
//     passwordError.textContent = "Vui lòng nhập mật khẩu";
//     passwordError.style.color = "red";
//     return false;
//   } else {
//     passwordError.textContent = "";
//   }

//   // Kiểm tra tên đăng nhập và mật khẩu có khớp với thông tin đăng ký không
//   if (username !== localStorage.getItem("username") || password !== localStorage.getItem("password")) {
//     usernameError.textContent = "Tên đăng nhập hoặc mật khẩu không đúng";
//     usernameError.style.color = "red";
//     passwordError.textContent = "Tên đăng nhập hoặc mật khẩu không đúng";
//     passwordError.style.color = "red";
//     return false;
//   } else {
//     usernameError.textContent = "";
//     passwordError.textContent = "";
//     return true;
//   }
// }



// function onLoginSubmit(event) {
//   event.preventDefault();
//   if (validateLoginForm()) {
//     alert("Đăng nhập thành công!");
//     document.getElementById("login-form").reset();
//     window.location.href = "../home/index.html";
//   }

  
// }

// document.getElementById("login-form").addEventListener("submit", onLoginSubmit);

function validateLoginForm() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const usernameError = document.getElementById("login-username-error");
  const passwordError = document.getElementById("login-password-error");

  // Kiểm tra tên đăng nhập không được để trống
  if (username === "") {
    usernameError.textContent = "Vui lòng nhập tên đăng nhập";
    usernameError.style.color = "red";
    return false;
  } else {
    usernameError.textContent = "";
  }

  // Kiểm tra mật khẩu không được để trống
  if (password === "") {
    passwordError.textContent = "Vui lòng nhập mật khẩu";
    passwordError.style.color = "red";
    return false;
  } else {
    passwordError.textContent = "";
  }

  // Kiểm tra tên đăng nhập và mật khẩu có khớp với thông tin đăng ký không
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");
  if (!storedUsername || !storedPassword || username !== storedUsername || password !== storedPassword) {
    usernameError.textContent = "Tên đăng nhập hoặc mật khẩu không đúng";
    usernameError.style.color = "red";
    passwordError.textContent = "Tên đăng nhập hoặc mật khẩu không đúng";
    passwordError.style.color = "red";
    return false;
  } else {
    usernameError.textContent = "";
    passwordError.textContent = "";
    return true;
  }
}

function onLoginSubmit(event) {
  event.preventDefault();
  if (validateLoginForm()) {
    alert("Đăng nhập thành công!");
    document.getElementById("login-form").reset();
    window.location.href = "../home/index.html";
  }
}

document.getElementById("login-form").addEventListener("submit", onLoginSubmit);
