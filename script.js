const button = document.querySelector("button");
const h2 = document.querySelector('h2');
const bg = document.querySelector('section');

button.addEventListener('click',()=>{
    let color='#';
    color += Math.random().toString(16).slice(2,8);
    bg.style.backgroundColor=color;
    h2.innerText=color;
})