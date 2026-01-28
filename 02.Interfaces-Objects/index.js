const table = document.getElementById("table");

const tableAttrs = table.attributes;

for (const attr of tableAttrs) {
  if (attr.nodeName === "border") {
    table.border = "5";
  }
}
