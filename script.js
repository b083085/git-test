function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    var vHeight = (window.innerHeight || document.documentElement.clientHeight);

    return ((rect.top > 0 || rect.bottom > 0) && rect.top < vHeight);
}

function animate(element, delay){
    if(isInViewport(element) && !element.classList.contains('aos-animate')){
        setTimeout(() => element.classList.add('aos-animate'), delay);
    }
}

window.addEventListener("scroll", function(){
    var mainListing = document.querySelector('.main__listing');
    animate(mainListing, 0);

    var listingImages1 = document.querySelector('.main__listing__images > div:first-child');
    var listingImages2 = document.querySelector('.main__listing__images > div:nth-child(2)');
    var listingImages3 = document.querySelector('.main__listing__images > div:nth-child(3)');
    var listingImages4 = document.querySelector('.main__listing__images > div:nth-child(4)');
    var listingImages5 = document.querySelector('.main__listing__images > div:last-child');
    
    animate(listingImages1,130);
    animate(listingImages2,180);
    animate(listingImages3,230);
    animate(listingImages4,280);
    animate(listingImages5,330);

    var mainImageAndContent = document.querySelector('.main__image__and__content');
    animate(mainImageAndContent, 0);

    var mainImageLeft = document.querySelector('.main__image__and__content [data-aos=fade-left]');
    animate(mainImageLeft, 0);

    var mainContentRight = document.querySelector('.main__image__and__content [data-aos=fade-right]');
    animate(mainContentRight, 0);
})

document.addEventListener("DOMContentLoaded", function(){
    var style = getComputedStyle(document.body);
    var menuHoverColor = style.getPropertyValue('--menu-hover-color');

    // add mouseenter and mouseleave events to all header menus
    var menuItems = document.getElementsByClassName('nav__header__menu');
    for(var i = 0; i < menuItems.length; i++){
        var menuItem = menuItems[i];
        menuItem.addEventListener('mouseenter', function(evt){
            evt.target.classList.add('is-hover');
            evt.target.style.zIndex = 101;
        })
        menuItem.addEventListener('mouseleave', function(evt){
            evt.target.classList.remove('is-hover');
            evt.target.style.zIndex = 100;
        })
    }

    // add mouseenter and mouseleave events to all dropdown menus
    var dropdownMenus = document.getElementsByClassName('nav__header__dropdown__menu');
    for(var i = 0; i < dropdownMenus.length; i++){
        var dropdownMenu = dropdownMenus[i];
        dropdownMenu.addEventListener('mouseenter', function(evt){
            var prev = evt.target.previousElementSibling;
            prev.classList.add('is-hover');
        })
        dropdownMenu.addEventListener('mouseleave', function(evt){
            var prev = evt.target.previousElementSibling;
            prev.classList.remove('is-hover');
        })
    }

    // toggle the '.show' class when clicking the search button
    var searchButton = document.querySelector('.nav__header__search__btn');
    searchButton.addEventListener('click',function(evt){
        var searchBar = document.querySelector('.nav__header__search__bar');
        searchBar.classList.toggle('show');
        document.querySelector('.nav__header__search__btn').classList.toggle('show');
    })

    document.querySelector('.section__hero').classList.add('aos-animate');

    document.querySelectorAll('.main__listing__images > div').forEach(e => {
        e.addEventListener('mouseenter',function(evt){
            evt.target.querySelector('.overlay').style.opacity = 1;
            evt.target.querySelector('.content-title').style.opacity = 0;
            evt.target.querySelector('.content-title').style.display = 'none';
            evt.target.querySelector('.content').style.opacity = 1;
            evt.target.querySelector('.content').style.display = 'block';

        })
        e.addEventListener('mouseleave',function(evt){
            evt.target.querySelector('.overlay').style.opacity = 0;
            evt.target.querySelector('.content-title').style.opacity = 1;
            evt.target.querySelector('.content-title').style.display = '';
            evt.target.querySelector('.content').style.opacity = 0;
        })
    });
})