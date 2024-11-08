function togglePassword() {
    const passwordField = document.getElementById("passwordField");
    const toggleEye = document.getElementById("toggleEye");

    // เช็คว่า input เป็น password หรือไม่
    if (passwordField.type === "password") {
        passwordField.type = "text";  // แสดงรหัส
        toggleEye.textContent = "🙈"; // เปลี่ยนเป็นไอคอนปิดลูกตา
    } else {
        passwordField.type = "password";  // ซ่อนรหัส
        toggleEye.textContent = "👁️"; // เปลี่ยนกลับเป็นไอคอนเปิดลูกตา
    }
}
