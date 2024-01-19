gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function AnimationGsap() {
  const tl = gsap.timeline();

  tl.fromTo('.header__home-right', {
    x: -100,
    opacity: 0,
  }, {
    x: 0,
    duration: 0.5,
    opacity: 1
  }, 0.5).fromTo('.header__home-list-left li', {
    y: 100,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.5,
  }, 1).fromTo('.header__home-hederline', {
    x: -200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 0.5,
  }, 1).fromTo('.headerline-home', {
    opacity: 0,
  }, {
    opacity: 0.2,
    duration: 1.2
  }, 0.3)
}

function TogoElement() {
  function getDay() {
    const a = new Date();
    const n = a.getDate();
    return n
  }

  function getMonth() {
    const date = new Date();
    const monthName = date.toLocaleString('default', { month: 'long' });
    return monthName
  }

  function createElementDay(day, month) {
    let dayItem = document.createElement('h3');
    let monthItem = document.createElement('h4');

    dayItem.textContent = day;
    monthItem.textContent = month;

    dayItem.classList.add('day-titel');
    monthItem.classList.add('month-titel');

    return {
      dayItem,
      monthItem
    }
  }

  function createElementHeaderline() {
    const liItem = document.querySelectorAll('.header__home-item-left');
    const headerlineContainer = document.getElementById('headerline-home');
    let item = document.createElement('h1');

    item.classList.add('header__headerline-home');
    item.textContent = 'North Shore'

    liItem.forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        e.preventDefault()
        item.textContent = element.getElementsByTagName('p')['1'].textContent
      })
    })

    headerlineContainer.append(item)
  }

  document.addEventListener('DOMContentLoaded', () => {
    const dayContainer = document.getElementById('date');
    const monthContainer = document.getElementById('month-year');

    let date1 = getDay();
    let data2 = getMonth();
    let Day = createElementDay(date1, data2);

    createElementHeaderline();
    monthContainer.append(Day.monthItem);
    dayContainer.append(Day.dayItem);
  })
}

function mapWork() {
  function getIdRow(id) {
    const Travel = document.querySelectorAll('.travel-row-low');
    const travelOn = document.getElementById(id);

    Travel.forEach(e => {
      e.style.opacity = 0
    })
    travelOn.style.opacity = 1
  }

  function travelRow() {
    const Travel = document.querySelectorAll('.travel-row-low');
    const liItem = document.querySelectorAll('.header__home-item-left');

    liItem.forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        e.preventDefault()
        getIdRow(e.target.dataset.li)
      })
      Travel.forEach(element => {
        element.style.opacity = 0;
        Travel[0].style.opacity = 1;
      })
    })
  }
  return travelRow()
}

function pointOnMap() {

  function getById(id) {
    const info = document.getElementById(id)
    console.log(info)
    return info

  }
  function openInfo() {
    const point = document.querySelectorAll('.cicle1');
    point.forEach(e => {
      e.addEventListener('mouseenter', (element) => {
        element.preventDefault()
        let a = getById(element.target.dataset.info)
        a.classList.add('info-point-open')
      })
      e.addEventListener('mouseleave', (element) => {
        element.preventDefault()
        let a = getById(element.target.dataset.info)
        a.classList.remove('info-point-open')
      })
    })
  }
  return openInfo()
}

function TodoElementX() {
  function createElementCicle() {
    let x = [
      [],
      [],
      [],
    ]

    let divCicle = document.createElement('div');
    divCicle.classList.add('cicleMap');

    for (let y in x) {
      for (let i = 0; i < 4; i++) {
        x[y].push(divCicle)
      }
    }
    return x
  }

  function todoData(key, index, counter) {
    const container1 = document.getElementById('container-home-first');
    const container2 = document.getElementById('container-home-second');
    const container3 = document.getElementById('container-home-third');
    let item = createElementCicle()
    container1.append((item[0][index]))
    container2.append((item[1][index]))
    container3.append((item[2][index]))
    console.log(item[0][index])
    console.log(item[1][index])
    console.log(item[2][index])
  }

  document.addEventListener('DOMContentLoaded', ()=> {
    let item = createElementCicle()
    for (let key in item) {
      for (let index in item[key]) {
        todoData(key, index)
      }
    }
  })
}

AnimationGsap()
TodoElementX()
pointOnMap()
mapWork()
TogoElement()
