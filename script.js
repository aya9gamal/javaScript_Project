const userName=document.getElementById("username");
const pasword=document.getElementById("userPassord");
const paswordCon=document.getElementById("conPassord");
const email=document.getElementById("email");
const male=document.getElementById("male");
const female=document.getElementById("female");
var name_error = document.getElementById('name_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');


function formValidation(){
    let name_value=userName.value;    
    if(name_value==""){
        userName.classList.add("incorrect");
           userName.focus();
        return false
    }
    if (name_value.length < 3) {
        userName.classList.add("incorrect");
        userName.focus();
        return false;
      }
      if (pasword.value == "") {
        pasword.classList.add("incorrect");
        pasword.focus();
        return false;
      }   
     if(pasword.value != paswordCon.value){
           pasword.classList.add("incorrect")
      paswordCon.classList.add("incorrect")
      return false  
    }

      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email_value=email.value;
        if (!email_value.match(regexEmail)) {
          email.classList.add("incorrect");
          email.focus();
          return false
       } 
     
    var gender_male=male.checked;
    var gender_fmale=female.checked;
       if(!(gender_fmale||gender_male)){
    alert("Please select your gender");
    return false;
}  

}

function vaild_name(){
  
    let name_value=userName.value;    
    if(name_value !=""){
        userName.classList.add("correct");
        sessionStorage.setItem('Username',name_value)
       
        return true
    }   
}
function validateEmail ()
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email_value=email.value;
  if (email_value.match(regexEmail)) {
    email.classList.add("correct");
    sessionStorage.setItem("email",email_value);
    return true
 }
 }

 function matchPassword() {  
   
      if( (pasword.value !="") && (pasword.value==paswordCon.value)){
        pasword.classList.add("correct")
        sessionStorage.setItem("Password",pasword.value)  
      return true
       }
      
  // if(pasword.value==paswordCon.value){
  //       pasword.classList.add("correct")
  //     paswordCon.classList.add("correct")  
  //     sessionStorage.setItem("Password",pasword.value)  
  //     return true
  //   }
  } 
  function vaild_gender(){
        // e.preventDefault();
        var gender_male=male.checked;
        var gender_fmale=female.checked;
       if(gender_fmale||gender_male){
         sessionStorage.setItem("male",gender_fmale)
         sessionStorage.setItem("female",gender_male);
      return true;
   } 
 }
 document.getElementById("cancel").addEventListener("click",()=>{
     window.close();
 })
document.getElementById("ok").addEventListener("click",()=>{
  vaild_name();
  validateEmail ();
  matchPassword();
  vaild_gender();
})
sessionStorage.clear();   