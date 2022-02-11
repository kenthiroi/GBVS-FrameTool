const { formPopulate } = require("./data_populate");
const { modalPopulate } = require("./modal_populate");
const { aBelialInfo } = require("../data/abelial");
const { bubzInfo } = require("../data/beelzebub")
const { belialInfo } = require("../data/belial");
const { cagliostroInfo } = require("../data/cagliostro");
const { charlottaInfo } = require("../data/charlotta");
const { djeetaInfo } = require("../data/djeeta");
const { eustaceInfo } = require("../data/eustace");
const { fastivaInfo } = require("../data/fastiva");
const { ferryInfo } = require("../data/ferry");
const { granInfo } = require("../data/gran");
const { katInfo } = require("../data/katalina");
const { lanceInfo } = require("../data/lancelot");
const { lowainInfo } = require("../data/lowain");
const { meteraInfo } = require("../data/metera");
const { narmayaInfo } = require("../data/narmaya");
const { percivalInfo } = require("../data/percival");
const { sixInfo } = require("../data/six");
const { sorizInfo } = require("../data/soriz");
const { unoInfo } = require("../data/uno");
const { vaseragaInfo } = require("../data/vaseraga");
const { viraInfo } = require("../data/vira");
const { yuelInfo } = require("../data/yuel");
const { zetaInfo } = require("../data/zeta");
const { zooeyInfo } = require("../data/zooey");

export function characterSelectEventListeners() {

  const abel = document.getElementById('abel-select');
  abel.addEventListener('click', function() { 
    formPopulate(aBelialInfo) 
  }, false);

  const bubz = document.getElementById('bubz-select');
  bubz.addEventListener('click', function() {
    formPopulate(bubzInfo)
  })

  const bel = document.getElementById('bel-select');
  bel.addEventListener('click', function() { 
    formPopulate(belialInfo) 
  }, false);

  const cag = document.getElementById('cag-select');
  cag.addEventListener('click', function() {
    formPopulate(cagliostroInfo)
  })
  
  const charlotta = document.getElementById('char-select');
  charlotta.addEventListener('click', function() { 
    formPopulate(charlottaInfo) 
  }, false);

  const djeeta = document.getElementById('djeeta-select');
  djeeta.addEventListener('click', function() { 
    formPopulate(djeetaInfo) 
  }, false);

  const eustace = document.getElementById('eustace-select');
  eustace.addEventListener('click', function() { 
    formPopulate(eustaceInfo) 
  }, false);

  const ladiva = document.getElementById('ladiva-select');
  ladiva.addEventListener('click', function() { 
    formPopulate(fastivaInfo)
  }, false);

  const ferry = document.getElementById('ferry-select');
  ferry.addEventListener('click', function() { 
    formPopulate(ferryInfo) 
  }, false);
  
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

  const lowain = document.getElementById('lowain-select');
  lowain.addEventListener('click', function() { 
    formPopulate(lowainInfo) 
  }, false);

  const metera = document.getElementById('metera-select');
  metera.addEventListener('click', function() { 
    formPopulate(meteraInfo) 
  }, false);
  
  const narmaya = document.getElementById('narmaya-select');
  narmaya.addEventListener('click', function() { 
    formPopulate(narmayaInfo) 
  }, false);

  const percy = document.getElementById('percy-select');
  percy.addEventListener('click', function() { 
    formPopulate(percivalInfo) 
  }, false);

  const six = document.getElementById('six-select');
  six.addEventListener('click', function() { 
    formPopulate(sixInfo) 
  }, false);
  
  const soriz = document.getElementById('soriz-select');
  soriz.addEventListener('click', function() { 
    formPopulate(sorizInfo) 
  }, false);
  
  const uno = document.getElementById('uno-select');
  uno.addEventListener('click', function() { 
    formPopulate(unoInfo) 
  }, false);
  
  const vaseraga = document.getElementById('vaseraga-select');
  vaseraga.addEventListener('click', function() { 
    formPopulate(vaseragaInfo) 
  }, false);
  
  const vira = document.getElementById('vira-select');
  vira.addEventListener('click', function() { 
    formPopulate(viraInfo) 
  }, false);
  
  const yuel = document.getElementById('yuel-select');
  yuel.addEventListener('click', function() { 
    formPopulate(yuelInfo) 
  }, false);

  const zeta = document.getElementById('zeta-select');
  zeta.addEventListener('click', function() { 
    formPopulate(zetaInfo) 
  }, false);

  const zooey = document.getElementById('zooey-select');
  zooey.addEventListener('click', function() { 
    formPopulate(zooeyInfo) 
  }, false);
}

export function moveSelectEventListeners() {
  window.addEventListener("click", function(event){
    if (event.target.getAttribute("class") === "cell"){ //if a move line was clicked
      const moveIdx = event.target.parentNode.dataset.moveid;
      const charName = event.target.parentNode.dataset.char;
      if (moveIdx !== "sticky-row" && moveIdx){
        movemodal.style.display = "block";
        switch (charName){
        case ('ABel'):
          modalPopulate(aBelialInfo[moveIdx]);
        case ('Beelzebub'):
          modalPopulate(bubzInfo[moveIdx]);
        case ('Belial'):
          modalPopulate(belialInfo[moveIdx]);
        case ('Cagliostro'):
          modalPopulate(cagliostroInfo[moveIdx]);
        case ('Charlotta'):
          modalPopulate(charlottaInfo[moveIdx]);
        case ('Djeeta'):
          modalPopulate(djeetaInfo[moveIdx]);
        case ('Eustace'):
          modalPopulate(eustaceInfo[moveIdx]);
        case ('Ladiva'):
          modalPopulate(fastivaInfo[moveIdx]);
        case ('Ferry'):
          modalPopulate(ferryInfo[moveIdx]);
        case ('Gran'):
          modalPopulate(granInfo[moveIdx]);
        case ('Katalina'):
          modalPopulate(katInfo[moveIdx]);
        case ('Lancelot'):
          modalPopulate(lanceInfo[moveIdx]);
        case ('Lowain'):
          modalPopulate(lowainInfo[moveIdx]);
        case ('Metera'):
          modalPopulate(meteraInfo[moveIdx]);
        case ('Narmaya'):
          modalPopulate(narmayaInfo[moveIdx]);  
        case ('Percival'):
          modalPopulate(percivalInfo[moveIdx]);
        case ('Seox'):
          modalPopulate(sixInfo[moveIdx]);
        case ('Soriz'):
          modalPopulate(sorizInfo[moveIdx]);
        case ('Uno'):
          modalPopulate(unoInfo[moveIdx]);
        case ('Vaseraga'):
          modalPopulate(vaseragaInfo[moveIdx]);
        case ('Vira'):
          modalPopulate(viraInfo[moveIdx]);
        case ('Yuel'):
          modalPopulate(yuelInfo[moveIdx]);
        case ('Zeta'):
          modalPopulate(zetaInfo[moveIdx]);
        case ('Zooey'):
          modalPopulate(zooeyInfo[moveIdx]);
      }
    }
  }
  })
}