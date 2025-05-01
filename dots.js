
const dotMenu = document.getElementById('dots-selector')
const dots = dotMenu.querySelectorAll('button')

const infos = document.querySelectorAll('.crew-info')
const pictures = document.querySelectorAll('picture')


dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    dotListener(e)
  })
});

function dotListener(e){
  const selector = e.target.getAttribute('aria-controls')
  hideItems()
  displayCurrentItem(selector)
  updaetDots(e.target)
}

function hideItems(){
  infos.forEach(info => {
    info.classList.add('hidden')
  })
  pictures.forEach(picture => {
    picture.classList.add('hidden')
  })
}

function displayCurrentItem(selector) {
  const selectorString = "image-" + selector.slice(5)
  document.getElementById(selector).classList.remove('hidden')
  document.getElementById(selectorString).classList.remove('hidden')
}

function updaetDots(target) {
  dots.forEach(dot => {
    dot.setAttribute('aria-selected', false)
  })
  target.setAttribute('aria-selected', true)
}
