const input = $(".password-box input");
const generate_btn = $(".refresh-btn");
const copy_btn = $(".copy-btn");
const password_length = $(".password-length input");
const checkboxes = $(".settings div input");
const min_length = $(".password-length p");

const allKeys = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "01234567890",
  symbols: "~-!@#$%^&*()_+}{[];:'?/>.<,",
};

let length = password_length.val();
let characters = "";

password_length.on("input", function () {
  length = password_length.val();
  let string = `Length(${length})`;
  min_length.text(string);
});

generate_btn.on("click",function(){
    if(characters){
        let password = "";
        for(i=0; i<length;i++){
            password += characters.charAt(Math.floor(Math.random() * characters.length));
            input.val() = password;
        }
    }
    
});
let generatePassword =()=>{
    let target = event.target;
    console.log(target);
    let character = allKeys[target.id];
    if(target.checked){
        characters+=character;
    }else if(characters.indexOf(character)>-1){
        characters = characters.replace(character,"");
    }
}

generatePassword();



copy_btn.on("click",()=>{
    navigator.clipboard.writeText(input.val());
});