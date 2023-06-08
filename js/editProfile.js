let storedUserName=localStorage.getItem("username");
let storedUserEmail=localStorage.getItem("email");


let userNameContainer=document.getElementById("userInfoName");
let userEmailContainer=document.getElementById("userInfoEmail");
let userForm=document.getElementById("userForm");
let userImg=document.getElementById("userInfoImg");
let imageUrl;

userNameContainer.value=storedUserName;
userEmailContainer.value=storedUserEmail;



userForm.addEventListener("submit" ,updateFunction);

function updateFunction(e){
    storedUserName=userNameContainer.value;
    storedUserEmail=userEmailContainer.value;


    localStorage.setItem("username" ,storedUserName);
    localStorage.setItem("email" ,storedUserEmail);
    localStorage.setItem("userImgUrl",imageUrl);

    setTimeout(() =>{
        window.location.assign("index.html")
    },500);
}


userImg.addEventListener("change" ,uploadProImageFunction);

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
