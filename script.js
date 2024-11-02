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
})