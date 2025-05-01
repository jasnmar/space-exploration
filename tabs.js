const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

let tabFocus = 0;


// Event Listeners

tabList.addEventListener('keydown', (e) => {
  //      e.preventDefault()
  changeTabFocus(e)
})

tabs.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault()
    changeTabPanel(e)
  })
})

function changeTabPanel(e) {
  const allTabs = document.querySelectorAll('[role="tabpanel"]')
  allTabs.forEach((tab) => {
    tab.classList.add('hidden')
  })

  const allImages = document.querySelectorAll('picture')
  allImages.forEach((image) => {
    image.classList.add('hidden')
  })

  const targetButton = e.target
  const oldTab = document.querySelector('[aria-selected="true"]')
  oldTab.setAttribute('aria-selected', false)
  targetButton.setAttribute('aria-selected', true)
  const tabId = targetButton.getAttribute('aria-controls')
  const targetPanel = document.getElementById(tabId)
  targetPanel.classList.remove('hidden')

  const targetImage = document.getElementById(targetButton.dataset.image)
  targetImage.classList.remove('hidden')
}


function changeTabFocus(e) {

  const kdLeft = 37
  const kdRight = 39
  
  if (e.keyCode === kdLeft || e.keyCode === kdRight) {
    tabs[tabFocus].tabIndex = -1
  }
  if (e.keyCode === kdRight) {
    tabFocus++
    if (tabFocus >= tabs.length) {
      tabFocus = 0
    }
    console.log(tabFocus)
  }
  if (e.keyCode === kdLeft) {
    tabFocus--
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1
    }
    console.log(tabFocus)
  }

  tabs[tabFocus].tabIndex = 0
  tabs[tabFocus].focus()
}
