let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.querySelector("#themeSwitch")

const enableDarkmode = function(){
    document.body.classList.add("darkMode")
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = function(){
    document.body.classList.remove("darkMode")
    localStorage.setItem("darkmode", "disabled")
}

if(darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", function(){
    darkmode = localStorage.getItem("darkmode")
    if(darkmode !== "active"){
        enableDarkmode()
    } else {
        disableDarkmode()
    }
})


// Fanger knapper
const openBtnEl = document.querySelector(".openBtn");
const closeBtnEl = document.querySelector(".closeBtn");
const dialogEl = document.querySelector("dialog");
 
// Opsæt eventListener på åbne/lukke knapper
openBtnEl.addEventListener("click", () => dialogEl.showModal())
closeBtnEl.addEventListener("click", () => dialogEl.close())





function filterCards() {
    let selectedDay = document.getElementById("dage").value;
    let selectedGenre = document.getElementById("genre").value;
    let selectedVenue = document.getElementById("venue").value;

    document.querySelectorAll(".card").forEach(card => {
        let cardDay = card.getAttribute("data-date"); // Fixed from "data-dage"
        let cardGenre = card.getAttribute("data-genre");
        let cardVenue = card.getAttribute("data-venue");

        let dayMatch = (selectedDay === "alle" || cardDay === selectedDay);
        let genreMatch = (selectedGenre === "alle" || cardGenre === selectedGenre);
        let venueMatch = (selectedVenue === "alle" || cardVenue === selectedVenue);

        if (dayMatch && genreMatch && venueMatch) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}

// Ensure event listeners are correctly applied
document.getElementById("dage").addEventListener("change", filterCards);
document.getElementById("genre").addEventListener("change", filterCards);
document.getElementById("venue").addEventListener("change", filterCards);
