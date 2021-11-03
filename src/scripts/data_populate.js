export function formPopulate(charData) {
  // console.log("formPopulate");
  document.getElementById("char-name").textContent = charData[0]['char'];
  document.getElementById("char-img").src = `../../assets/imgs/character/GBVS_${charData[0]['char']}.png`
  document.getElementById("char-health").textContent = `Health: ${charData[0]['health']}`;
  document.getElementById("char-backdash").textContent = `Backdash: ${charData[0]['backdash']}`;

  const moveList = document.getElementById('char-movelist');
  moveList.innerHTML = '';

  const stickyLine = document.createElement("Div");
  stickyLine.innerHTML = '<span class="cell">Move Name</span><span class="cell">Damage</span><span class="cell">Guard Point</span><span class="cell">Startup</span><span class="cell">Active</span><span class="cell">Recovery</span><span class="cell">On Block</span><span class="cell">On Hit</span>';
  stickyLine.setAttribute("class", "move-row");
  stickyLine.setAttribute("id", "sticky-row");

  moveList.appendChild(stickyLine);
  for (let i = 1; i < charData.length; i++) {
    const moveLine = document.createElement("Div");
    moveLine.setAttribute("class", "move-row");

    const moveName = document.createElement("Span");
    moveName.setAttribute("class", "cell");
    moveName.textContent = charData[i]['moveName'];
    moveLine.appendChild(moveName);

    const damage = document.createElement("Span");
    damage.setAttribute("class", "cell");
    damage.textContent = charData[i]['damage'];
    moveLine.appendChild(damage);

    const guard = document.createElement("Span");
    guard.setAttribute("class", "cell");
    guard.textContent = charData[i]['guard'];
    moveLine.appendChild(guard);

    const startup = document.createElement("Span");
    startup.setAttribute("class", "cell");
    startup.textContent = charData[i]['startup'];
    moveLine.appendChild(startup);

    const active = document.createElement("Span");
    active.setAttribute("class", "cell");
    active.textContent = charData[i]['active'];
    moveLine.appendChild(active);

    const recovery = document.createElement("Span");
    recovery.setAttribute("class", "cell");
    recovery.textContent = charData[i]['recovery'];
    moveLine.appendChild(recovery);

    const onblock = document.createElement("Span");
    onblock.setAttribute("class", "cell");
    onblock.textContent = charData[i]['onblock'];
    moveLine.appendChild(onblock);

    const onhit = document.createElement("Span");
    onhit.setAttribute("class", "cell");
    onhit.textContent = charData[i]['onhit'];
    moveLine.appendChild(onhit);

    moveLine.setAttribute("data-moveid", `${i}`)
    moveLine.setAttribute("data-char", `${charData[0]['char']}`)
    // moveLine.addEventListener("click", )
    moveList.appendChild(moveLine);
  }
}

// Take an array of all the move data(constance files). ULs will act as columns
// Append List elements into the UL containers each time for each column. 
// Have a way to parse the code