
let burger_Menu = document.querySelector('.header__navigation')

function burgerMenu(){
    let burger_Icon = document.querySelector('.header__burger-icon')
    let close_Icon = document.querySelector('.header__close-btn')

    burger_Icon.addEventListener('click', toggleBurgerMenu)

    close_Icon.addEventListener('click', toggleBurgerMenu)
}

function toggleBurgerMenu(){
    burger_Menu.classList.toggle('header__navigation-active')
}
burgerMenu()

let buy__battons = document.querySelectorAll('.btn--border-white');
let cart_count  = document.getElementById('cart_count')

function addToCart(){
    cart_count.innerText = Number(cart_count.innerText) + 1
}

for(let i = 0; i < buy__battons.length; i++){
    buy__battons[i].addEventListener('click',  addToCart)
}