import { greet } from './greet.js';

export const shout = (name) => greet(name).toUpperCase();
