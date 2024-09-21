var caioMenu = document.getElementById('caio-menu')
var menu = document.getElementById('menu-mobile')
var overlay = document.getElementById('overlay-menu-moba')

caioMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// END
