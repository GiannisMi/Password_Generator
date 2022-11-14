const input = document.querySelector(".password-box input");
const generate_btn = document.querySelector(".refresh-btn");
const copy_btn = document.querySelector(".copy-btn");
const password_length = document.querySelector(".password-length input");
const checkboxes = document.querySelectorAll(".settings div input");
const min_length = document.querySelector(".password-length p");

const allKeys = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "-!@#$%^&*()_+}{[];:?/>.<,",
};
let length = password_length.value;

const updateSlider = () => {
  length = password_length.value;
  let string = `Length(${length})`;
  min_length.innerText = string;
};

const generatePassword = () => {
  let password = "";
  let characters = "";
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      password += allKeys[checkbox.id];
    }
  });
  for (let i = 0; i < length; i++) {
    characters += password[Math.floor(Math.random() * password.length)];
  }
  input.value = characters;
};

const CopyText = () => {
  navigator.clipboard.writeText(input.value);
};

copy_btn.addEventListener("click", CopyText);
password_length.addEventListener("input", updateSlider);
generate_btn.addEventListener("click", generatePassword);
