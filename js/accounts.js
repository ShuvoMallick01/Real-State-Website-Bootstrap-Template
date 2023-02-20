// const dropzone = new Dropzone("div.my-dropzone", { url: "/assets/upload/" });
Dropzone.options.myDropzone = {
  // Configuration options go here
};

// ACCOUNTS & SECURITY JS
let eyePassword = document.querySelectorAll('[id="eye-password"]');
// let typePassword = document.getAttribute("password");
let passwordInput = document.querySelectorAll('[id="password"]');

// console.log(passwordInput);

eyePassword.forEach((item) => {
  // console.log(item);
  item.addEventListener("click", (e) => {
    item.classList.toggle("fa-eye-slash");

    console.log(e.target);
    passwordInput.forEach((item) => {
      const type =
        item.getAttribute("type") === "password" ? "text" : "password";
      item.setAttribute("type", type);
    });
  });
});

// function getAttributeFunction(attribute) {
//   const type =
//     passwordInput.getAttribute("type") === "password" ? "text" : "password";
//   passwordInput.setAttribute("type", type);
// }
