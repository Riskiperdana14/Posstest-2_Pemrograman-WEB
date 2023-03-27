const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ambil data user dari local storage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // cek apakah username dan password kosong atau tidak
  if (username.value === "" || password.value === "") {
    alert("Harap isi semua field");
    return;
  }

  // cari data user yang sesuai dengan input user
  const user = storedUsers.find(
    (u) => u.username === username.value && u.password === password.value
  );

  // jika user ditemukan, redirect ke halaman utama
  if (user) {
    alert("Berhasil login");
    window.location.href = "halaman utama.html";
  } else {
    alert("Username atau Password salah");
  }
});
