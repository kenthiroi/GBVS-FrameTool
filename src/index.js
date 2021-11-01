const { granInfo } = require("./data/gran");
const { formPopulate } = require("./scripts/data_populate");

document.addEventListener("DOMContentLoaded", () => {
  gran = document.getElementById("gran");
  gran.addEventListener('click', formPopulate(granInfo));
});