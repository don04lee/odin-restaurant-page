function createHome() {
  
  let home = document.createElement("div");
  document.body.appendChild(home);
  home.classList.add("main");

  let image = document.createElement("img");
  image.classList.add("homePart");

  image.src = "images/Sealeo.png";
  image.alt = "Sealeo";

  home.appendChild(createText("Welcome to Love, Seal!"));
  home.appendChild(image);
  home.appendChild(createText("Us seals pleasure in our customer's satisfaction with the best fish!"));

  return home;
}

function createText(text) {
  
  let newText = document.createElement("p");
  newText.classList.add("homePart");

  newText.textContent = text;

  return newText;
}

function loadHome() {

  let main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;