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


        const icons = document.querySelectorAll(".icon");

        icons.forEach(icon => {
            icon.addEventListener("click", function() {
                // Remove 'active' class from all icons
                icons.forEach(i => i.classList.remove("active"));
                
                // Add 'active' class to the clicked icon
                this.classList.add("active");
            });
        });

