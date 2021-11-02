const { granInfo } = require("./data/gran");
const { katInfo } = require("./data/katalina");
const { lanceInfo } = require("./data/lancelot");
const { formPopulate } = require("./scripts/data_populate");


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
  const openCSS = document.getElementById("select-btn"); // opencss = openCharacterSelectScreen
  openCSS.addEventListener("click", function(){
    charselect.style.display = "block";
  });

  const charIcons = document.getElementsByClassName("char");
  const charArr = [...charIcons];

  window.addEventListener("click", function(event){
    if (event.target === charselect){
      charselect.style.display = "none";
    }
    if (charArr.includes(event.target)){
      console.log("Test");
      charselect.style.display = "none";
    }
  })

});