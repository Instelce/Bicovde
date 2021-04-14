// For modalbox
const openModalboxButton = document.querySelector('.open__modalbox')
const closeModalboxButton = document.querySelector('.modalbox__close')
const modalbox = document.querySelector('.modalbox__container')
openModalboxButton.addEventListener('click', () => {
    modalbox.classList.add('modalbox__visible')
})
closeModalboxButton.addEventListener('click', () => {
    modalbox.classList.remove('modalbox__visible')
})

