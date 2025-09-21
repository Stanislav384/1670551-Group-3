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
let right_arrow = document.querySelector('#right_arrow');

let dots = [
  document.querySelector('#dot1'),
  document.querySelector('#dot2'),
  document.querySelector('#dot3'),
  document.querySelector('#dot4'),
  document.querySelector('#dot5'),
  document.querySelector('#dot6'),
];

let images = [
  document.querySelector('#s_img1'),
  document.querySelector('#s_img2'),
  document.querySelector('#s_img3'),
  document.querySelector('#s_img4'),
  document.querySelector('#s_img5'),
  document.querySelector('#s_img6'),
];

let current = 0; // індекс активного слайду

function showSlide(index) {
  // приховати всі картинки
  images.forEach(img => img.style.display = 'none');
  // зняти активність з усіх точок
  dots.forEach(dot => dot.style.backgroundColor = 'gray');

  // показати потрібну картинку
  images[index].style.display = 'block';
  // підсвітити dot
  dots[index].style.backgroundColor = 'black';
}

// при кліку стрілки
right_arrow.addEventListener('click', () => {
  current++;
  if (current >= images.length) current = 0;
  showSlide(current);
});

left_arrow.addEventListener('click', () => {
  current--;
  if (current < 0) current = images.length - 1;
  showSlide(current);
});

// ініціалізація
showSlide(current);


