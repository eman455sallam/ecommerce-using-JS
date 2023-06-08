
let allProducts=JSON.parse(localStorage.getItem("products")) || productsDatabase;
let productsDom=document.querySelector('.products');

let noItems=document.querySelector(".noItems");


function displayMyProducts(allProducts =[]){

    let myProducts=allProducts.filter((ele) => ele.isMyProduct === "yes");

    if(myProducts.length === 0){
        noItems.innerHTML="No Items Yet";
    }

    

    let productsUI=myProducts.map((item)=>{
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

            <button class="edit"  onClick="editProduct(${item.id})">edit</button>
            <button class="delete"  onClick="deleteProduct(${item.id})">delete</button>
        </div>

        
        </div>

        `;
    })
    productsDom.innerHTML=productsUI;

}

displayMyProducts(allProducts);


//edit function 

function editProduct(id){
    localStorage.setItem("editProductId",id);
    window.location.assign("editProduct.html");

}

//remove products

function deleteProduct(id){
    let allProducts=JSON.parse(localStorage.getItem("products")) || productsDatabase;
    let myProducts=allProducts.filter((ele) => ele.isMyProduct === "yes");

    let afterDeleteProduct=allProducts.filter((ele) => ele.id !== id);
    localStorage.setItem("products",JSON.stringify(afterDeleteProduct) );

    console.log(afterDeleteProduct);
    displayMyProducts(afterDeleteProduct);
}