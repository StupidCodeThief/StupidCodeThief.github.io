const loginLink = document.querySelector(".write-us");
const mapLink = document.querySelector(".map-link");

const loginPopup = document.querySelector(".modal-login");
const mapPopup = document.querySelector(".modal-map");

const closeLoginPopup = document.getElementById("login-modal-close");
const closeMapPopup = document.getElementById("map-modal-close");
const loginField = loginPopup.querySelector("[name=login]");

loginLink.addEventListener("click", e => {
  e.preventDefault();
  loginPopup.classList.add("modal-show");
  loginField.focus();
});

mapLink.addEventListener("click", e => {
  e.preventDefault();
  mapPopup.classList.add("modal-show");
});

closeLoginPopup.addEventListener("click", e => {
  e.preventDefault();
  loginPopup.classList.remove("modal-show");
});

closeMapPopup.addEventListener("click", e => {
  e.preventDefault();
  mapPopup.classList.remove("modal-show");
});