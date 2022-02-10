var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var pass = document.getElementById("psw");
var pass_rep = document.getElementById("psw-repeat");

var form= document.getElementsByClassName(" regForm");


//var span= document.querySelectorAll("span");




function setCookie(key,value,date){
  var dayDate= new Date();
 if(key!="" && value!="" && date>=dayDate)
  document.cookie = key+"="+value+";expires="+date;
  else
   throw("Error");
}
function validation(){


  var  fnameValue=fname.value;
  var  lnameValue=lname.value;
  var inpvalEmail = email.value;
  var password=pass.value;
  var pass_repeat=pass_rep.value;
  var regMail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  var spn=document.getElementById("sp1");
  var spn2=document.getElementById("sp2");
  var spn3 = document.getElementById("sp3");
  var spn4 = document.getElementById("sp4");
  var spn5=document.getElementById("sp5");

  if(fnameValue =="")
    {
        // e.preventDefault();
        spn.textContent="* required";
        spn.style.display="inline";
       // fnameValue.focus();
       return false;
    }
    else if (isFinite(fnameValue)) {
        // e.preventDefault();
        spn.textContent = "* you must enter string value";
        spn.style.display = "inline";
       //  fnameValue.focus();
        return false;
    }
    else if(lnameValue ==""){
        // e.preventDefault();
          spn2.textContent="* required"
          spn2.style.display="inline";
       //    lnameValue.focus();
          return false;
         
    }
     else if (isFinite(lnameValue)) {
        // e.preventDefault();
          spn2.textContent = "you must enter string value";
          spn2.style.display = "inline";
       //   lnameValue.focus();
          return false;
      }
     else  if (inpvalEmail =="") {
        // e.preventDefault();
        spn3.textContent = "* required";
        spn3.style.display = "inline";
     // inpvalEmail.focus();
      return false;
    }
    else if (!regMail.test(inpvalEmail)) {
        // e.preventDefault();
        spn3.textContent = "* you must enter Right Email With @";
        spn3.style.display = "inline";
        return false;
    }
   else if (password =="")
    {
        // e.preventDefault();
        spn4.textContent ="* required";
        spn4.style.display = "inline";
      // password.focus();
       return false;
    }
   else if(pass_repeat =="")
    {
        // e.preventDefault();
        spn5.textContent="* required";
        spn5.style.display = "inline";
      //  pass_repeat.focus();
      return false;
    }
   else if(password != pass_repeat){
    // e.preventDefault();
        spn5.innerHTML="* Not Matched Password";
        spn5.style.display = "inline";
        return false;
    }
   else{
      setCookie("fname",fnameValue,new Date("2/1/2030"));
      setCookie("lname",lnameValue,new Date("2/1/2030"));
      setCookie("email",inpvalEmail,new Date("2/1/2030"));
      setCookie("password",password,new Date("2/1/2030"));
      setCookie("repeat-password",pass_repeat,new Date("2/1/2030"));
     window.location.replace("login.html");
    return true;
   }
  
}

  
 