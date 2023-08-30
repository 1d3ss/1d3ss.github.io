// const showImageButton = document.getElementById('showImageButton');
// const cardImg = document.getElementById('cardImg');

// showImageButton.addEventListener('click', () => {
//     cardImg.style.display = 'block';
// });


const greetingFrame = document.getElementById("data");
const overlay = document.getElementById("overlay");
const closePopup = document.getElementById("closePopup");
const deg = 6
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')
const time = document.querySelector('.time')

setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`
})

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
