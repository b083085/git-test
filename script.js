document.addEventListener("DOMContentLoaded", function(){
    var style = getComputedStyle(document.body);
    var menuHoverColor = style.getPropertyValue('--menu-hover-color');

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

    var searchButton = document.querySelector('.nav__header__search__btn');
    searchButton.addEventListener('click',function(evt){
        var searchBar = document.querySelector('.nav__header__search__bar');
        searchBar.classList.toggle('show');
        document.querySelector('.nav__header__search__btn').classList.toggle('show');
    })
})