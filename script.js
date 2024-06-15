const items = document.querySelectorAll('.item');


items.forEach(item => {
    item.addEventListener('mouseover', () => {
    removeFocus();
    item.classList.add('selected');
})

removeFocus = () => {
    items.forEach(item => {
    item.classList.remove('selected');
    })
}
})

gsap.to('h1', {text: "Мы открылись!", duration: 0.7,  delay: 0.5, repeat: 0, ease: "power1.in"})
gsap.from('.one', {duration: 0.9, delay: 0.5, x: '-10vw', ease: 'power1.in', opacity:0})
gsap.from('.two', {duration: 1.1, delay: 0.5, x: '-20vw', ease: 'power1.in', opacity:0})
gsap.from('.three', {duration: 1.3, delay: 0.5, x: '-40vw', ease: 'power1.in', opacity:0})
gsap.from('.four', {duration: 1.5, delay: 0.5, x: '-60vw', ease: 'power1.in', opacity:0})
gsap.from('.five', {duration: 1.7, delay: 0.5, x: '-80vw', ease: 'power1.in', opacity:0})
gsap.from('.six', {duration: 1.9, delay: 0.5, x: '-100vw', ease: 'power1.in', opacity:0})