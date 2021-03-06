const letter = document.querySelector(".adress-button");
const letterPopup = document.querySelector(".modal");
const letterClose = letterPopup.querySelector(".modal-close");
const letterForm = letterPopup.querySelector(".contact-form");
const loginLogin = letterPopup.querySelector(".contact-form-field");

letter.addEventListener("click", function (evt) {
    evt.preventDefault();
    letterPopup.classList.add("modal-show");
});

letterClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    letterPopup.classList.remove("modal-show");
    letterPopup.classList.remove("modal-error");
    loginLogin.focus();
  });

  letterForm.addEventListener("submit", function (evt) {
    if (!loginLogin.value) {
    evt.preventDefault();
    letterPopup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (letterPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        letterPopup.classList.remove("modal-show");
      }
    }
  });