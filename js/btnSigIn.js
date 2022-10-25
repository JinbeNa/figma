function dropDown() {
  document.querySelector(".list__menu__box").classList.toggle("list__menu__box__show");
}

function myFunction() {
  document.getElementById("modal__box").style.display = "flex";
  document.getElementById("Sigin").style.display = "none";
  document.getElementById("Login").style.display = "block";
} 

function myModal() {
  document.getElementById("modal__box").style.display = "none";
} 

function mySigin() {
  document.getElementById("modal__box").style.display = "flex";
  document.getElementById("Login").style.display = "none";
  document.getElementById("Sigin").style.display = "block";
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
