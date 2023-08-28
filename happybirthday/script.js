const greetingFrame = document.getElementById("greetingFrame");
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