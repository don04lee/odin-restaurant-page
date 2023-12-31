function createMenu() {

  let menu = document.createElement("div");
  document.body.appendChild(menu);
  menu.classList.add("menu");

  menu.appendChild(createText("we serve chill vibes"));

  return menu;
}

function createText(text) {
  
  let newText = document.createElement("p");
  newText.classList.add("contactPart");

  newText.textContent = text;

  return newText;
}

function loadMenu() {

  let main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;