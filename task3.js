const divideAndSort = (angka) => {
  if(angka > Number.MAX_SAFE_INTEGER) {
    if (typeof angka === "number") {
      const hasil = angka
        .toString()
        .split(0)
        .map((item) => item.split("").sort().join(""))
        .join("");
  
      console.log(hasil);
    } else {
      console.log("Parameter pertama (angka) harus bertipe number.");
    }
  } else {
    console.log("Parameter pertama (angka) tidak boleh lebih dari 9007199254740991");
  }
};

divideAndSort(5956560159466056);
// [595656]
// [159466]
// [56]
