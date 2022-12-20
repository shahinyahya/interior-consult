const hamMenu = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')


hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('toggle')
    menu.classList.toggle('toggle-menu')
    menu.classList.toggle('open')
    if (hamMenu.classList.contains('toggle')) {
        body.style.overflow = 'hidden'
    } else {

        body.style.overflow = 'scroll'
    }
})