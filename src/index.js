const { granInfo } = require("./data/gran");
const { katInfo } = require("./data/katalina");
const { lanceInfo } = require("./data/lancelot");
const { formPopulate } = require("./scripts/data_populate");
const { modalPopulate } = require("./scripts/modal_populate");


document.addEventListener("DOMContentLoaded", () => {
  // form populate scripts
  const gran = document.getElementById('gran-select');
  gran.addEventListener('click', function() { 
    formPopulate(granInfo) 
  }, false);

  const kat = document.getElementById('kat-select');
  kat.addEventListener('click', function() { 
    formPopulate(katInfo) 
  }, false);

  const lance = document.getElementById('lance-select');
  lance.addEventListener('click', function() { 
    formPopulate(lanceInfo) 
  }, false);

  // event listeners for sandwich bar
  const sandwichIcon = document.getElementById("sandwich-icon");
  sandwichIcon.addEventListener("click", function(){
    document.getElementById("sandwich").style.width = "250px";
    document.getElementById("char-body").style.marginLeft = "250px";
  });
  const closeIcon = document.getElementById("close-btn");
  closeIcon.addEventListener("click", function(){
    document.getElementById("sandwich").style.width = "0";
    document.getElementById("char-body").style.marginLeft = "0";
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

  const movemodal = document.getElementsByClassName("move-modal")[0].parentNode
  const charIcons = document.getElementsByClassName("char");
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
    if (event.target.getAttribute("class") === "cell"){ //if a move line was clicked
      const moveArr = event.target.parentNode.dataset.moveid;
      const charName = event.target.parentNode.dataset.char;
      if (moveArr !== "sticky-row" && moveArr){
        movemodal.style.display = "block";
        if (charName === 'Gran'){
          modalPopulate(granInfo[moveArr]);
        }
        if (charName === 'Katalina'){
          modalPopulate(katInfo[moveArr]);
        }
        if (charName === 'Lancelot'){
          modalPopulate(lanceInfo[moveArr]);
        }
        if (charName === 'ABel'){

        }
        if (charName === 'Belial'){

        }
        if (charName === 'Charlotta'){

        }
        if (charName === 'Narmaya'){

        }
        if (charName === 'Vira'){

        }
        if (charName === 'Percival'){

        }
        if (charName === 'Beelzebub'){
          
        }
      }
    }
    // if ()
  })
});