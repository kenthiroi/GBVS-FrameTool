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
 
  var header = document.getElementById("header-nav");
  var sticky = header.offsetTop;

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky");
    }
  }
  window.addEventListener("scroll", function() {stickyNav()});

  const charselect = document.getElementsByClassName("char-select")[0];
  // const 

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
    }
    if (charArr.includes(event.target)){ 
      charselect.style.display = "none";
    }
    if (event.target.getAttribute("class") === "cell"){ //if a move line was clicked
      const moveArr = event.target.parentNode.getAttribute("id");
      if (moveArr !== "sticky-row" && moveArr){
        console.log(granInfo[moveArr]);
        movemodal.style.display = "block";
        modalPopulate(granInfo[moveArr]);
      }
    }
  })

});