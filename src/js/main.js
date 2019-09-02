window.onload = function() {

    document.body.scrollTop = 0;

    $('.slider').slick({
        autoplay: true,
        dots: true,
        arrow: true
    });

    // $('.slider').slick();

    // $('.fade').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    // });

    let burgerButton = document.querySelector('.main-header .burger-button');
    let topMenu = document.querySelector('.top-menu-list');
    let body = document.querySelector('body');

    burgerButton.addEventListener('click', () => {
        topMenu.classList.toggle('show');
        body.classList.toggle('block');
    });


     // for smooth scrolling
    let headerAnchorsWrapper = document.querySelector('.header-nav ul');
    let gallerySection = document.querySelector('#gallery');
    let categoriesSection = document.querySelector('#categories');
    let pagesSection = document.querySelector('#pages');



    headerAnchorsWrapper.addEventListener('click', (event) => {
        event.preventDefault();

        let attr = event.target.hash;

        try {
            switch (attr) {
                case '#gallery':
                    gallerySection.scrollIntoView({behavior: "smooth"});
                    break;
                case '#categories':
                    categoriesSection.scrollIntoView({behavior: "smooth"});
                    break;
                case '#pages':
                    pagesSection.scrollIntoView({behavior: "smooth"});
                    break;
            }
        } catch {
            scrollToTop.scrollIntoView({behavior: "auto"});
            throw new Error('Edge sucks');
        }

    });

    let catalogItems =  document.querySelectorAll('.categories .categories-item');
    let hoverItem = document.querySelectorAll('.categories .hover-link-item');
    
    for ( let i = 0; i < catalogItems.length; i++ ) {
        catalogItems[i].addEventListener('mouseenter', () => {
            hoverItem[i].classList.remove('hidden');
        });

        catalogItems[i].addEventListener('mouseleave', () => {
            hoverItem[i].classList.add('hidden');
        });
    } 

    let scrollToTop = document.getElementById('home');
    let scrollButton = document.querySelector('.scroll-button');

    document.body.addEventListener('scroll', (event) => {
        //let scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
        let scroll = event.target.scrollTop;
        ( scroll > 700 ) ?
        scrollButton.style.display = "block" :
        scrollButton.style.display = "none";
    });

    scrollButton.addEventListener('click', () => {

        try {
            scrollToTop.scrollIntoView({behavior: "smooth"});
        } catch {
            scrollToTop.scrollIntoView({behavior: "auto"});
            throw new Error('Edge sucks')
        }

    });
};