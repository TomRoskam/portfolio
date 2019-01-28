var done = document.getElementById("done");
var result = document.getElementById("result");

done.addEventListener("click", addColorGreen);
clear.addEventListener("click", addColorRed);
undo.addEventListener("click", removeColors);

function addColorGreen() {
  console.log("GREEN");
  result.classList.add("doneGreen");
  result.innerHTML = "07.50"

  result.classList.remove("clearRed");
}

function addColorRed() {
    console.log("RED");
    result.classList.add("clearRed");
    result.innerHTML = "00.00";

    result.classList.remove("doneGreen");
}

function removeColors() {
    console.log("DELETE");
    result.classList.remove("doneGreen");
    result.classList.remove("clearRed");

    result.innerHTML = "";
}

/*
    Wanneer icon ingedrukt is wordt functie uitgevoerd. Ieder icon moet eigen variabele meegeven zodat er geen enorm lange code geschreven hoeft te worden.
    Misschien varabele in HTML meegeven zodat die gelijk in JS gebruikt kan waorden als dit mogelijk is.

    zorgen dat dingen opgeslagen kunnen worden zodat niet iedere keer icon angelklikd moet worden.


    MALLETJE SCHRIJVEN ZODAT CODE GEREDUCEERD WORDT!
*/