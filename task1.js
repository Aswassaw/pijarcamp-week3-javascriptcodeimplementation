// deteksi palindrom
const cekPalindrom = (kata) => {
  if (typeof kata === "string") {
    if (
      kata.toLowerCase() === kata.toLowerCase().split("").reverse().join("")
    ) {
      console.log("Palindrom");
    } else {
      console.log("Bukan Palindrom");
    }
  } else {
    console.log("Parameter pertama (kata) harus bertipe string.");
  }
};

cekPalindrom("malam");

// reverse words
const reverseWords = (kalimat) => {
  if (typeof kalimat === "string") {
    const hasil = kalimat.split(" ").reverse().join(" ");
    console.log(hasil);
  } else {
    console.log("Parameter pertama (kata) harus bertipe string.");
  }
};

reverseWords("Saya belajar Javascript");
