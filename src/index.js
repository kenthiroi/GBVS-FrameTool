const { characterSelectEventListeners, moveSelectEventListeners } = require("./scripts/event_listeners");

document.addEventListener("DOMContentLoaded", () => {
  // form populate scripts
  characterSelectEventListeners();
  moveSelectEventListeners();

  // event listeners for sandwich bar
  const sandwichIcon = document.getElementById("sandwich-icon");
  sandwichIcon.addEventListener("click", function(){
    document.getElementById("sandwich").style.width = "250px";
    // document.getElementById("char-body").style.marginLeft = "250px";
  });
  const closeIcon = document.getElementById("close-btn");
  closeIcon.addEventListener("click", function(){
    document.getElementById("sandwich").style.width = "0";
    // document.getElementById("char-body").style.marginLeft = "0";
  })

  const charselect = document.getElementsByClassName("char-select")[0];

  const openCSS = document.getElementById("select-btn"); // opencss = openCharacterSelectScreen

  // const aboutPg = document.getElementById("about"); // opencss = openCharacterSelectScreen
  const glossaryBtn = document.getElementById("glossary-btn");
  const glossaryDiv = document.getElementById("glossary");
  const aboutBtn = document.getElementById("about-btn");
  const aboutDiv = document.getElementById("about");
  const homeDiv = document.getElementById("homepage");
  const charInfoDiv = document.getElementById("char-info");
  openCSS.addEventListener("click", function(){
    charselect.style.display = "block";
  });
  
  glossaryBtn.addEventListener("click", function(){
    homeDiv.style.display = "none";
    charselect.style.display = "none";
    glossaryDiv.style.display = "block";
    aboutDiv.style.display = "none";
    charInfoDiv.style.display = "none";
    document.getElementById("sandwich").style.width = "0";
    document.getElementById("char-body").style.marginLeft = "0";
  });

  aboutBtn.addEventListener("click", function(){
    homeDiv.style.display = "none";
    charselect.style.display = "none";
    glossaryDiv.style.display = "none";
    aboutDiv.style.display = "block";
    charInfoDiv.style.display = "none";
    document.getElementById("sandwich").style.width = "0";
    document.getElementById("char-body").style.marginLeft = "0";
  });

  const charIcons = document.getElementsByClassName("char-icon");
  const charArr = [...charIcons];

  window.addEventListener("click", function(event){
    console.log(event.target.getAttribute("class"));
    if (event.target.getAttribute("class") === 'char-select'){ //click outside the modal, AKA the bg
      event.target.style.display = "none";
      document.getElementById("sandwich").style.width = "0";
      document.getElementById("char-body").style.marginLeft = "0";
    }
    if (charArr.includes(event.target)){ 
      homeDiv.style.display = "none";
      charselect.style.display = "none";
      glossaryDiv.style.display = "none";
      aboutDiv.style.display = "none";
      charInfoDiv.style.display = "block";
      document.getElementById("sandwich").style.width = "0";
      document.getElementById("char-body").style.marginLeft = "0";
    }
  })
});