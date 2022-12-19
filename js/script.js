'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHerat = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = '#115486';
box.style.width = '500px';
box.style.border = 'solid',  '2px';
box.style.borderColor = 'red';
box.style.borderRadius = '20px';
btns[2].style.borderRadius = '40px';
btns[2].style.marginRight = '20px';
btns[2].style.marginLeft = '20px';
box.style.marginBottom ='10px';
circles[1].style.backgroundColor = '#fc64fe';
btns[1].style.cssText  = 'background-color: #127646';

/*for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'grey';
});

const div = document.createElement('div');
// const text = document.createTextNode('I was here');

div.classList.add('black');

wrapper.append(div);
//wrapper.appendChild(div);

//wrapper.prepend(div);

//hearts[2].before(div);
//hearts[2].after(div);

//wrapper.insertBefore(div, hearts[1]);

//circles[1].remove();
//wrapper.removeChild(hearts[2]);

//hearts[1].replaceWith(circles[1]);
//wrapper.replaceChild(circles[1], hearts[2]);

div.innerHTML = "<h1>Hey!!</h1>";

//div.textContent = "<h1>HELLO</h1>";

div.insertAdjacentHTML("afterend", '<h1>Hey!!</h1>');