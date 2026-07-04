let nilai = 80;

if (nilai >= 75) {
    console.log("Selamat, Anda Lulus");
} else {
    console.log("Maaf, Anda Tidak Lulus");
}

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log("Perulangan ke-" + i);
}