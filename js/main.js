const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuButtonClose = document.querySelector(".menu-button-close");
menuButton.addEventListener("click", () => {
  menu.classList.add("is-open");
  menuButtonClose.classList.add("is-active");
});
menuButtonClose.addEventListener("click", () => {
  menu.classList.remove("is-open");
  menuButtonClose.classList.remove("is-active");
});

// pop-up form

const hideForm = document.querySelector('.hide-form')
const orderTicket = document.querySelector('.order-ticket')
const orderTrigger = document.querySelector('.order-trigger')
const orderTicketForm = document.querySelector('.order-ticket__form')

const heightForm = orderTicket.offsetHeight

setTimeout(()=>{

  hideForm.style.bottom = -heightForm+'px'
})

orderTrigger.addEventListener('click', ()=>{
  hideForm.classList.toggle('hide-form-active')
})

orderTicketForm.addEventListener('change', e=>{
  const label = e.target.labels[0]
 if(label&&e.target.value){
   label.classList.add('order-ticket__label-focus')
 }else{
   label.classList.remove('order-ticket__label-focus')
 }
})

orderTicketForm.addEventListener('submit', e=>{
  e.preventDefault()

  const formData = new FormData(orderTicketForm)

  const data = {}

  for (const elem of formData){
    const [name, value] = elem
    data[name] = value
  }
  console.log(data)
})



