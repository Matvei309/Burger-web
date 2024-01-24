function EfectFunction() {
  const shadow = document.querySelectorAll('.shadow');
  const main = document.querySelector('.main');
  const nextPage = document.querySelector(".next-page")


  main.classList.toggle('activeMain')
  shadow[0].classList.toggle('activeShadowOne');
  shadow[1].classList.toggle('activeShadowTwo');
  nextPage.style.display = 'none'
}

function findHtmlFile(dataLink) {
  const pageLink = [
    { Home: "index.html" },
    { Winter: "second_page.html" }
  ]
  pageLink.forEach(item => {
    if (dataLink == Object.keys(item)) {
      setTimeout(() => {
        window.location.href = Object.values(item)
      }, 1 * 1000)
    }
  })
}

function changeHtmlFile() {
  const linkItems = document.querySelectorAll('.link__list-link');
  const main = document.querySelector('.main');


  linkItems.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      main.classList.toggle('mainLeave')
      findHtmlFile(link.dataset.link)
      EfectFunction();
    })
  })
}

function clickOnBurger() {
  const burger = document.querySelector('.burger-mountain');
  burger.addEventListener('mouseenter', () => {
    burger.style.setProperty('--position-burger', `${50}%`)
  })

  burger.addEventListener('mouseleave', () => {
    burger.style.setProperty('--position-burger', `${0}%`)
  })
  
  burger.addEventListener('click', (e) => {
    e.preventDefault()
    EfectFunction()
  })
}

clickOnBurger()
changeHtmlFile()
