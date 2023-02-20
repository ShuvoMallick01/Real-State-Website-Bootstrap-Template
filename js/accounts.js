// PICTURE UPLOAD AREA
Dropzone.options.myDropzone = {};

// PASSWORD FILED EYE ICON OFF ON
const passwordfield = document.querySelectorAll(".form-input-password");

passwordfield.forEach((item) => {
  const passwordInput = item.querySelector("#password");
  const passwordIcon = item.querySelector("#eye-password");

  passwordIcon.addEventListener("click", (e) => {
    passwordIcon.classList.toggle("fa-eye-slash");

    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });
});
