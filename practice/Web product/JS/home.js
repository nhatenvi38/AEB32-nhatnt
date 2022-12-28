const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventLlstener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventLlstener('mouseenter', () => container.classList.add('hover-right'))
right.addEventLlstener('mouseleave', () => container.classList.remove('hover-right'))
