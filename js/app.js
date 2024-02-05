const smoothLinks = document.querySelectorAll('a[href^="#"]')
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function(e) {
    e.preventDefault()
    const id = smoothLink.getAttribute('href')

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function initSliders() {
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.member-tour__slider')) {
    new Swiper('.member-tour__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 20,
      autoHeight: true,
      speed: 500,

      loop: true,

      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },

      // Пагинация
      pagination: {
        el: '.member-tour__fractial',
        type: 'fraction',
        renderFraction: function(currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            '<span class="swiper-pagination-slash">/</span>' +
            '<span class="' +
            totalClass +
            '"></span>'
          )
        }
      },
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.member-tour__btn-nav--prev',
        nextEl: '.member-tour__btn-nav--next'
      },

      // Брейкпоинты
      breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3
        }
      }
    })
  }
  if (document.querySelector('.steps-transform__slider')) {
    new Swiper('.steps-transform__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,

      speed: 500,

      loop: false,
      parallax: true,

      // Пагинация
      pagination: {
        el: '.steps-transform__pagination',
        clickable: true
      },

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.steps-transform__btn-nav--prev',
        nextEl: '.steps-transform__btn-nav--next'
      }
    })
  }
}

window.addEventListener('load', function(e) {
  // Запуск инициализации слайдеров
  initSliders()
})
