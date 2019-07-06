var linkElement = document.createElement("a");

linkElement.setAttribute("href", "https://www.kiwi.com.vc/");
linkElement.setAttribute("title", "Site do Kiwi");

var textElement = document.createTextNode("Acessar site do Kiwi");

linkElement.appendChild(textElement);

var container = document.querySelector("div#app");
container.appendChild(linkElement);

var input = document.getElementById("nome");
container.removeChild(input);