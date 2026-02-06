'use strict'

document.body.addEventListener('click', (e) => {
  let target = e.target;

  if (target.classList.contains('js-option-title')) openOptions(target);
  if (target.classList.contains('js-btn-filter-mob')) openFilter();
  if (target.classList.contains('price-list__filter') || target.classList.contains('price-list__filter-close')) closeFilter();
})

const openOptions = target => {
  const parent = target.closest('.option-wrapper');
  const options = parent.querySelector('.options-fields');

  options.classList.toggle('is_active');
  target.classList.toggle('active')
}


const openFilter = () => {
  document.querySelector('.price-list__filter').classList.toggle('active');
}


const closeFilter = () => {
  document.querySelector('.price-list__filter').classList.remove('active')
}


const recommendItems = document?.querySelector('.js-recommend-items-swiper');

if (recommendItems) {
  const r_swiper = new Swiper('.js-recommend-items-swiper', {
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
      prevEl: ".recommend-items__slider-nav-btn.prev",
      nextEl: '.recommend-items__slider-nav-btn.next'
    },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    }

  })
}
