document.getElementsByClassName("story");

const story = document.querySelector(".story");

const setText = document.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "Hôm nay là ngày 28 tháng 1 năm 2026";
});

const clearText = document.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = ""; 
});
