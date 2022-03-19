# Pijar Camp - Week 3 - Javascript Code Implementation

Tugas Bootcamp Pijar Camp Minggu Ketiga Untuk Javascript Code Implementation.

## Soal

1. Buat code dari tugas Computer Science dibawah ini
   Deteksi Palindrom

- Diberikan sebuah teks, periksa apakah kata tersebut adalah palindrom atau
  tidak. Misalnya teks “Malam”, output = palindrom.
  Reverse Words
- Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi
  terbalik. Misalnya kalimat “Saya belajar Javascript”, output “Javascript belajar
  Saya”

---

2. Buatlah Flowchart dan Code untuk soal dibawah ini:

Demy membeli makanan menggunakan aplikasi PijarFood. Dimana terdapat 2 buah
kode promo:
- Promo ‘PIJARFOOD5’ dengan ketentuan pemesanan minimal 50rb akan
mendapat diskon 50%, dengan maksimal potongan sebesar 50rb.
- Promo ‘DITRAKTIRPIJAR’ dengan ketentuan pemesanan minimal 25rb akan
mendapatkan diskon 60%, dengan maksimal potongan sebesar 30rb.
- Jika tidak menggunakan kode promo tidak mendapatkan potongan (false)
Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap satu
kilometer selanjutnya dikenakan penambahan 3rb.
Untuk beberapa restoran dikenakan pajak yakni 5% dari harga makanan yang
dipesan (true), jika tidak dikenakan pajak (false).

TASK
- Buatlah flowchart untuk membuat fungsi dari cerita diatas.
- Buatlah sebuah function yang menerima 4 parameter.
PijarFood(harga, voucher, jarak, pajak)

Input: 
```javascript
PijarFood(75000, “PIJARFOOD5”, 5, true);
```
Output :
```bash
Harga: 75000
Potongan: 37500
Biaya Antar: 14000
Pajak: 3750
SubTotal: 55250 (harga - potongan + biaya antar + pajak)
```

---

3. Buatlah Flowchart dan Code untuk soal dibawah ini:
Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan
bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan
berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil
pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa
bilangan integer. Buatlah method/function yang menerima parameter hanya deret
angka dan menghasilkan output seperti keterangan di atas.

Input:
```javascript
divideAndSort(5956560159466056);
```

Output:
```bash
55566914566956
```
