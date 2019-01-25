// declare variables
navbar = document.createElement('div');
title = document.createElement('div');
h1 = document.createElement('h1');
nav = document.createElement('nav');
// give them properties
navbar.setAttribute('class', 'navbar');
title.setAttribute('class', 'title');
h1.innerHTML = "Giancarlo Pernudi Segura";
nav.setAttribute('class', 'menu');
// appending them
title.appendChild(h1);
navbar.appendChild(title);
navbar.appendChild(nav);
//links
links = {
  "Home": "/",
  "GitHub": "https://github.com/giancarlopernudisegura/",
  "Projects": "/map",
  "Contact": "/contact"
}
for (var link in links) {
  var a = document.createElement('a');
  a.setAttribute('href', links[link]);
  a.innerHTML = link;
  nav.appendChild(a);
}
// add background
bg = document.createElement('div');
bg.setAttribute('id', 'background');
// add to body
body = document.getElementsByTagName('body')[0];
body.appendChild(navbar);
body.appendChild(bg);