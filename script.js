
// Pirmas užkrovimas
var tabs = document.getElementsByClassName("tabcontent")
    for(var tab of tabs){
        tab.style.display = "none"
}

// Funkcija 
function openTab(evt, features) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    // Paslepia tabcontent
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");

    // Nuima nuo tablinks active klase
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Parodo tab content pagal ID
    document.getElementById(features).style.display = "block";
  }

  //Timeout transition
document.addEventListener(function(){
    var galerijaTab = document.getElementById("galerija");

    setTimeout(function () {
        galerijaTab.classList.add("delayed-transition");
    }, 1000); 
});
