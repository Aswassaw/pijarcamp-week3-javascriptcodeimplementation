const divideAndSort = (angka) => {
  if (typeof angka === "number") {
    let angkaArr = angka
      .toString()
      .split(0)
      .map((item) => item.split("").sort().join(""));
    console.log(parseInt(angkaArr.join("")));
  } else {
    console.log("Parameter pertama (angka) harus bertipe number.");
  }
};

divideAndSort(23107560352023);
