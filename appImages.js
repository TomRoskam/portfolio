var music = document.getElementById("musicTxt");
var cars = document.getElementById("carsTxt");
var hobby = document.getElementById("hobbyTxt");

music.addEventListener("click", addMusicImages);
cars.addEventListener("click", addCarImages);
hobby.addEventListener("click", addHobbyImages);

function addMusicImages() {
  console.log("css added");
  document.getElementById("background1").classList.add("imagineDragons");
  document.getElementById("background2").classList.add("marshmello");
  document.getElementById("background3").classList.add("postMalone");

  document.getElementById("background1").classList.remove("bronco");
  document.getElementById("background2").classList.remove("mustang");
  document.getElementById("background3").classList.remove("shelby");

  document.getElementById("background1").classList.remove("drum");
  document.getElementById("background2").classList.remove("spotify");
  document.getElementById("background3").classList.remove("phones");
}

function addCarImages() {
  document.getElementById("background1").classList.add("bronco");
  document.getElementById("background2").classList.add("mustang");
  document.getElementById("background3").classList.add("shelby");

  document.getElementById("background1").classList.remove("imagineDragons");
  document.getElementById("background2").classList.remove("marshmello");
  document.getElementById("background3").classList.remove("postMalone");

  document.getElementById("background1").classList.remove("drum");
  document.getElementById("background2").classList.remove("spotify");
  document.getElementById("background3").classList.remove("phones");
}

function addHobbyImages() {
  document.getElementById("background1").classList.add("drum");
  document.getElementById("background2").classList.add("spotify");
  document.getElementById("background3").classList.add("phones");

  document.getElementById("background1").classList.remove("imagineDragons");
  document.getElementById("background2").classList.remove("marshmello");
  document.getElementById("background3").classList.remove("postMalone");

  document.getElementById("background1").classList.remove("bronco");
  document.getElementById("background2").classList.remove("mustang");
  document.getElementById("background3").classList.remove("shelby");
}


/*
  NU: afbeelding in geladen in een div wanneer op de knop wordt gedrukt. CSS wordt toegevoegd.
  MOGELIJK LATER: afbeelding via JS inladen, opmaak div in CSS laten. Hierdoor animatie misschien mogelijk.


  IDEE: images pre-loaden zodat je minder laad tijd hebt wanneer interesses worden bekeken.
*/
