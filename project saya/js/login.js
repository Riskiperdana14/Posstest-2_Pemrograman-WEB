const form = document.getElementById("form");
const username = document.getElementById("username");
const pass = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const loc_username = localStorage.getItem("username");
  const loc_password = localStorage.getItem("password");

  if (username.value == loc_username && pass.value == loc_password) {
    alert("Berhasil login");
    window.location.href = "halaman utama.html";
  } else {
    alert("Username atau Password salah");
  }
});
