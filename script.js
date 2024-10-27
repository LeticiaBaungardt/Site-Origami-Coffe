let links = document.querySelectorAll(".js-link");
let sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 112;
    let heightSection = section.offsetHeight;
    let idSection = section.getAttribute("id")

    if(top >= offset && top < offset + heightSection) {
      links.forEach(link => {
        link.classList.remove("actived");

        document.querySelector(`header nav a[href*='${idSection}']`).classList.add("actived");
      })
    }
  })
})

function scrollSection(event) {
  event.preventDefault();

  const href = event.currentTarget.getAttribute("href");

  const section = document.querySelector(href);

  let topSection = section.offsetTop - 100;

  window.scrollTo({
    top: topSection,
    behavior: "smooth"
  })
}

links.forEach(link => {
  link.addEventListener("click", scrollSection)
});


var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}



const swiper1 = new Swiper('.swiper-container-1', {
  createElements: true,
  autoplay: {
      delay: 2000,
    },
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

const swiper2 = new Swiper('.swiper-container-2', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 18
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    }
});