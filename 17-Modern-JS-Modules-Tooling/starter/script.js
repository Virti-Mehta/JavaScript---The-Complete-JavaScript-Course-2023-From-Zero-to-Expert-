//Importing Module
//Types of exports: named, default
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, tq);
console.log('Importing Module');

import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('bread', 5);
console.log(shoppingCart.totalPrice);
//As there is top-level await feature in module
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.org/posts');
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
//NPM usage
import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name} `);
  }
}
const virti = new Person('virti');
console.log('Virti' ?? null);

console.log(state.cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));
import 'core-js/stable';
//Polyfilling async functions
import 'regenerator-runtime';
