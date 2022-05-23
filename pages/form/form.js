function nameValidation() {
    let fname = document.getElementById("fname").value;
    let format = /^[A-Za-z]+$/g;
    if(fname != '') {    
      if( !fname.match(format)){
        document.getElementById("fname-error").innerHTML = "Name must not contain any numbers";
        document.getElementById("fname").style.border = "2px solid #fd9207";
        return false;
      }else if (fname.length < 4){
        document.getElementById("fname-error").innerHTML = "Name must contain at least 4 characters";
        document.getElementById("fname").style.border = "2px solid #fd9207";
        return false;
      }else{
        document.getElementById("fname-error").innerHTML = "";
        document.getElementById("fname").style.border = "none";
        return true;
      }
    }
}

function surnameValidation() {
    let surname = document.getElementById("surname").value;
    let format = /^[A-Za-z]+$/g;
    if(surname != '') {    
      if( !surname.match(format)){
        document.getElementById("surname-error").innerHTML = "Surname must not contain any numbers";
        document.getElementById("surname").style.border = "2px solid #fd9207";
        return false;
      }else if (surname.length < 5){
        document.getElementById("surname-error").innerHTML = "Surame must contain at least 5 characters";
        document.getElementById("surname").style.border = "2px solid #fd9207";
        return false;
      }else{
        document.getElementById("surname-error").innerHTML = "";
        document.getElementById("surname").style.border = "none";
        return true;
      }
    }
}

function streetValidation() {
    let street = document.getElementById("street").value;
    let format = /^[0-9a-zA-Z]+$/;
    if(street != '') {    
      if( !street.match(format)){
        document.getElementById("street-error").innerHTML = "You can't use such symbols";
        document.getElementById("street").style.border = "2px solid #fd9207";
        return false;
      }else if (street.length < 5){
        document.getElementById("street-error").innerHTML = "Street must contain at least 5 characters";
        document.getElementById("street").style.border = "2px solid #fd9207";
        return false;
      }else{
        document.getElementById("street-error").innerHTML = "";
        document.getElementById("street").style.border = "none";
        return true;
      }
    }
}

function houseValidation() {
    let house = document.getElementById("house").value;
    let format = /^[1-9]+[0-9]*$/;
    if(house != '') {    
        if( !house.match(format)){
          document.getElementById("house-error").innerHTML = "You can't use negative numbers";
          document.getElementById("house").style.border = "2px solid #fd9207";
          return false;
        }else{
          document.getElementById("house-error").innerHTML = "";
          document.getElementById("house").style.border = "none";
          return true;
        }
    }
}

function flatValidation() {
    let flat = document.getElementById("flat").value;
    let format = /^[1-9–]+[-0-9–]*$/;
    if(flat != '') {    
        if( !flat.match(format)){
          document.getElementById("flat-error").innerHTML = "You can't such symbols";
          document.getElementById("flat").style.border = "2px solid #fd9207";
          return false;
        }else{
          document.getElementById("flat-error").innerHTML = "";
          document.getElementById("flat").style.border = "none";
          return true;
        }
    }
}

var checks = document.querySelectorAll(".checked");
var max = 2;
for (var i = 0; i < checks.length; i++) 
  checks[i].onclick = selectiveCheck;


function selectiveCheck (event) {
  var checkedChecks = document.querySelectorAll(".checked:checked");
  if (checkedChecks.length >= max + 1) {
    document.getElementById("checkbox-error").innerHTML = "Check only 2 items";
    return false;
  }
  document.getElementById("checkbox-error").innerHTML = "";
}
