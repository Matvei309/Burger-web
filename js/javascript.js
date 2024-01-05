const burger = document.querySelector('.burger');
const main = document.querySelectorAll('.main');
const shadow = document.querySelectorAll('.shadow');
const linkList = document.querySelector('.link__list');
const items = document.querySelectorAll('.link__list-link');
const screens = document.querySelectorAll('.screen');
const text = document.querySelectorAll('.next-page');
const container  = document.querySelector('.container')
let index = true;
const listWeb = ['Home', 'Winter', 'Forest', 'Beach'];

function clickElement() {
  burger.classList.toggle('activeBurger');
  main.forEach(e => {
    e.classList.toggle('activeMain')
  })
  shadow[0].classList.toggle('activeShadowOne');
  shadow[1].classList.toggle('activeShadowTwo');
  linkList.classList.toggle('listActive')
  items.forEach(element => {
    element.classList.toggle('linkActive');
  })

  main.forEach(m => {
    m.addEventListener('mouseenter', () => {
      m.classList.toggle('hoverMain')
      shadow[0].classList.toggle('hoverShadow')
    })

    m.addEventListener('mouseleave', () => {
      m.classList.remove('hoverMain')
      shadow[0].classList.remove('hoverShadow')
    })
  })
}

function replaceBg(id) {
  const bg = document.getElementById(id)
  screens.forEach(element => {
    element.style.display = 'none';
  })
  bg.style.display = 'block';
}

function changeBg() {
  items.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      e.preventDefault()
      replaceBg(e.target.dataset.link)
    })

    link.addEventListener('click', e => {
      e.preventDefault();
      localStorage.setItem('web', JSON.stringify(e.target.dataset.link))
      text.forEach(element => {
        element.style.display = 'block'
      })
      clickElement();
      location.reload()
    })
  })
  screens.forEach(screen => {
    screen.style.display = 'none';
    listWeb.forEach((e, index) => {
      if (e === JSON.parse(localStorage.getItem('web'))) {
        screens[index].style.display = 'block';
      }
    })
  })
}

burger.addEventListener('click', (e) => {
  text.forEach(element => {
    element.style.display = 'none';
  })
  clickElement()
  }
)


changeBg()
