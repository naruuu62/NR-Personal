console.log(document.title)

document.title = 'Asep'
    
function pindah() {
    let name = document.getElementById("userinput").value;
    localStorage.setItem("username", name); // Simpan di localStorage
    window.location.href = "isi.html";  // Pindah ke halaman selamat datang
}

// Menampilkan nama yang tersimpan di halaman welcome.html
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("name")) {
        let name = localStorage.getItem("username") || "Kamu"; // Ambil dari localStorage
        document.getElementById("name").innerText = name;
    }
});



function pindah2(){
    window.location.href = 'isi1.html'
}

function pindah3(){
    window.location.href = 'isi2.html'
}

function pindah4(){
    window.location.href = 'isi3.html'
}

function pindah5(){
    window.location.href = 'berita.html'
}

function warna(){
    button.style.borderColor = 'blue'
}

function warna1(){
    button.style.borderColor = 'gray'
}

function warnaisi1(){
    button.style.backgroundcolor = 'white'
}
function warnaisi2(){
    button.style.borderColor = 'red'
}


function createHeart() {
    const heart = document.createElement("heart");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    // Posisi horizontal acak
    heart.style.left = Math.random() * window.innerWidth + "px";

    // Ukuran acak
    let size = Math.random() * 20 + 10 + "px";
    heart.style.fontSize = size;

    // Durasi jatuh acak
    let duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    // Hapus setelah jatuh
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Buat hati setiap 300ms
setInterval(createHeart, 300);

