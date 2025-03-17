const changeTextBtn = document.getElementById("changeTextBtn");
const toggleElementBtn = document.getElementById("toggleElementBtn");
const titleStyleBtn = document.getElementById("titleStyleBtn");
const greet = document.getElementById("greet");

//Interacted with the user
let name = prompt("What is your name, dear web user?");
const greeting = document.createElement("p");
greeting.textContent = `Hello ${name}, happy to meet you!`;
greet.appendChild(greeting);

changeTextBtn.addEventListener("click", () => {
  // updates p text content then changes button style
  const description = document.getElementById("description");
  description.textContent = "You just updated text dynamically!";
  changeTextBtn.textContent = "Text Changed";
});

toggleElementBtn.addEventListener("click", () => {
  //add or remove element functionality
  const container = document.getElementById("container");
  let existingElement = document.getElementById("newElement");
  if (existingElement) {
    existingElement.remove();
  } else {
    const newElement = document.createElement("p");
    newElement.textContent = "New Element created!";
    newElement.id = "newElement";
    container.appendChild(newElement);
  }
});

titleStyleBtn.addEventListener("click", () => {
  //change text style functionality
  const title = document.getElementById("title");
  title.style.color = "red";
  title.style.fontFamily = "cursive";
});
