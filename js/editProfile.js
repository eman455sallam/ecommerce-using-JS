let storedUserName=localStorage.getItem("username");
let storedUserEmail=localStorage.getItem("email");


let userNameContainer=document.getElementById("userInfoName");
let userEmailContainer=document.getElementById("userInfoEmail");
let userForm=document.getElementById("userForm");
let userImg=document.getElementById("userInfoImg");

userNameContainer.value=storedUserName;
userEmailContainer.value=storedUserEmail;



userForm.addEventListener("submit" ,updateFunction);

function updateFunction(e){
    storedUserName=userNameContainer.value;
    storedUserEmail=userEmailContainer.value;

    localStorage.setItem("username" ,storedUserName);
    localStorage.setItem("email" ,storedUserEmail);

    setTimeout(() =>{
        window.location.assign("index.html")
    },500);
}

