const display = document.getElementById("display");
const historyList = document.getElementById("historyList");
const body = document.body;

function append(value) {
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearAll();
  }
});

/* THEME TOGGLE */
function toggleTheme() {
  body.classList.toggle("dark");
  body.classList.toggle("light");
}
function toggleTheme() {
  document.body.classList.toggle("dark");

  const logo = document.querySelector(".logo-placeholder img");
 const dark = document.body.classList.contains("dark");
     document.getElementById("logo").src =
      dark ? "logo_black.jpg" : "logo _white.jpg";

}

