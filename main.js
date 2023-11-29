const nav = document.getElementById("nav");
const feedbackElement = document.querySelector(".feedback");
const smaliklerInput = document.querySelector(".smalikler");
const font1Input = document.querySelector(".font1");
const font2Input = document.querySelector(".font2");
const font3Input = document.querySelector(".font3");
const button = document.querySelector("button");
const margin =document.querySelector(".margin")
const size =document.querySelector(".size");
const map =document.querySelector(".map");
const close =document.querySelector(".close");


font1Input.addEventListener("click", () => {
   font2Input.style.display = "none"
   font3Input.style.display = "none"
   button.innerText = "Thanks for Feedback"
   font1Input.style.backgroundColor = "red"
   margin.textContent=size.textContent
})
font2Input.addEventListener("click", () => {
   font1Input.style.display = "none"
   font3Input.style.display = "none"
   button.innerText = "Thanks for Feedback"
   font2Input.style.backgroundColor = "blue"
   margin.textContent=close.textContent
})
font3Input.addEventListener("click", () => {
   font2Input.style.display = "none"
   font1Input.style.display = "none"
   button.innerText = "Thanks for Feedback"
   font3Input.style.backgroundColor = "white"
   margin.textContent=map.textContent
})