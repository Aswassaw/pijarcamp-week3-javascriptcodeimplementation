const pijarFood = (harga, voucher, jarak, pajak = false) => {
  let potonganVoucher = 0;
  let biayaPengiriman = 0;
  let biayaPajak = pajak ? (harga * 5) / 100 : 0;

  // menghitung potongan berdasarkan voucher
  if (voucher === "PIJARFOOD5") {
    if (harga >= 50000) {
      potonganVoucher = (harga * 50) / 100;

      if (potonganVoucher > 50000) {
        potonganVoucher = 50000;
      }
    }
  } else if (voucher === "DITRAKTIRPIJAR") {
    if (harga >= 25000) {
      potonganVoucher = (harga * 60) / 100;

      if (potonganVoucher > 30000) {
        potonganVoucher = 30000;
      }
    }
  }

  // menghitung potongan berdasarkan biayaPengiriman
  if (jarak > 2) {
    biayaPengiriman = (jarak - 2) * 3000 + 5000;
  } else {
    biayaPengiriman = 5000;
  }

  console.log(`Harga: ${harga}`);
  console.log(`Potongan: ${potonganVoucher}`);
  console.log(`Biaya Antar: ${biayaPengiriman}`);
  console.log(`Pajak: ${biayaPajak}`);
  console.log(`SubTotal: ${harga - potonganVoucher + biayaPengiriman + biayaPajak}`);
};

pijarFood(75000, "PIJARFOOD5", 5, true);
