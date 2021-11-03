const { granInfo } = require("./data/gran");
const { katInfo } = require("./data/katalina");
const { lanceInfo } = require("./data/lancelot");
const { formPopulate } = require("./scripts/data_populate");
const { modalPopulate } = require("./scripts/modal_populate");


document.addEventListener("DOMContentLoaded", () => {
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
  openCSS.addEventListener("click", function(){
    charselect.style.display = "block";
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
      charselect.style.display = "none";
        document.getElementById("sandwich").style.width = "0";
        document.getElementById("char-body").style.marginLeft = "0";
    }
    if (event.target.getAttribute("class") === "cell"){ //if a move line was clicked
      const moveArr = event.target.parentNode.dataset.moveid;
      const charName = event.target.parentNode.dataset.char;
      if (moveArr !== "sticky-row" && moveArr){
        // console.log(granInfo[moveArr]);
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
      }
    }
    // if ()
  })
});