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

 // Initialize EmailJS service
   (function () {
      emailjs.init("user_AcealwNZcRD1qdKcO9aJc");
   })();
 // Sending email from form via EmailJS
 const contactForm = document.getElementById("contact-form");

 contactForm.onsubmit = function (event) {
    event.preventDefault();

    const   nameInput = document.getElementById("name"),
            emailInput = document.getElementById("email"),
            messageInput = document.getElementById("message"),
            emailParameters = {
               name:    nameInput.value,
               email:   emailInput.value,
               message: messageInput.value
            };

   if ( nameInput.value && emailInput.value && messageInput.value) {
      emailjs.send( "gmail", "template_portfolio", emailParameters)
      .then( (response) => {
         notifyUser( "Message sent!", "contact-section__confirmation", contactForm, nameInput, emailInput, messageInput);

      }, (error) => {
         notifyUser( "Something went wrong...", "contact-section__error", contactForm, nameInput, emailInput, messageInput);
      })
   } else {
      notifyUser( "Something went wrong...", "contact-section__error", contactForm, nameInput, emailInput, messageInput);      
   }
};

// Helper function for clearing form and notifying user
function notifyUser( notificationText, notificationClass, contactForm, nameInput, emailInput, messageInput) {
   const notification = document.createElement("p");
         notification.innerText = notificationText;
         notification.classList.add(notificationClass);
         contactForm.prepend( notification );

         nameInput.value = "";
         emailInput.value = "";
         messageInput.value = "";

         setTimeout( () => { contactForm.removeChild( notification ) }, 3000);
}
