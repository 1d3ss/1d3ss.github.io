// const userName = prompt(`Введи ім'я: `);
// const age = prompt(`Введи вік: `);

// let urName = document.getElementById('urName')
// let urAge = document.getElementById('urAge')
// urName.innerHTML = `Привіт, ${userName}!`
// urAge.innerHTML = `Тобі ${age}`

const greetingFrame = document.getElementById("data");
const overlay = document.getElementById("overlay");
const closePopup = document.getElementById("closePopup");

greetingFrame.addEventListener("click", () => {
   overlay.style.display = "block";
});

closePopup.addEventListener("click", () => {
   overlay.style.display = "none";
});

window.addEventListener("click", (event) => {
   if (event.target === overlay) {
      overlay.style.display = "none";
   }
});

const greetingFrame2 = document.getElementById("greetingFrame");
const overlay2 = document.getElementById("overlay2");
const closePopup2 = document.getElementById("closePopup2");

greetingFrame2.addEventListener("click", () => {
   overlay2.style.display = "block";
});

closePopup2.addEventListener("click", () => {
   overlay2.style.display = "none";
});

window.addEventListener("click", (event) => {
   if (event.target === overlay2) {
      overlay2.style.display = "none";
   }
});