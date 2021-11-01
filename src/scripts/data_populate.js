export function formPopulate(charData) {
  console.log("test");
  document.getElementById("char-name").textContent = charData[0]['char'];
  document.getElementById("char-health").textContent = `Health: ${charData[0]['health']}`;
  document.getElementById("char-backdash").textContent = `Backdash: ${charData[0]['backdash']}`;

  const nameCol = document.getElementById('move-name');
  console.log(nameCol);
  const damageCol = document.getElementById("damage");
  const guardCol = document.getElementById("guard");
  const startupCol = document.getElementById("startup");
  const activeCol = document.getElementById("active");
  const recoveryCol = document.getElementById("recovery");
  const onblockCol = document.getElementById("onblock");
  const onhitCol = document.getElementById("onhit");

  for (let i = 1; i < charData.length; i++) {
    nameCol.appendChild(document.createElement("LI").textContent = charData[i]['moveName']);
    damageCol.appendChild(document.createElement("LI").textContent = charData[i]['damage']);
    guardCol.appendChild(document.createElement("LI").textContent = charData[i]['guard']);
    startupCol.appendChild(document.createElement("LI").textContent = charData[i]['startup']);
    activeCol.appendChild(document.createElement("LI").textContent = charData[i]['active']);
    recoveryCol.appendChild(document.createElement("LI").textContent = charData[i]['recovery']);
    onblockCol.appendChild(document.createElement("LI").textContent = charData[i]['onblock']);
    onhitCol.appendChild(document.createElement("LI").textContent = charData[i]['onhit']);
  }
}

// Take an array of all the move data(constance files). ULs will act as columns
// Append List elements into the UL containers each time for each column. 
// Have a way to parse the code