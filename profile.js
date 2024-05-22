
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
let save = document.querySelector('.save');
let edit = document.querySelector('.edit');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let email = document.querySelector('.email');
let pass = document.querySelector('.pass');
let num = document.querySelector('.num');
// let imgedit = document.querySelector('.imgedit');
let cam = document.querySelector('.cam');

edit.addEventListener('click', function(){
    save.style.display='block';
    this.style.display="none";
    fname.removeAttribute("disabled");
    lname.removeAttribute("disabled");
    email.removeAttribute("disabled");
    pass.removeAttribute("disabled");
    num.removeAttribute("disabled");
    fname.style.boxShadow='0 0 5px #fff';
    lname.style.boxShadow='0 0 5px #fff';
    email.style.boxShadow='0 0 5px #fff';
    pass.style.boxShadow='0 0 5px #fff';
    num.style.boxShadow='0 0 5px #fff';
    // imgedit.style.display='flex';
    cam.style.display='flex';
})
save.addEventListener('click', function(){
    edit.style.display='block';
    this.style.display="none";
    fname.setAttribute("disabled","");
    lname.setAttribute("disabled","");
    email.setAttribute("disabled","");
    pass.setAttribute("disabled","");
    num.setAttribute("disabled","");
    fname.style.boxShadow='0 0 0px #fff';
    lname.style.boxShadow='0 0 0px #fff';
    email.style.boxShadow='0 0 0px #fff';
    pass.style.boxShadow='0 0 0px #fff';
    num.style.boxShadow='0 0 0px #fff';
    // imgedit.style.display='none';
    cam.style.display='none';


})

// ----------------------------------------------------------
// -----------------ARROW-TO-FIRST-SECTION-------------------
// ----------------------------------------------------------

// let arr = document.getElementById("arrow");

// window.onscroll = function () {
//   if (scrollY >= 740) {
//     arr.style.display = "block";
//   } else {
//     arr.style.display = "none";
//   }
// };


// ---------------------------------------------------
// ----------------EXAMPLE-OF-FUNCTION----------------
// ---------------------------------------------------

// let btn = document.getElementsByClassName('btn');
// let box = document.getElementsByClassName('box');


// for(let i = 0 ; i < btn.length; i++){
//     btn[i].onclick = function(){
//         box[i].style.cssText = `
//         opacity:0;
//         `;
//     }
// }

// ---------------------------------------------------------------
// ---------------------DARK-LIGHT-MODES--------------------------
// ---------------------------------------------------------------

// let moon = document.getElementById('moon');
// let sun = document.getElementById('sun');

// moon.addEventListener('click', function(){
//     document.body.classList.remove('light');
//     this.style.display='none';
//     sun.style.display='block';
// })

// sun.addEventListener('click', function(){
//     document.body.classList.add('light');
//     this.style.display='none';
//     moon.style.display='block';
// })
