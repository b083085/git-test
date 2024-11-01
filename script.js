document.addEventListener("DOMContentLoaded", function(){
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
})