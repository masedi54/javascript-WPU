let ask = true;
while (ask) {
  // Input User
  let user = prompt("Pilih: semut, orang, gajah");

  // Input Computer
  // Membangkitkan pilihan random computer
  let computer = Math.random();
  if (computer < 0.34) {
    computer = "semut";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "orang";
  } else {
    computer = "gajah";
  }

  // Rules
  let result = "";
  if (user == computer) {
    result = "SERI!";
  } else if (user == "semut") {
    // if (computer == "gajah") {
    //   result = "KALAH!";
    // } else {
    //   result = "MENANG!";
    // }
    result = computer == "gajah" ? "MENANG!" : "KALAH!";
  } else if (user == "orang") {
    result = computer == "semut" ? "MENANG!" : "KALAH!";
  } else if (user == "gajah") {
    result = computer == "orang" ? "MENANG!" : "KALAH!";
  } else {
    result = "Anda memasukkan pilihan yang salah!";
  }

  // Result
  alert(
    `Anda memilih: ${user} dan komputer memilih: ${computer} \nMaka hasilnya: Anda ${result}`
  );

  ask = confirm("Main lagi?");
}
