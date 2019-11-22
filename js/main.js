// Toggle nav dropdown on button click
document.getElementById("nav-dropdown").onclick = function() {
    document.getElementById("linkList").classList.toggle("nav-bar__links--is-open");
};

// Toggle nav dorpdown on outside button click
window.onclick = function(event) {
    if (!event.target.matches('#nav-dropdown')) {
    document.getElementById("linkList").classList.remove("nav-bar__links--is-open");

    }
}
 // Hide scroll icon
 const scrollIcon = document.getElementById("scrollIcon");
 const className = "landing-section__scroll-icon--is-hidden";
 document.onscroll = function() {
    window.pageYOffset === 0 ? setTimeout( function() {scrollIcon.classList.remove(className);}, 2000) : scrollIcon.classList.add(className);
 };

 // Scrolling to sections
 document.getElementById("aboutLink").onclick = function(event) {
    event.preventDefault(); 
    document.getElementById("about").scrollIntoView({ behavior: "smooth", block: "start"});
 };
 document.getElementById("projectsLink").onclick = function(event) {
    event.preventDefault(); 
    document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start"});
 };
 document.getElementById("contactLink").onclick = function(event) {
    event.preventDefault(); 
    document.getElementById("contact").scrollIntoView({ behavior: "smooth", block: "start"});
 };