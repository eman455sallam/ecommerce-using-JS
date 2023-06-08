let productsBox=document.querySelector(".carts-products div");
let cartProducts=document.querySelector(".carts-products ");
let badge=document.querySelector(".badge");
let cart=document.querySelector(".cart");
let addedItems =localStorage.getItem("productsItems") ? JSON.parse(localStorage.getItem("productsItems")) :[];


if(addedItems){
    addedItems.map((item)=>{
        productsBox.innerHTML +=`<p>${item.title} ${item.quantity}</P>`;

    });
    badge.style.display="block";
    badge.innerHTML = addedItems>0 ? addedItems.length : badge.style.display="none";

}


//toggle products div
cart.addEventListener('click',openCartMenu);

function openCartMenu(){
    if(productsBox.innerHTML != ""){
     if(cartProducts.style.display =="block"){
        cartProducts.style.display ="none";
     }else{
        cartProducts.style.display ="block";
     }
        
    }
}