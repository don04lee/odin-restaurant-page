import './style.css'; 
import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'

function createHeader() {
  
  let contentDiv = document.createElement('div');
  contentDiv.id = "content";
  document.body.appendChild(contentDiv);

  let title = document.createElement("p");

  title.textContent = "An Ordinary Restaurant";
  contentDiv.appendChild(title);
}

createHeader();