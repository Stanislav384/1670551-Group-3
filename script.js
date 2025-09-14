let menu_txt = document.querySelector('#menu');
let drop_menu = document.querySelector('.drop_menu');
let arrowImg = menu_txt.querySelector('.arrow-img');

menu_txt.addEventListener('click', function(){
    if (drop_menu.style.visibility === 'hidden' || drop_menu.style.visibility === ''){
        drop_menu.style.visibility = 'visible';
        menu_txt.style.fontWeight = 'bold';
        arrowImg.classList.add('rotated');
    }
    else{
        drop_menu.style.visibility = 'hidden';
        menu_txt.style.fontWeight = 'normal';
        arrowImg.classList.remove('rotated');
    }
})



let left_arrow = document.querySelector('#left_arrow');
let dot1 = document.querySelector('#dot1');
let dot2 = document.querySelector('#dot2');
let dot3 = document.querySelector('#dot3');
let dot4 = document.querySelector('#dot4');
let dot5 = document.querySelector('#dot5');
let dot6 = document.querySelector('#dot6');
let right_arrow = document.querySelector('#right_arrow');

let s_img1 = document.querySelector('#s_img1');
let s_img2 = document.querySelector('#s_img2');
let s_img3 = document.querySelector('#s_img3');
let s_img4 = document.querySelector('#s_img4');
let s_img5 = document.querySelector('#s_img5');

