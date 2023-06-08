
let storedUserName=localStorage.getItem("username");
let storedUserEmail=localStorage.getItem("email");
let storedImgUrl=localStorage.getItem("userImgUrl");
let allProducts=JSON.parse(localStorage.getItem("products"));
let myProducts=allProducts.filter((e) => e.isMyProduct === "yes");

let userNameContainer=document.getElementById("userName");
let emailContainer=document.getElementById("userEmail");
let imgContainer=document.getElementById("userImg").getAttribute('src');
let productsNum=document.querySelector("#productsNum span");

userNameContainer.innerHTML=storedUserName;
emailContainer.innerHTML=storedUserEmail;

console.log(storedImgUrl);
if(myProducts.length != 0){
    productsNum.innerHTML=myProducts.length;
}else{
    productsNum.innerHTML="new member";
}

if(storedImgUrl){
    imgContainer.innerHTML=storedImgUrl;

}


