function login(){
    

 var uno = document.getElementById('loginId');
 if (uno.innerText == 'Login') 
         uno.innerText = 'Logout';
 else uno.innerText = 'Login'

}

function hide(){
    document.getElementById('addDef').style.visibility='hidden';
}
function message() {
 alert("ninja was liked")
}