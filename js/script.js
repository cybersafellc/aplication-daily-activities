// card 1
let card1 = {
  button: document.querySelector("#button-card-1"),
  "button text": document.querySelector("#button-text-card-1"),
};
let buttondiKlik = false;
let udahText;
if (!localStorage.getItem("textcard1")) {
  card1.button.addEventListener("click", function () {
    udahText = card1["button text"].innerHTML = "sudah";
    localStorage.setItem("textcard1", udahText);
    buttondiKlik = true;
    localStorage.setItem("sudahdiklik", buttondiKlik);
  });
}

if (localStorage.getItem("sudahdiklik")) {
  card1["button text"].innerHTML = "Sudah";
  card1.button.classList.add("bg-success");
}

// card2
let card2 = {
  button: document.querySelector("#button-card-2"),
  "button text": document.querySelector("#button-text-card-2"),
};
if (!localStorage.getItem("buton2diklik")) {
  card2.button.addEventListener("click", function () {
    localStorage.setItem("buton2diklik", true);
  });
} else {
  card2.button.classList.add("bg-success");
  card2["button text"].innerHTML = "Sudah";
}

// card3
let card3 = {
  button: document.querySelector("#button-card-3"),
  "button text": document.querySelector("#button-text-card-3"),
};
if (!localStorage.getItem("buton3diklik")) {
  card3.button.addEventListener("click", function () {
    localStorage.setItem("buton3diklik", true);
  });
} else {
  card3.button.classList.add("bg-success");
  card3["button text"].innerHTML = "Sudah";
}

// card4
let card4 = {
  button: document.querySelector("#button-card-4"),
  "button text": document.querySelector("#button-text-card-4"),
};
if (!localStorage.getItem("buton4diklik")) {
  card4.button.addEventListener("click", function () {
    localStorage.setItem("buton4diklik", true);
  });
} else {
  card4.button.classList.add("bg-success");
  card4["button text"].innerHTML = "Sudah";
}

// card5
let card5 = {
  button: document.querySelector("#button-card-5"),
  "button text": document.querySelector("#button-text-card-5"),
};
if (!localStorage.getItem("buton5diklik")) {
  card5.button.addEventListener("click", function () {
    localStorage.setItem("buton5diklik", true);
  });
} else {
  card5.button.classList.add("bg-success");
  card5["button text"].innerHTML = "Sudah";
}

// card6
let card6 = {
  button: document.querySelector("#button-card-6"),
  "button text": document.querySelector("#button-text-card-6"),
};
if (!localStorage.getItem("buton6diklik")) {
  card6.button.addEventListener("click", function () {
    localStorage.setItem("buton6diklik", true);
  });
} else {
  card6.button.classList.add("bg-success");
  card6["button text"].innerHTML = "Sudah";
}

// card7
let card7 = {
  button: document.querySelector("#button-card-7"),
  "button text": document.querySelector("#button-text-card-7"),
};
if (!localStorage.getItem("buton7diklik")) {
  card7.button.addEventListener("click", function () {
    localStorage.setItem("buton7diklik", true);
  });
} else {
  card7.button.classList.add("bg-success");
  card7["button text"].innerHTML = "Sudah";
}

// card8
let card8 = {
  button: document.querySelector("#button-card-8"),
  "button text": document.querySelector("#button-text-card-8"),
};
if (!localStorage.getItem("buton8diklik")) {
  card8.button.addEventListener("click", function () {
    localStorage.setItem("buton8diklik", true);
  });
} else {
  card8.button.classList.add("bg-success");
  card8["button text"].innerHTML = "Sudah";
}

// card9
let card9 = {
  button: document.querySelector("#button-card-9"),
  "button text": document.querySelector("#button-text-card-9"),
};
if (!localStorage.getItem("buton9diklik")) {
  card9.button.addEventListener("click", function () {
    localStorage.setItem("buton9diklik", true);
  });
} else {
  card9.button.classList.add("bg-success");
  card9["button text"].innerHTML = "Sudah";
}
//   reset
let buttonReset = document.querySelector("#reset");
buttonReset.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
