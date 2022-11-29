import './style.css';

console.log('funguju!');

import { Banner } from './components/Banner/index.js';
import { Contact } from './components/Contact/index.js';
import { Gallery } from './components/Gallery/index.js';
import { Footer } from './components/Footer/index.js';
import { Header } from './components/Header/index.js';
import { Menu } from './components/Menu/index.js';

const pageelement = document.createElement('div');
pageelement.classList.add('page');

document.querySelector('#app').append(pageElement);
