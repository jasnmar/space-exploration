

const numberControl = document.getElementById('number-indicator')
const numberCircles = numberControl.querySelectorAll('button')

numberCircles.forEach(circle => {
  circle.addEventListener('click', (e) => {
    circleClick(e.target)
  })
})

function circleClick(target) {
  clearPage()
  setNumberTarget(target)
}

function clearPage() {
  numberCircles.forEach((circle) => {
    circle.setAttribute("aria-selected", "false")
  })
  const techInfos = document.querySelectorAll(".tech-info")
  techInfos.forEach((techInfo) => {
    techInfo.classList.add("hidden")
    const images = document.querySelectorAll(".hero-images")
    const wideImages = document.querySelectorAll(".hero-images-wide") 
    images.forEach((image) => {
      image.classList.add("hidden")
    })
    wideImages.forEach((wideImage) => {
      wideImage.classList.add("hidden")
    })
  })
}

function setNumberTarget(target) {
  const contentId = target.getAttribute('aria-controls')
  const content = document.getElementById(contentId)
  content.classList.remove('hidden')
  target.setAttribute("aria-selected", "true")
  const imageId = "image-" + contentId
  const wideImageId = "image-" + contentId + "-wide"
  const image = document.getElementById(imageId)
  const wideImage = document.getElementById(wideImageId)
  wideImage.classList.remove('hidden')
  image.classList.remove('hidden')
}
