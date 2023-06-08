

let username=document.querySelector("#username");
let password=document.querySelector("#password");

let login_btn=document.querySelector("#signin");

let getUsername=localStorage.getItem("username");
let getPassword=localStorage.getItem("password");

login_btn.addEventListener('click',function(e){
    e.preventDefault();
if(username.value==="" || password.value===""){
    alert("enter all");
}else{
    if(getUsername && username.value.trim()==getUsername && getPassword && password.value.trim()==getPassword){
        
        setTimeout(()=>{
            window.location="index.html";
        },2000);
    }else{
        alert("wrong");

    }
}
})