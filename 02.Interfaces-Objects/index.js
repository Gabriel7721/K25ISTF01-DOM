const table = document.getElementById("table");

const tableAttrs = table.attributes;
const b = "BORDER";
for (const attr of tableAttrs) {
  if (attr.nodeName === b.toLowerCase()) {
    table.border = "5";
  }
}
