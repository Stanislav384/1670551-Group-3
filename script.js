let menu_txt = document.querySelector('#menu');
let drop_menu = document.querySelector('.drop_menu');
let arrowImg = menu_txt.querySelector('.arrow-img');

menu_txt.addEventListener('click', function(){
    if (drop_menu.style.visibility === 'hidden'){
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