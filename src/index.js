import './style.css'; 
import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'

function createHeader() {
  
  let headerDiv = document.createElement('div');
  headerDiv.id = "header";
  document.body.appendChild(headerDiv);

  let title = document.createElement("h1");

  let buttons = document.createElement('div');
  let home = document.createElement("h6");
  let menu = document.createElement("h6");
  let contact = document.createElement("h6");

  buttons.classList.add("buttons");
  home.classList.add("loader");
  menu.classList.add("loader");
  contact.classList.add("loader");

  title.textContent = "Love, Seal";
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  headerDiv.appendChild(title);
  headerDiv.appendChild(buttons);
  buttons.appendChild(home);
  buttons.appendChild(menu);
  buttons.appendChild(contact);

  goMain();
  loadHome();
  setActive(home);

  home.addEventListener('click', function() {
    if(!home.classList.contains('active')) {
      setActive(home);
      loadHome();
    }
  });
  
  menu.addEventListener('click', function() {
    if(!menu.classList.contains('active')) {
      setActive(menu);
      loadMenu();
    }
  });

  contact.addEventListener('click', function() {
    if(!contact.classList.contains('active')) {
      setActive(contact);
      loadContact();
    }
  });
}

function setActive(button) {
  let buttons = document.querySelectorAll('.loader');
  
  buttons.forEach((e => {
    if(e !== button) {
      e.classList.remove('active');
    }
  }))

  button.classList.add('active');
}

function goMain() {
  
  let main = document.createElement("main");
  main.classList.add("main");
  document.body.appendChild(main);
  main.setAttribute("id", "main");

  return main;
}

createHeader();