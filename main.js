function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    if (!event.target.matches('#dropdownButton')) {
        const menu = document.getElementById("dropdownMenu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
    }
}