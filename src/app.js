/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

let pronoun = ["the", "our", "his", "we"];
let adjetive = ["great", "big", "amazing", "small"];
let noun = ["jogger", "racoon", "dog", "merchant", "drive"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjetive.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      pronoun[i] + adjetive[j] + noun[k] + ".com";
    }
  }
}
