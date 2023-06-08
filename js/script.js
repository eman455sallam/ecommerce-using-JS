



let productsDom=document.querySelector('.products');
let sizeFilter=document.getElementById("filterBySize");

let search=document.querySelector("#search");
 let addedToaFav=[];
// display products
let drawProducts;
(drawProducts= function displayProducts(products=[]){
    let productsUI=products.map((item)=>{
        console.log("ggg",item);
        return`
        <div class="product-item" style="border:${item.isMyProduct === "yes" ?  "2px solid green" : "" }  ">
        <div class="product-item-img">
        <img src="${item.imgUrl}" class="product-item-imgSrc"  alt="headphone">

        </div>

       
        <div class="product-item-desc">
            <a href="productDetails.html" onclick="saveId(${item.id})">${item.title}</a>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <span>size:${item.size}</span><br>
            ${item.isMyProduct=== "yes" ? "<button class='editProduct' onClick='editProductFunction("+ item.id+" )'>edit</button>" : ""} 
        </div>

        <div class="product-item-actions">
            <button class="add-to-cart" class="addToCart" onClick="addToCart(${item.id})">Add to cart</button>
            <i class="fa-regular fa-heart" style="color: ${item.liked== true ? "red" : ""}" onClick="addToFavorite(${item.id})"></i>
        </div>
        </div>

        `;
    })
    productsDom.innerHTML=productsUI.join("  ");
})(JSON.parse(localStorage.getItem("products")) || productsDatabase);// Immediatly invoked function  IIFE
 




// check is logged in
//AddToCart


function addToCart(id){
    if(localStorage.getItem("username")){
        let products=JSON.parse(localStorage.getItem("products")) || productsDatabase;
        let product=products.find((item)=> item.id === id);
        let isProductInCart= addedItems.some((i) => i.id === product.id) ;
        if(isProductInCart){  // if true
            addedItems.map(p =>{
                if(p.id == product.id) p.quantity +=1;
                return p;
            });
        }else{
            addedItems.push(product);
        }


        productsBox.innerHTML='';   // to avoid duplicate
        addedItems.forEach((item => {
            productsBox.innerHTML +=`<p>${item.title } ${item.quantity} </P>`;
        } 
        ))


        // addedItems=[...addedItems , product ];

        let unReapeatedProducts= getUniqueProduct(addedItems,"id");
        localStorage.setItem('productsItems' ,JSON.stringify(unReapeatedProducts));
        let cartProductsItems=document.querySelectorAll(".carts-products div p")
        badge.style.display="block";
        badge.innerHTML = cartProductsItems.length;
    }else{
        window.location="login.html";

    }


}


//insert product with the repeated number
 function getUniqueProduct(arr,filterType){
    let unique=arr
    .map((item)=>item[filterType])   //get indexes of added items 
    .map((item,index,finalArray)=>finalArray.indexOf(item) === index && index)
    .filter((item)=>arr[item])  //remove false
    .map((item)=>arr[item])
    ;
    
    return unique;
 }





function saveId(id){
    localStorage.setItem("id",id);
    window.location="productDetails.html";
}


//search

search.addEventListener("keyup" ,(e)=>{
let searchProduct=productsDatabase.filter((item)=>item.title.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) !== -1 );
drawProducts(searchProduct);

if(e.target.value.trim()==""){
    drawProducts(productsDatabase);

}
})


//add to favorite
function addToFavorite(id){
    if(localStorage.getItem("username")){
        let product=productsDatabase.find((item)=> item.id === id);
        product.liked=true; // add key=liked to product

        addedToaFav=[...addedToaFav , product ];

        let unReapeatedProducts= getUniqueProduct(addedToaFav,"id");
        localStorage.setItem('favoriteProducts' ,JSON.stringify(unReapeatedProducts));
        console.log(addedToaFav);

    
        productsDatabase.map((item)=>{
            if(item.id === product.id){
                item.liked=true;
            }    
        });

        localStorage.setItem('Products' ,JSON.stringify(productsDatabase));
        drawProducts(JSON.parse(localStorage.getItem("Products")) ||productsDatabase);

       
    }else{
        window.location="login.html";

    }


}


//filter function

sizeFilter.addEventListener("change",sizeFilterFunction);

function sizeFilterFunction(e){
    let choosenSizeFilter=e.target.value;
    let allData=JSON.parse(localStorage.getItem("products")) || productsDatabase;

    if(choosenSizeFilter === "all"){
        drawProducts(allData);
    }else{
        let filterdData= allData.filter((ele) => ele.size === choosenSizeFilter );
    
        drawProducts(filterdData);
    }
   

}

//edit function 

function editProductFunction(id){
    localStorage.setItem("editProductId",id);
    window.location.assign("editProduct.html");

}