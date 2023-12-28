import './style.css'; 
import createHome from './home.js'
import createMenu from './menu.js'
import createContact from './contact.js'

function createHeader() {
  
  let headerDiv = document.createElement('div');
  headerDiv.id = "header";
  document.body.appendChild(headerDiv);

  let title = document.createElement("h1");

  let buttons = document.createElement('div');
  let loadHome = document.createElement("h6");
  let loadMenu = document.createElement("h6");
  let loadContact = document.createElement("h6");

  buttons.classList.add("buttons");

  title.textContent = "Love, Seal";
  loadHome.textContent = "Home";
  loadMenu.textContent = "Menu";
  loadContact.textContent = "Contact";

  headerDiv.appendChild(title);
  headerDiv.appendChild(buttons);
  buttons.appendChild(loadHome);
  buttons.appendChild(loadMenu);
  buttons.appendChild(loadContact);

  goHome();

  loadHome.addEventListener('click', function() {
    console.log('yes');
    goHome();
  });
  
  loadMenu.addEventListener('click', function() {
    goMenu();
  });

  loadContact.addEventListener('click', function() {
    goContact;
  });
}

function goHome(){ 
  createHome();
}

function goMenu() {
  createMenu();
}

function goContact() {
  createContact();
}

createHeader();