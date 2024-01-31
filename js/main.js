// location select
let select_btn2 = document.querySelector('header .select .head');
let select_text2 = document.querySelector('header .select .head span')
let select_input2 = document.querySelector('header .select .head input')
let select2 = document.querySelector('header .select');
let select_items2 = document.querySelectorAll('header .select .result button');

select_btn2.onclick = () => {
    select2.classList.add('active')
    select_input2.focus();
}

select_items2.forEach(item => {
    item.onclick = () => {
        select_text2.innerText = item.textContent;
        select2.classList.remove('active')
    }
});

// location select

// footer accardion
try {
  const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');

  accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));
  
  function toggleAccordion() {
    const items = document.querySelectorAll('.js-acc-item');
    const thisItem = this.parentNode;
  
    items.forEach(item => {
      if (thisItem == item) {
        thisItem.classList.toggle('is-open');
        return;
      }
      item.classList.remove('is-open');
    });
  }
} catch(err) {
  console.log(err);
}
// footer accardion

// Metal beds sliders
let parent_slider = document.querySelector('.metal_beds_home .parent_slide .swiper')
if (parent_slider) {
  let childSlider = new Swiper('.metal_beds_home .child_slide .swiper', {
    slidesPerView: 4,
    spaceBetween: 6,
    direction: "vertical",
    breakpoints: {
      1050: {
        direction: "horizontal",
        spaceBetween: 20,
      }
    }
  });

  let prentSlider = new Swiper(parent_slider, {
    speed: 800,
    navigation: {
      nextEl: '.metal_beds_home .next_btn',
      prevEl: '.metal_beds_home .prev_btn',
    },
    thumbs: {
      swiper: childSlider,
    },
  })

}

// Metal beds sliders end

// Catalog filter
let catalog_filter_slider = document.querySelector('.catalog_filter');
if (catalog_filter_slider) {
  let catalog_slider = new Swiper(catalog_filter_slider, {
    slidesPerView: 2.4,
    spaceBetween: 8,
    breakpoints: {
      1000: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 3,
      }
    }
  })

  let catalog_filter_items = document.querySelectorAll('.catalog_filter .filter_item');
  catalog_filter_items.forEach(filter => {
    let btn = filter.querySelector('.filter_item_btn');
    let item_lists = filter.querySelectorAll('ul li a');
    btn.addEventListener('click', function () {
      clsoeFilter(catalog_filter_items, filter);
      filter.classList.toggle('active');
    })
    item_lists.forEach(el => {
      el.onclick = e => {
        e.preventDefault();
        filter.classList.remove('active')
      }
    })
  })

  function clsoeFilter (elements, currentEl = null) {
    elements.forEach(el => {
      if (el !== currentEl) {
        el.classList.remove('active');
      }
    })
  }
}
// Catalog filter end

let burder = document.querySelector('.media_burger');
let mobile_menu = document.querySelector('.mobile_menu');
let menu_close = document.querySelector('.menu_close');
burder.onclick = () => {
  mobile_menu.classList.add('active');
}
menu_close.onclick = () => {
  mobile_menu.classList.remove('active');
}

const items = document.querySelectorAll('.item');

if (items.length) {
  items.forEach((item) => {
      const header = item.querySelector('.header');
      const content = item.querySelector('.content');
  
      header.addEventListener('click', () => {
          content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
      });
  });
}
