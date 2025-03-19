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
