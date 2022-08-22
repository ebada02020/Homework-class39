'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
const nickname = document.getElementById('nickname');
nickname.append('Mohamed Ebada');
const favFood = document.getElementById('fav-food');
favFood.append('meat & rice');
const hometown = document.getElementById('hometown');
hometown.append('Egypt');
const list = document.querySelectorAll('li');
for (let i = 0; i < list.length; i++) {
  list[i].className = `list-item`;
}
document.body.style.cssText = `font-family: Arial, sans-serif`;
