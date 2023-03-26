function validateForm() {
    const inputs = document.querySelectorAll("input");
    const nama = inputs[0].value.trim();
    const username = inputs[1].value.trim();
    const password = inputs[2].value.trim();
    const email = inputs[3].value.trim();
    const nim = Number(inputs[4].value.trim());
    const minat_checkboxes = document.getElementsByName("minat[]");
    const kelas = document.getElementById("kelas").value;
    const tanggal_lahir = new Date(inputs[9].value);
    const lampiran = inputs[10].value.trim().split("\\").pop(); // Get the file name only
    const syarat_ketentuan = document.getElementById("syarat-ketentuan");
  
    const errors = [];
  
    // Validasi Nama
    if (nama === "") {
      errors.push("Nama harus diisi.");
    } else if (nama.length > 50) {
      errors.push("Nama tidak boleh lebih dari 50 karakter.");
    }
  
    // Validasi Username
    if (username === "") {
      errors.push("Username harus diisi.");
    } else if (username.length > 25) {
      errors.push("Username tidak boleh lebih dari 25 karakter.");
    }
  
    // Validasi Password
    if (password === "") {
      errors.push("Password harus diisi.");
    } else if (password.length < 6) {
      errors.push("Password harus lebih dari 6 karakter.");
    }
  
    // Validasi Email
    if (email === "") {
      errors.push("Email harus diisi.");
    } else if (
      !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/i) // Basic email validation
    ) {
      errors.push("Email tidak valid.");
    }
  
    // Validasi NIM
    if (isNaN(nim) || nim < 10 || nim > 2109116127) {
      errors.push("NIM harus berupa angka antara 10 dan 2109116127.");
    }
  
    // Validasi Checkbox Minat
    let minatTerpilih = false;
    for (let i = 0; i < minat_checkboxes.length; i++) {
      if (minat_checkboxes[i].checked) {
        minatTerpilih = true;
        break;
      }
    }
    if (!minatTerpilih) {
      errors.push("Anda harus memilih setidaknya satu minat.");
    }
  
    // Validasi Kelas
    if (!kelas) {
      errors.push("Anda harus memilih kelas.");
    }
  
    // Validasi Tanggal Lahir
    if (
      isNaN(tanggal_lahir.getTime()) || // If date is Invalid
      tanggal_lahir > new Date()
    ) {
      errors.push("Tanggal lahir tidak valid.");
    }
  
    // Validasi Lampiran
    if (lampiran === "") {
      errors.push("Anda harus memilih sebuah file.");
    }
  
    // Validasi Syarat Ketentuan Checkbox
    if (!syarat_ketentuan.checked) {
      errors.push(
        "Anda harus menyetujui syarat dan ketentuan untuk melanjutkan."
      );
    }
  
    // Jika ada error tampilkan alert dan return false
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }
  
    // Jika tidak ada error simpan data ke localStorage dan tampilkan notifikasi berhasil
    const minats = [];
    for (let i = 0; i < minat_checkboxes.length; i++) {
      if (minat_checkboxes[i].checked) {
        minats.push(minat_checkboxes[i].value);
      }
    }
    const data = {
      nama,
      username,
      password,
      email,
      nim,
      minats,
      kelas,
      tanggal_lahir,
      lampiran,
    };
    console.log(data);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Terima kasih atas pendaftaran Anda!");
    return true;
  }
  
  // Tambahkan eventListener ke form
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    if (!validateForm()) {
      event.preventDefault();
    }
  });
  