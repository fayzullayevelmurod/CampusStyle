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
})