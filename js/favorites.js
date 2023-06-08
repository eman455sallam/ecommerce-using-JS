
let productsDom=document.querySelector('.products');
let removeBtn=document.querySelector(".remove-from-cart");
let noItems=document.querySelector(".noItems");


function displayFavoriteProducts(allProducts =[]){

    if(JSON.parse(localStorage.getItem("favoriteProducts")).length === 0){
        noItems.innerHTML="No Items Yet";
    }

    let products= JSON.parse(localStorage.getItem("favoriteProducts"))  || allProducts;

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
            <button class="remove-from-cart"  onClick="removeFromFav(${item.id})">remove from favorite</button>
        </div>
        </div>

        `;
    })
    productsDom.innerHTML=productsUI;

}
displayFavoriteProducts();
//remove products

function removeFromFav(id){
    let favProducts= localStorage.getItem("favoriteProducts")  ;

    if(favProducts){

        let items=JSON.parse(favProducts) ;
        let filterdItems=items.filter((item) => item.id !== id);
        displayFavoriteProducts(filterdItems);
        localStorage.setItem("favoriteProducts",JSON.stringify(filterdItems) );
        displayFavoriteProducts(filterdItems);

    }
}
