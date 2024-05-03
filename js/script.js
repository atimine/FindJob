function sortArr() {
    let sort = document.querySelectorAll(".hp-seo-list__link"),
        arr = []


    for (let i = 0; i < sort.length; i++) {
        if (sort[i].innerHTML !== 'lorem') {
            arr.push(sort[i].innerHTML)
        }
    }
    arr.sort()
    for (let i = 0; i < sort.length; i++) {
        if (sort[i].innerHTML !== 'lorem') {
            sort[i].innerHTML = arr[i]
        }
    }
}

///

  
  const scrollBtn =document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('active', window.scrollY > 300)
  })
  scrollBtn.addEventListener('click', () => {
      document.documentElement.scrollTop = 0
  })
  
  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')
  
    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight
        let revealTop = reveals[i].getBoundingClientRect().top
        let revalPoint = 50
  
        if(revealTop < windowHeight - revalPoint){
            reveals[i].classList.add('active')
        }
    }
  })

  // MDB JS
  // Initialization for ES Users
    import { Ripple, initMDB } from "mdb-ui-kit";

    initMDB({ Ripple });