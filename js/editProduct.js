let allProducts=JSON.parse(localStorage.getItem("products"));
let editProductId=JSON.parse(localStorage.getItem("editProductId"));
let editProductObj=allProducts.find((ele) => ele.id == editProductId);





let proTitle=document.getElementById("proTitle");
let proDesc=document.getElementById("proDesc");
let proSize=document.getElementById("proSize");
let proForm=document.getElementById("editForm");
let proSizeValue;
let proImage=document.getElementById("proImage");
let imageUrl;


 proTitle.value=editProductObj.title;
proDesc.value=editProductObj.desc;
proSize.value=editProductObj.size;
imageUrl=editProductObj.imgUrl;


proSize.addEventListener("change" ,sizeFunction);
proForm.addEventListener("submit" ,updateFunction);
proImage.addEventListener("change" ,uploadProImageFunction);

// //functions
function sizeFunction(e){
    proSizeValue=e.target.value;
// console.log(proSizeValue);
}

function updateFunction(e){
 e.preventDefault();
    


editProductObj.title=proTitle.value;
editProductObj.desc=proDesc.value;
editProductObj.size=proSize.value;
editProductObj.imgUrl=imageUrl;


localStorage.setItem("products",JSON.stringify(allProducts));
    
setTimeout(() =>{
    window.location.assign("index.html")
},500);
    
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