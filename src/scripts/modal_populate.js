export function modalPopulate(moveData) {
  const moveName = document.getElementById("move-name");
  const altName = document.getElementById("altname");
  const damage = document.getElementById("damage");
  const guard = document.getElementById("guard");
  const startup = document.getElementById("startup");
  const active = document.getElementById("active");
  const recovery = document.getElementById("recovery");
  const onblock = document.getElementById("onblock");
  const onhit = document.getElementById("onhit");
  const motion = document.getElementById("motion");
  const description = document.getElementById("description");

  console.log("working");
  moveName.textContent = moveData['moveName'];
  altName.textContent = `Common Name: ${moveData['altName']}`;
  damage.textContent = `Damage: \n${moveData['damage']}`;
  guard.textContent = `Guard: \n${moveData['guard']}`;
  startup.textContent = `Startup: \n${moveData['startup']}`;
  active.textContent = `Active: \n${moveData['active']}`;
  recovery.textContent = `Recovery: \n${moveData['recovery']}`;
  onblock.textContent = `On Block: \n${moveData['onblock']}`;
  onhit.textContent = `On Hit: \n${moveData['onhit']}`;
  const test = function (motionArr) {
    // const newEle = document.createElement("span");
    motionArr.forEach(function (ele) {
      const newPic = document.createElement("img");
      // if (ele === 'l'){
        newPic.src = `../../assets/imgs/controls/${ele}.png`;
        motion.appendChild(newPic);
      // }
    })
    // motion.appendChild(newEle);
  }
  motion.textContent = '';
  test (moveData['motion']);
  // motion.textContent = moveData['motion'];
  description.textContent = moveData['description'];
}