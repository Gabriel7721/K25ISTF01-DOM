// const paragraph = document.querySelectorAll("p");

// for (const element of paragraph) {
//   console.log(element);
//   //   alert(paragraph[0].nodeName);
// }

// console.log(paragraph instanceof NodeList);
// for (const element of object) {
//   console.log(element);
// }

window.onload = () => {
  const heading = document.createElement("h1");
  const headingText = document.createTextNode("This is heading number 1");
  heading.appendChild(headingText);
  document.body.appendChild(heading);
};
