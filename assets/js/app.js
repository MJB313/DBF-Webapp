let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.querySelector("#themeSwitch")

const enableDarkmode = function(){
    document.body.classList.add("darkMode")
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = function(){
    document.body.classList.remove("darkMode")
    localStorage.setItem("darkmode", null)
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