const root = document.createElement("html");
root.lang = "en";

const head = document.createElement("head");
const title = document.createElement("title");

title.appendChild(document.createTextNode("Document"));
head.appendChild(title);

const body = document.createElement("body");
const header = document.createElement("header");
header.appendChild(document.createTextNode("Header"));

body.appendChild(header);

const paragraph = document.createElement("paragraph");
paragraph.appendChild(document.createTextNode("Paragraph"));

body.appendChild(paragraph);

root.appendChild(body);
root.appendChild(head);
