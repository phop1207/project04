document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var alertBox = document.getElementById('alert');

  if (username === "admin" && password === "admin") {
      alert('เข้าสู่ระบบสำเร็จ');
      window.location.href = '/mainpage.html'; // Adjust the URL to your main page
  } else {
      alertBox.style.display = 'flex'; // Show alert
  }
});
function validateLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const alertBox = document.getElementById('alertBox');

  if (username === 'admin' && password === 'admin') {
      alertBox.classList.remove('d-none', 'alert-danger');
      alertBox.classList.add('alert-success');
      alertBox.innerHTML = '<i class="bi bi-check-circle"></i> Login Successful!';
      
      // ส่งไปยังหน้า dashboard พร้อมพารามิเตอร์
      setTimeout(() => {
          window.location.href = `dashboard.html?auth=true`;
      }, 1500);
  } else {
      alertBox.classList.remove('d-none', 'alert-success');
      alertBox.classList.add('alert-danger');
      alertBox.innerHTML = '<i class="bi bi-x-circle"></i> Incorrect Username or Password!';
  }
}
