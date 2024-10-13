document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-bars');
    let item = document.querySelector('.menuBar');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        item.classList.toggle('active');
    }

    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        item.classList.remove('active'); 
    }

    document.querySelector('#search-con').onclick = () =>{
        document.querySelector('.search-form').classList.toggle('active');
    }

    document.querySelector('#close').onclick = () =>{
        document.querySelector('.search-form').classList.remove('active');
    }

    var swiper = new Swiper(".main-home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Sửa lỗi chính tả tại đây
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });
    

});
