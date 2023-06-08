
let productsDom=document.querySelector('.products');
let removeBtn=document.querySelector(".remove-from-cart");
let noItems=document.querySelector(".noItems");


function displayCartProducts(allProducts =[]){

    if(JSON.parse(localStorage.getItem("productsItems")).length === 0){
        noItems.innerHTML="No Items Yet";
    }

    let products= JSON.parse(localStorage.getItem("productsItems"))  || allProducts;

    let productsUI=products.map((item)=>{
        return`
        <div class="product-item">
        <div class="product-item-img">
        <img src="${item.imgUrl}" class="product-item-imgSrc"  alt="headphone">

        </div>

       
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <span>size:${item.size}</span><br>
            <span>quantity:${item.quantity}</span><br>

        </div>

        <div class="product-item-actions">
            <button class="remove-from-cart"  onClick="removeFromCart(${item.id})">remove from cart</button>
        </div>
        </div>

        `;
    })
    productsDom.innerHTML=productsUI;

}
displayCartProducts();
//remove products

function removeFromCart(id){
    let cartProducts= localStorage.getItem("productsItems")  ;

    if(cartProducts){

        let items=JSON.parse(cartProducts) ;
        let filterdItems=items.filter((item) => item.id !== id);
        displayCartProducts(filterdItems);
        localStorage.setItem("productsItems",JSON.stringify(filterdItems) );
        displayCartProducts(filterdItems);

    }
}
