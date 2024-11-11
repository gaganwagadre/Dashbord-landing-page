document.querySelector("ri-pause-large-fill").addEventListener("click", function() {
    console.log("hellow")
    let icon = this.querySelector('i');  // Select the <i> tag inside this div
    if (icon.classList.contains("ri-pause-large-fill")) {
        icon.classList.remove("ri-pause-large-fill");
        icon.classList.add("ri-play-fill"); // Change to Play Icon
    } else {
        icon.classList.remove("ri-play-fill");
        icon.classList.add("ri-pause-large-fill"); // Change back to Pause Icon

        
    }
});