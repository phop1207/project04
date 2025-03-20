// ฟังก์ชันสำหรับตั้งค่า Cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + "; path=/" + expires;
}

// ฟังก์ชันสำหรับดึงค่าจาก Cookie
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// ฟังก์ชันสำหรับลบ Cookie
function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// ฟังก์ชันตรวจสอบสิทธิ์ก่อนเข้าถึง Dashboard
function checkAuth() {
  if (getCookie("auth") !== "true") {
      alert("กรุณาเข้าสู่ระบบก่อน!");
      window.location.href = "index.html";
  }
}

// ฟังก์ชัน Login
function validateLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const alertBox = document.getElementById('alertBox');

  if (username === 'admin' && password === 'admin') {
      setCookie("auth", "true", 1);

      alertBox.classList.remove('d-none', 'alert-danger');
      alertBox.classList.add('alert-success');
      alertBox.innerHTML = '<i class="bi bi-check-circle"></i> Login Successful!';
      
      setTimeout(() => {
          window.location.href = "dashboard.html";
      }, 1500);
  } else {
      alertBox.classList.remove('d-none', 'alert-success');
      alertBox.classList.add('alert-danger');
      alertBox.innerHTML = '<i class="bi bi-x-circle"></i> Incorrect Username or Password!';
  }
}

// ฟังก์ชัน Logout
function logout() {
  deleteCookie("auth");
  window.location.href = "index.html";
}

// ตรวจสอบสิทธิ์เมื่อเข้า Dashboard
if (window.location.pathname.includes("dashboard.html")) {
  checkAuth();
}
