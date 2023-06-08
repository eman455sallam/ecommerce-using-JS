let cartProducts=JSON.parse(localStorage.getItem("productsDatabase")) ;
let id=localStorage.getItem("id");
let detailsDom=document.querySelector(".productDetails");

let filterdProduct=cartProducts.find((item)=>item.id == id);
console.log(filterdProduct);


detailsDom.innerHTML=
` 
                    <img src="${filterdProduct.imgUrl}" alt="">
                <div class="productDetails-desc">
                    <h2>${filterdProduct.title}</h2>
                    <p>${filterdProduct.desc} </p>
                    <p>${filterdProduct.size}</p><br>
                    <p>${filterdProduct.quantity}</p>
                </div>
                

            `;

