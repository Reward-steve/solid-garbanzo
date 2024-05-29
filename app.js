let hamburger = document.querySelector('.hamburger')
let content = document.querySelector('.content')


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('slide')
    content.classList.toggle('move')
})