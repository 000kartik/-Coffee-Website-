let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartIems.classList.remove('active');
    searchForm.classList.remove('active');    
}

let cartIems = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartIems.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartIems.classList.remove('active');
    
    
}

window.onscroll = () => {
    navbar.classList.remove('active');
    cartIems.classList.remove('active');
    searchForm.classList.remove('active');
} 