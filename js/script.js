var letter = document.querySelector(".letter");
var popup = document.querySelector(".popup-container");
var popupclose = document.querySelector(".popup-container-close");
var overlay = document.querySelector(".overlay");

var form = popup.querySelector(".popup-form");
var username = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message-text]");





letter.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-container-display");
  overlay.classList.add("overlay-display");
  username.focus();
});
                      
popupclose.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-container-display");
  overlay.classList.remove("overlay-display");
});

overlay.addEventListener("click", function(event) {
  popup.classList.remove("popup-container-display");
  overlay.classList.remove("overlay-display");
});

form.addEventListener("submit", function(event) {
  if (!username.value || !email.value || !message.value) {
    event.preventDefault();
  }
});

popup.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-container-display")) {
      popup.classList.remove("popup-container-display");
      overlay.classList.remove("overlay-display");
    }
  }
});


                      