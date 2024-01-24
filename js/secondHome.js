gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


function GetForParallax() {
  const scrollButtton = document.querySelector('.mouse-class')
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scrollTop', `${scrollY}px`)
    if (scrollY > 10) {
      scrollButtton.classList.add('scrollButttonDelet')
    }
    else {
      scrollButtton.classList.remove('scrollButttonDelet')
    }
  })
}

function HoverEffectCard() {

  const card = document.querySelectorAll('.card-item-content')

  const listOfCard = Array.from(card)

  listOfCard.forEach(element => {
    element.addEventListener('mouseenter', () => {
      const listOfIndex = listOfCard.findIndex(item => item === element)

      listOfCard[listOfIndex].classList.add('card-item-content-hoverMain')
      for (let i = 1; i <= 1; i++) {
        if (listOfCard.includes(listOfCard[listOfIndex - i]) === true) {
          listOfCard[listOfIndex - i].classList.add('card-item-content-hover-left')
        }

        if (listOfCard.includes(listOfCard[listOfIndex + i]) === true) {
          listOfCard[listOfIndex + i].classList.add('card-item-content-hover-right')
        }
      }
    })

    element.addEventListener('mouseleave', () => {
      listOfCard.forEach(cardItem => {
        cardItem.classList.remove('card-item-content-active')
        cardItem.classList.remove('card-item-content-hoverMain')
        cardItem.classList.remove('card-item-content-hover-left')
        cardItem.classList.remove('card-item-content-hover-right')
      })
    })
  })
}

function clickEffectOn() {
  const card = document.querySelectorAll('.card-item-content')

  const listOfCard = Array.from(card)

  card.forEach(element => {
    const listOfIndex = listOfCard.findIndex(item => item === element)
    element.addEventListener('click', (e) => {
      e.preventDefault()
      if (listOfCard[listOfIndex].classList.contains('card-item-content-active') === false) {
        listOfCard[listOfIndex].classList.add('card-item-content-active')
      }
      else {
        listOfCard[listOfIndex].classList.remove('card-item-content-active')
      }
    })

  })
}

function AnimationGsapSecond() {
  const tl = gsap.timeline();
  tl.fromTo('.header',
    {
      opacity: 0,

    }, {
    opacity: 1,
    duration: 2,

  })

  gsap.fromTo('.content-block__headerline',
    {
      opacity: 0,
      x: -100,
      y: 50
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.content-block__headerline',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    })
}

function LogicsForSwiperEffect(grpupIndex) {
  const buttonlist  = Array.from(document.querySelectorAll(`.btn-${grpupIndex.dataset.group}`))
  const divList = Array.from(document.querySelectorAll(`.div-${grpupIndex.dataset.group}`))
  let indexOFpage = 0;

  buttonlist.forEach(item => {
    item.addEventListener('click', index => {
      index.preventDefault()

      console.log(divList)
      if (buttonlist[1] == item && indexOFpage < divList.length - 1) indexOFpage++;
      if (buttonlist[0] == item && indexOFpage > 0) indexOFpage--;
      divList.forEach(e => { e.style.opacity = 0 })
      divList[indexOFpage].style.opacity = 1
    })
  })
}

function SwiperEffect() {
  const grpupList = document.querySelectorAll('.group')
  grpupList.forEach(grpupIndex => grpupIndex.addEventListener('mouseenter', () => LogicsForSwiperEffect(grpupIndex)))
}


SwiperEffect()
clickEffectOn()
HoverEffectCard()
GetForParallax()
AnimationGsapSecond()

