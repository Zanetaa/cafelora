import './../../../../style.css';
import './../../../../index.css';

import { Layer } from './Layer';

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;

  let orderClass = '';
  if (ordered) {
    orderClass = 'order-btn--ordered';
  }

  const element = document.createElement('div');
  element.classList.add('drink');

  element.innerHTML = `
   <div class="drink__product">
     <div class="drink__cup">
       <img src=${image}>
     </div>
     <div class="drink__info">
       <h3>${name}</h3>
     </div>
   </div>
   <div class="drink__controls">
     <button class="order-btn ${orderClass}">
       ${ordered ? 'Zrušit' : 'Objednat'}
     </button>
   </div>
`;

  element
    .querySelector('.drink__info')
    .append(...layers.map((layer) => Layer(layer)));

  return element;
};
