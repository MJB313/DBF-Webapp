// Js for Dark Mode
 
// Kigger efter værdien, "darkmode" inde på localstorage
let darkmode = localStorage.getItem("darkmode");
 
// Fanger vores element for ID'et themeSwitch
const themeSwitch = document.querySelector("#themeSwitch");
 
// aktivering af dark mode. Vi laver en funktion, som tilføjer klassen "darkMode", til vores body element. Vi tilføjer det inde på vores localstorage, som fortæller os når det bliver aktiveret/klikket på.
const enableDarkmode = function () {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkmode", "active");
};
 
// Gør det omvendte, af koden ovenover og "fjerner" dark mode og vender tilbage til vores light mode (:root variabler) og fortæller inde på vores localstorage at darkmode er blevet deaktiveret/disabled.
const disableDarkmode = function () {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkmode", "disabled");
};
 
// Hvis dark mode bliver trykket på, så ændres vores farve palette fra :root til farve paletten for .darkMode. Ses inde på css'en.
if (darkmode === "active") enableDarkmode();
 
// Lytter efter et "click", og browseren skal huske på den data (brugerens valgte color "mode"), inde på vores localstorage. Så hvis "darkmode" blev valgt skal den aktiver/ændre for den farve palette opstillet i css'en. Ellers disable/deaktiver det.
themeSwitch.addEventListener("click", function () {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});
 
// Js for Dark Mode slut
 
//
//
//
 
// Js for filteringssystem
 
// Fanger knapper
const openBtnEl = document.querySelector(".openBtn");
const closeBtnEl = document.querySelector(".closeBtn");
const dialogEl = document.querySelector("dialog");
 
// Opsæt eventListener på åbne/lukke knapper
openBtnEl.addEventListener("click", () => dialogEl.showModal());
closeBtnEl.addEventListener("click", () => dialogEl.close());
 
// Fanger alle de values inde på henholdvis, dage, genre og venues
function filterCards() {
  let selectedDay = document.getElementById("dage").value;
  let selectedGenre = document.getElementById("genre").value;
  let selectedVenue = document.getElementById("venue").value;
 
// Selector det data vi har tilføjet for hvert card som for eksempel hvornår bandet spiller, hvilken genre de er og hvilken venue de spiller på
  document.querySelectorAll(".card").forEach((card) => {
    let cardDay = card.getAttribute("data-date");
    let cardGenre = card.getAttribute("data-genre");
    let cardVenue = card.getAttribute("data-venue");
 
// selectedDay er brugerens valgte option, hvis "alle" options bliver valgt, så bliver "dayMatch" true og alle options'ne for dagene bliver vist. Eller symbolet, "||",  tjekker op på om cardDay med attributen data-date matcher på den selected date.  
// Sådan fungerer det også for genre og venue
    let dayMatch = selectedDay === "alle" || cardDay === selectedDay;
    let genreMatch = selectedGenre === "alle" || cardGenre === selectedGenre;
    let venueMatch = selectedVenue === "alle" || cardVenue === selectedVenue;
 
// Når man får valgt ens option skal de andre options som ikke er valgt gemmes væk og de valgte vises frem.
    if (dayMatch && genreMatch && venueMatch) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}
 
// Lytter til efter en "change" alt efter hvilken dag, genre og/eller venue man har valgt, og kun de valgte options dukker op.
document.getElementById("dage").addEventListener("change", filterCards);
document.getElementById("genre").addEventListener("change", filterCards);
document.getElementById("venue").addEventListener("change", filterCards);
 
// Js for filteringssystem slut
 
//
//
//
 
// Js for band preview
 
// fanger variabler med vinduet for preview af band, alle preview active, card image og knap.
 
document.addEventListener("DOMContentLoaded", function () {
  const previewContainer = document.querySelector(".band_preview");
  const previewBoxes = document.querySelectorAll(".preview-active");
  const cardImages = document.querySelectorAll(".program .card img");
  const closeButtons = document.querySelectorAll(".buttonClose");
 
// Lytter efter et "click" på hvert image for hvert band card. Når der bliver klikket på et image eksekvere linjen for "const target", som vælger den nærmeste parent element, og henter det værdi for det valgte card. Så inde på vores html så referere cardet med data-name: "p-1" til vores preview med data-target: "p-1".
 
  cardImages.forEach((img) => {
    img.addEventListener("click", function () {
      const target = this.closest(".card").getAttribute("data-name");
 
// Looper igennem vores preview bokse for hvert card. Fjerner active, og gemmer vores display af previews indtil man klikker på et image.
      previewBoxes.forEach((box) => {
        box.classList.remove("active");
        box.style.display = "none";
      });
 
// Når man klikker ind på et card dukker preview'et op og man får mere information om bandet, og hvor og hvornår de spiller.
      const activePreview = document.querySelector(
        `.preview-active[data-target="${target}"]`
      );
      if (activePreview) {
        previewContainer.style.display = "flex";
        activePreview.classList.add("active");
        activePreview.style.display = "block";
      }
    });
  });
 
// Lytter til et "click" for når man klikker på krydset inde på et preview
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      previewContainer.style.display = "none";
      previewBoxes.forEach((box) => {
        box.classList.remove("active");
        box.style.display = "none";
      });
    });
  });
});
 
// Js for band preview slut