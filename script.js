function matchPwd(){  
  let pw1 = document.getElementById("password")
  let pw2 = document.getElementById("confirm_password")
  if(pw2.innerText != pw1.innerHTML){
    alert("Passwords did not match")
  }
}