'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHerat = document.querySelector('.heart');

box.style.backgroundColor = '#115486';
box.style.width = '500px';
box.style.border = 'solid', '2px';
box.style.borderColor = 'red';
box.style.borderRadius = '20px';
btns[2].style.borderRadius = '40px';
btns[2].style.marginRight = '20px';
btns[2].style.marginLeft = '20px';
box.style.marginBottom ='10px';
circles[1].style.backgroundColor = '#972966';
btns[1].style.cssText  = 'background-color: #127646';

/*for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'grey';
});

