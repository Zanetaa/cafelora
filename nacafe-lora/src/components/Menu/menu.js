import { Drink } from './Drink';

import './../../../../style.css';
import './../../../../index.css';

export const Menu = ({ drinks }) => {
  const element = document.createElement('section');
  element.setAttribute('id', 'menu');
  element.classList.add('menu');

  const drinkList = document.createElement('div');
  drinkList.classList.add('drinks-list');

  element.append(drinkList);

  return element;
};
