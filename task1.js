// deteksi palindrom
const kata = "malam";

if (kata.toLowerCase() === kata.toLowerCase().split("").reverse().join("")) {
  console.log("Palindrom");
} else {
  console.log("Bukan Palindrom");
}

// reverse words
const kalimat = "Saya belajar Javascript";
console.log(kalimat.split(" ").reverse().join(" "));
