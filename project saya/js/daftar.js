const button = document.getElementById("daftar");
button.addEventListener("click", daftar);

function daftar(e) {
    e.preventDefault();

    const requsername = document.getElementById("regusername");
    const reqpassword = document.getElementById("regpassword");
    const reqemail = document.getElementById("regemail");
    const reqterms = document.getElementById("persyaratan");
    const reqoptions = document.getElementsByName("options");

    // cek apakah username atau password kosong
    if (requsername.value === "" || reqpassword.value === "" || reqemail.value === "") {
        alert("Harap isi semua field");
        return;
    }

    // cek apakah persyaratan telah diterima
    if (!reqterms.checked) {
        alert("Harap setujui persyaratan terlebih dahulu");
        return;
    }

    // cek apakah pilihan radio button telah dipilih
    let selectedOption = false;
    for (let i = 0; i < reqoptions.length; i++) {
        if (reqoptions[i].checked) {
            selectedOption = reqoptions[i];
            break;
        }
    }
    if (!selectedOption) {
        alert("Harap pilih salah satu pilihan");
        return;
    }

    // cek apakah username telah terdaftar sebelumnya
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.some(user => user.username.toLowerCase() === requsername.value.toLowerCase());

    if (userExists) {
        alert("Nama pengguna tersebut telah terdaftar, harap pilih nama pengguna yang berbeda.");
        return;
    }

    // semua syarat telah terpenuhi, simpan data ke localStorage
    const newUser = {
        username: requsername.value,
        password: reqpassword.value,
        email: reqemail.value,
        option: selectedOption.value
    };

    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("Berhasil mendaftar!");

    // arahkan pengguna ke halaman index.html setelah berhasil mendaftar
    window.location.href = "index.html";
}
