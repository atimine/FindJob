'use strict'

window.addEventListener("DOMContentLoaded", () => {

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


// login-modal

const modalTrigger = document.querySelectorAll("[data-modal]"),
modal = document.querySelector(".login-modal"),
modalCloseBtn = document.querySelector("[data-close]");

function closeModal() {
modal.classList.add("hide");
modal.classList.remove("show");
document.body.style.overflow = "";
}

function openModal() {
modal.classList.remove("hide");
modal.classList.add("show");
document.body.style.overflow = "hidden";
clearInterval(modalTimerId);
}

modalTrigger.forEach((item) => {
item.addEventListener("click", openModal);
});

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
// console.log(e.target);
if (e.target == modal) {
  closeModal();
}
});

  

const modalTimerId = setTimeout(openModal, 5000);

// console.log(window.scrollY);

function showMOdalByScroll() {
if (
  window.scrollY + document.documentElement.clientHeight >=
  document.documentElement.scrollHeight - 1
) {
  openModal();
  window.removeEventListener("scroll", showMOdalByScroll);
}
}
window.addEventListener("scroll", showMOdalByScroll);
});
