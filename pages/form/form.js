function nameValidation() {
    let fname = document.getElementById("fname").value;
    let format = /^[A-Za-z]+$/g;
    if(fname != '') {    
      if( !fname.match(format)){
        document.getElementById("fname-error").innerHTML = "Name must contain only letters";
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
    } else {
      document.getElementById("fname-error").innerHTML = "You can't leave this field empty";
      document.getElementById("fname").style.border = "2px solid #fd9207";
    }
}

function surnameValidation() {
    let surname = document.getElementById("surname").value;
    let format = /^[A-Za-z]+$/g;
    if(surname != '') {    
      if( !surname.match(format)){
        document.getElementById("surname-error").innerHTML = "Surname must contain only letters";
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
    } else {
      document.getElementById("surname-error").innerHTML = "You can't leave this field empty";
      document.getElementById("surname").style.border = "2px solid #fd9207";
    }
}

//date validation
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0') ;
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' +(+dd + 1);
document.getElementById("date").setAttribute('min',today);


function streetValidation() {
    let street = document.getElementById("street").value;
    let format = /^[0-9a-zA-Z.-\s]+$/;
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
    } else {
      document.getElementById("street-error").innerHTML = "You can't leave this field empty";
      document.getElementById("street").style.border = "2px solid #fd9207";
    }
}

function houseValidation() {
    let house = document.getElementById("house").value;
    let format = /^[1-9]+[0-9]*$/;
    if(house != '') {    
        if( !house.match(format)){
          document.getElementById("house-error").innerHTML = "You can use only positive numbers";
          document.getElementById("house").style.border = "2px solid #fd9207";
          return false;
        }else{
          document.getElementById("house-error").innerHTML = "";
          document.getElementById("house").style.border = "none";
          return true;
        }
    } else {
      document.getElementById("house-error").innerHTML = "You can't leave this field empty";
      document.getElementById("house").style.border = "2px solid #fd9207";
    }
}

function flatValidation() {
    let flat = document.getElementById("flat").value;
    let format = /^[1-9]+[-0-9–]*$/;
    if(flat != '') {    
        if( !flat.match(format)){
          document.getElementById("flat-error").innerHTML = "You can't use such symbols";
          document.getElementById("flat").style.border = "2px solid #fd9207";
          return false;
        }else{
          document.getElementById("flat-error").innerHTML = "";
          document.getElementById("flat").style.border = "none";
          return true;
        }
    } else {
      document.getElementById("flat-error").innerHTML = "You can't leave this field empty";
      document.getElementById("flat").style.border = "2px solid #fd9207";
    }
}

//restrict checkbox
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

//check if any input field is empty. disable/enable submit button
document.getElementById('submit').disabled = true;

function validateForm() {
  let a = document.forms["myForm"]["fname"].value;
  let b = document.forms["myForm"]["surname"].value;
  let c = document.forms["myForm"]["date"].value;
  let d = document.forms["myForm"]["street"].value;
  let e = document.forms["myForm"]["house"].value;
  let f = document.forms["myForm"]["flat"].value;
  let g = document.forms["myForm"]["payment"].value;

  let list = [a,b,c,d,e,f,g]; 
  if(list.every(elem => elem != "")) {
    document.getElementById('submit').disabled = false;
    document.getElementById('submit').classList = "submit-style";
  }
}

// summarize information
function summarizeInfo(event) {
  event.preventDefault();

  let fname = document.getElementById("fname").value;
  let surname = document.getElementById("surname").value;
  let date = document.getElementById("date").value;
  let street = document.getElementById("street").value;
  let house = document.getElementById("house").value;
  let flat = document.getElementById("flat").value;
  let payment = document.querySelector("input[type='radio']:checked").value;
  let gifts = document.querySelectorAll("input[type='checkbox']:checked");
  let summaryInfo = document.getElementById("summaryInfo");
  let backToMain = document.getElementById("backToMain");

  let info = ` <h2 style="color:#fd9207; text-align:center;"> Congrats! Your Order has been confirmed </h2>
  Hi ${fname} ${surname}, <br><br> We will deliver your order at Str.${street}, house N${house}, flat N${flat} on ${date}. <br> <br>
  Your Payment method is: ${payment} <br> <br>`;

  if (gifts.length == 2) {
      info += `You choosed for gifts: ${gifts[0].value} and ${gifts[1].value} <br><br>
      Thank you ${fname}, visit us again! <br> <br>
      Enjoy the reading!!`;
  } else if (gifts.length == 1) {
      info += `You choosed for gift: ${gifts[0].value}! <br><br>
      Thank you ${fname}, visit us again! <br> <br>
      Enjoy the reading!!`;
  } else {
      info += `Thank you ${fname}, visit us again! <br><br> Enjoy the reading!!`;
  }

  document.getElementById("myForm").style.display = "none";
  summaryInfo.innerHTML = info;
  summaryInfo.classList = "summaryInfo-style"; 
  backToMain.innerHTML = `<a href="../main/index.html">Main Page</a>`;
  backToMain.classList = "backToMain-style"; 
}
