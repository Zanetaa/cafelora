import './style.css';
import './index.css';

console.log('funguju!');

import { Banner } from './components/Banner/banner.js';
import { Contact } from './components/Contact/contact.js';
import { Gallery } from './components/Gallery/gallery.js';
import { Footer } from './components/Footer/footer.js';
import { Header } from './components/Header/header.js';
import { Menu } from './components/Menu/menu.js';

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu(), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector('#app').append(pageElement);
