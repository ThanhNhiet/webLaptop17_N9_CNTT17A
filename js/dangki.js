

function validateName() {
  const name = document.getElementById("register-name").value.trim();
  const nameError = document.getElementById("register-name-error");
  if (name === "") {
    nameError.textContent = "Tên đăng nhập không được để trống";
    nameError.style.color = "red";
    return false;
  } else if (name.length < 6) {
    nameError.textContent = "Tên đăng nhập phải có ít nhất 6 ký tự";
    nameError.style.color = "red";
    return false;
  } else {
    nameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  // Kiểm tra định dạng email bằng regex
  const email = document.getElementById("register-email").value.trim();
  const emailError = document.getElementById("register-email-error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email không được để trống";
    emailError.style.color = "red";
    return false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Email không hợp lệ";
    emailError.style.color = "red";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById("register-password").value.trim();
  const passwordError = document.getElementById("register-password-error");
  if (password === "") {
    passwordError.textContent = "Mật khẩu không được để trống";
    passwordError.style.color = "red";
    return false;
  } else if (password.length < 6) {
    passwordError.textContent = "Mật khẩu phải có ít nhất 6 ký tự";
    passwordError.style.color = "red";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  const password = document.getElementById("register-password").value.trim();
  const confirmPassword = document.getElementById("register-confirm-password").value.trim();
  const confirmPasswordError = document.getElementById("register-confirm-password-error");
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Vui lòng nhập lại mật khẩu";
    confirmPasswordError.style.color = "red";
    return false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Mật khẩu không trùng khớp";
    confirmPasswordError.style.color = "red";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  return isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
}
function onSubmit(event) {
  event.preventDefault();
  if (validateForm()) {
    alert("Đăng ký thành công!");
    document.getElementById("register-form").reset();
    window.location.href = "../home/dangnhap.html";
  }
}

document.getElementById("register-form").addEventListener("submit", onSubmit);

