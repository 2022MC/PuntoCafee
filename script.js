// Array สำหรับเก็บรหัสผ่านที่ถูกต้อง
const validPasswords = ["PuntoCafe"];

// ฟังก์ชันตรวจสอบรหัสผ่าน
document
  .getElementById("passwordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // ป้องกันการ reload หน้าเมื่อ submit

    const inputPassword = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (validPasswords.includes(inputPassword)) {
      // ถ้ารหัสถูกต้อง ไปยังหน้าใหม่
      window.location.href = "login.html"; // แทนที่ "newpage.html" ด้วย URL ของหน้าถัดไป
    } else {
      // ถ้ารหัสผิด แสดงข้อความแจ้งเตือน
      errorMessage.textContent = "Incorrect password. Please try again.";
      errorMessage.style.display = "block"; // แสดงข้อความแจ้งเตือน
    }
  });
