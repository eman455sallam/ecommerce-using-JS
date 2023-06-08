
let storedUserName=localStorage.getItem("username");
let storedUserEmail=localStorage.getItem("email");
let allProducts=JSON.parse(localStorage.getItem("products"));
let myProducts=allProducts.filter((e) => e.isMyProduct === "yes");

let userNameContainer=document.getElementById("userName");
let emailContainer=document.getElementById("userEmail");
let productsNum=document.querySelector("#productsNum span");

userNameContainer.innerHTML=storedUserName;
emailContainer.innerHTML=storedUserEmail;

if(myProducts.length != 0){
    productsNum.innerHTML=myProducts.length;
}else{
    productsNum.innerHTML="new member";
}


