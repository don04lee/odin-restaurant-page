function createContact() {

  let contact = document.createElement("div");
  document.body.appendChild(contact);
  contact.classList.add("contact");

  contact.appendChild(createText("Contact me heh :)"));

  return contact;
}

function createText(text) {
  
  let newText = document.createElement("p");
  newText.classList.add("contactPart");

  newText.textContent = text;

  return newText;
}

function loadContact() {

  let main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;