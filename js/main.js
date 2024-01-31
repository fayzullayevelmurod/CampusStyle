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