const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const body = document.querySelector('body')
const p = document.querySelector('p')
const img = document.querySelector('img')


btn1.onclick = () => {
   body.classList.toggle('bodybg')
}
btn2.onclick = () => {
   img.classList.toggle('hidden')
}
btn3.onclick = () => {
   p.classList.toggle('hidden')
}

btn4.onclick = () => {
   p.classList.toggle('red')
}
 