const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('bg-orange-300', window.scrollY > 0)
})