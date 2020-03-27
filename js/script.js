// ILLUSTRATIONS MODAL BUTTON START
const illustrationsButton = document.getElementById("illus-modal-button");
illustrationsButton.addEventListener("click", function() {
  document
    .querySelector(".illustrations")
    .classList.toggle("illustrations-open");
});

document
  .getElementById("illustrations-close")
  .addEventListener("click", function() {
    console.log("close anonymous function was clicked");
    document
      .querySelector(".illustrations")
      .classList.remove("illustrations-open");
  });
// ILLUSTRATIONS MODAL BUTTON END

// PROP DESIGN MODAL BUTTON START
const propDesignButton = document.getElementById("prop-modal-button");
propDesignButton.addEventListener("click", function() {
  document.querySelector(".prop-design").classList.toggle("prop-design-open");
});

document
  .getElementById("prop-design-close")
  .addEventListener("click", function() {
    console.log("close anonymous function was clicked");
    document.querySelector(".prop-design").classList.remove("prop-design-open");
  });
// PROP DESIGN MODAL BUTTON END

// CHARACTER DESIGN MODAL BUTTON START
const charDesignButton = document.getElementById("char-modal-button");
charDesignButton.addEventListener("click", function() {
  document.querySelector(".char-design").classList.toggle("char-design-open");
});

document
  .getElementById("char-design-close")
  .addEventListener("click", function() {
    console.log("close anonymous function was clicked");
    document.querySelector(".char-design").classList.remove("char-design-open");
  });
// CHARACTER DESIGN MODAL BUTTON END

// NAME ERROR START
const contactForm = document.querySelector("#contact-form");
const errorMessage = document.querySelector("#error-message");
const courseApplication = {};

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let firstName = document.querySelector("#first-name");
  courseApplication.firstName = firstName.value;

  if (
    courseApplication.firstName.length < 3 ||
    courseApplication.firstName.length > 10
  ) {
    errorMessage.innerText = "Sorry, First name must be more than 3 characters";

    firstName.style.borderColor = "red";
  }
});
// NAME ERROR END
