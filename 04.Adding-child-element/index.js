/**
 * 1. Node.appendChild() thêm child
 * 2. Node.removeChild() xóa child
 * 3. Node.createElement để tạo element
 * 4. EventTarget.addEventListener
 * 5. Document.querySelector
 */

const parent = document.querySelector(".parent");
const addChild = document.querySelector("#add-child");
const removeChild = document.querySelector("#remove-child");
const child = document.createElement("div"); // global

addChild.addEventListener("click", () => {
  if (parent.childNodes.length >= 1) {
    return;
  }

  child.classList.add("child");
  child.textContent = "I am child";
  parent.appendChild(child);
});

removeChild.addEventListener("click", () => {
  parent.removeChild(child);
});
