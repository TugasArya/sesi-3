// ==========================================
// Tugas 1 – Percabangan
// ==========================================
function konversiNilai(nilai) {
    let huruf;
    
    if (nilai >= 80 && nilai <= 100) {
        huruf = 'A';
    } else if (nilai >= 70 && nilai <= 79) {
        huruf = 'B';
    } else if (nilai >= 60 && nilai <= 69) {
        huruf = 'C';
    } else if (nilai >= 50 && nilai <= 59) {
        huruf = 'D';
    } else if (nilai < 50 && nilai >= 0) {
        huruf = 'E';
    } else {
        return "Nilai tidak valid!";
    }
    
    return `Nilai angka ${nilai} dikonversi menjadi huruf ${huruf}`;
}

console.log("=== Tugas 1: Percabangan ===");
console.log(konversiNilai(85)); // Output: A
console.log(konversiNilai(72)); // Output: B
console.log("");


// ==========================================
// Tugas 2 – Perulangan
// ==========================================
console.log("=== Tugas 2a: Bilangan Ganjil Menggunakan FOR ===");
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}
console.log("");

console.log("=== Tugas 2b: Bilangan Ganjil Menggunakan WHILE ===");
let j = 1;
while (j <= 20) {
    console.log(j);
    j += 2;
}
console.log("");


// ==========================================
// Tugas 3 – Array
// ==========================================
console.log("=== Tugas 3: Array ===");
// 1. Membuat array berisi nama 5 mahasiswa
let mahasiswa = ["Andi", "Budi", "Citra", "Dewi", "Eko"];

console.log("Daftar Mahasiswa Awal:");
for (let i = 0; i < mahasiswa.length; i++) {
    console.log(`- ${mahasiswa[i]}`);
}

// 2. Tambahkan 1 nama baru ke array menggunakan push()
mahasiswa.push("Fajar");

// 3. Hapus nama pertama menggunakan shift()
mahasiswa.shift();

// 4. Tampilkan kembali isi array setelah dimodifikasi
console.log("\nDaftar Mahasiswa Setelah Dimodifikasi:");
mahasiswa.forEach((nama, index) => {
    console.log(`${index + 1}. ${nama}`);
});
