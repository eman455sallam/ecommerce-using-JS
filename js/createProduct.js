let proTitle=document.getElementById("proTitle");
let proDesc=document.getElementById("proDesc");
let proSize=document.getElementById("proSize");
let proForm=document.getElementById("createForm");
let proSizeValue;
let proImage=document.getElementById("proImage");
let imageUrl;


proSize.addEventListener("change" ,sizeFunction);
proForm.addEventListener("submit" ,createFunction);
proImage.addEventListener("change" ,uploadProImageFunction);

//functions
function sizeFunction(e){
    proSizeValue=e.target.value;
// console.log(proSizeValue);
}

function createFunction(e){
 e.preventDefault();
    let allProducts=JSON.parse(localStorage.getItem("products")) || productsDatabase ;
    let titleValue=proTitle.value;
    let descValue="lorem lorem js product";


    if(titleValue && descValue && proSizeValue){

        let newProduct={
            id:allProducts? allProducts.length+1 :1,
            title:titleValue,
            desc:descValue,
            quantity:1,
            size:proSizeValue,
            imgUrl:imageUrl,
            isMyProduct: "yes",
    
        };
    
        let newProductObj=allProducts? [...allProducts,newProduct] :[newProduct];
    
        localStorage.setItem("products",JSON.stringify(newProductObj));
    
        proTitle.value=" ";
        proDesc.value=" ";
        proSize.value=" ";


        //redirect to home

        setTimeout(()=> {
            window.location.assign("index.html");
        },500);
    
    }else{
        alert("Enter values");
    }
   
    
}


//upload image
function uploadProImageFunction(){
    let file=this.files[0];  //this refers to files is default obj contains all files
    
    let types=["image/jpg" ,"image/png"];
    if( types.indexOf(file.type ) == -1){
        alert("this file not supported");
        return;
    }

    if(file.size > 2*1024*1024*1024){
        alert("this size not supported");
        return;
    }

    getImageBase64(file);
}


//convert image to base64 so can be  uploaded

function getImageBase64(file){
    let reader=new FileReader();

    reader.readAsDataURL(file);

    reader.onload=function(){

        imageUrl=reader.result;
    };

    reader.onerror=function(){

        alert("error");
    };
}