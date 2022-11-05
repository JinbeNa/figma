function dropDown() {
  document.querySelector(".list__menu__box").classList.toggle("list__menu__box__show");
}

function myFunction() {
  document.querySelector(".header").classList.toggle("header__off");
  document.getElementById("modal__box").style.display = "flex";
  document.querySelector("body").classList.toggle("body__hidden");
  document.getElementById("Sigin").style.display = "none";
  document.getElementById("Login").style.display = "block";
} 

function myModal() {
  document.getElementById("modal__box").style.display = "none";
  document.querySelector("body").classList.toggle("body__hidden");
  document.querySelector(".header").classList.toggle("header__off");
} 

function mySigin() {
  document.getElementById("modal__box").style.display = "flex";
  document.getElementById("Login").style.display = "none";
  document.getElementById("Sigin").style.display = "block";
  document.querySelector("body").classList.toggle("body__hidden");
  document.querySelector(".header").classList.toggle("header__off");
} 

function btnBack() {
  document.getElementById("modal__box").style.display = "none";
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function validateForm(){

  var z = document.forms["myForm"]["num"].value;

  if(!/^[0-9]+$/.test(z)){
    alert("Please only enter numeric characters only for your Age! (Allowed input:0-9)")
  }

}
