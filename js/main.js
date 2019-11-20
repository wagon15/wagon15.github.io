// Toggle nav dropdown on button click
document.getElementById("nav-dropdown").onclick = function() {
    document.getElementById("linkList").classList.toggle("nav-bar__links--hidden");
};

// Toggle nav dorpdown on outside button click
window.onclick = function(event) {
    if (!event.target.matches('#nav-dropdown')) {
    document.getElementById("linkList").classList.add("nav-bar__links--hidden");

    }
}
