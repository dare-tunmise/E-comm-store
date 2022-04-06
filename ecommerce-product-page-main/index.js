let counter = 0;

const btns = document.querySelectorAll(".btnn");
const value = document.getElementById('value');
const addValue = document.getElementById('secondbtn');
const cart = document.getElementById('lblCartCount')

btns.forEach(function (btnn) {
    btnn.addEventListener('click', function (e){
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            counter--;
        } else {
            counter++;
        }

        value.textContent = counter;
    });
});


addValue.addEventListener('click', ()=> {
     if (counter === 0) {
         alert ("add something to cart!")
     } else {
         alert ("items added to cart successfully!")
     }
        cart.textContent = counter;
    
    
});


const open = document.querySelector('.opener');
const poppy = document.querySelector('.popup-wrapper');
const close = document.querySelector ('.main');

open.addEventListener('click', () => {
    poppy.style.display = 'block';
});

close.addEventListener('click', () =>{
    poppy.style.display = 'none'
})

function myFuntion (imgs) {
    const expandImg = document.getElementById("expandedImg");

    expandImg.src = imgs.src;

    expandImg.parentElement.style.display ="block";
};

const light = document.querySelector(".lightbox");
const expand = document.getElementById('expandedImg');
const closeF = document.querySelector(".closebtn")

expand.addEventListener('click', ()=>{
   if (screen.width >= 960 )
    light.style.display = 'block';
});

closeF.addEventListener('click', ()=>{
    light.style.display = 'none';
});

// poppy.addEventListener('click', () => {
//     poppy.style.display = 'none';
// });



// function holla (if (condition) {
    
// }) {
    
// })

// let price= 125

// function multi () {
//     counter = counter * price;
//     document.getElementById("show").innerText=counter
// }

const navMenu = document.getElementById("nav-menu"),
 toggleMenu = document.getElementById("toggle-menu"),
 closeMenu = document.getElementById("close-menu")

toggleMenu.addEventListener('click',() => {
   navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click',() => {
    navMenu.classList.remove('show')
 });



let slides = document.querySelectorAll(".fineimage");
let index = 0;

//next function 

function next() {
    slides[index].classList.remove('acctive');
    index = (index + 1) % slides.length;
    slides[index].classList.add('acctive');
}

//previous function 
    function prev() {
        slides[index].classList.remove('acctive');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('acctive');
    }