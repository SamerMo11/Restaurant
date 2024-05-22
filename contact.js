

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


// ---------------------------------------------------------------
// ---------------------------sec team----------------------------
// ---------------------------------------------------------------
let person1 = document.querySelector('.person1');
let person2 = document.querySelector('.person2');
let person3 = document.querySelector('.person3');
let person4 = document.querySelector('.person4');
let person5 = document.querySelector('.person5');
let person6 = document.querySelector('.person6');
let mainImg = document.querySelector('.mainImg');
let link1 = document.querySelector('.link1');
let link2 = document.querySelector('.link2');
let link3 = document.querySelector('.link3');
let para = document.querySelector('.para');
let namep = document.querySelector('.name');
let work = document.querySelector('.work');

person1.addEventListener('click', function(){
    mainImg.src="p1.png";
    link1.href='https://www.linkedin.com/in/samer-mohamed-5b2586280';
    link2.href='';
    link3.href='https://www.facebook.com/profile.php?id=100083281736623';
    // para.innerText='';
    namep.innerText='samer mohamed';
    work.innerText='front-end developer';
})
person2.addEventListener('click', function(){
    mainImg.src="p2.png";
    link1.href='https://www.linkedin.com/in/reem-tawfik-a5a176264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';
    link2.href='';
    link3.href='https://www.facebook.com/reem.tawfik.165?mibextid=LQQJ4d';
    // para.innerText='';
    namep.innerText='reem tawfik';
    work.innerText='ui/ux designer \n front-end developer';
})
person3.addEventListener('click', function(){
    mainImg.src="p3.jpg";
    link1.href='';
    link2.href='';
    link3.href='';
    // para.innerText='';
    namep.innerText='ibrahim mohamed';
    work.innerText='front-end developer';
})
person4.addEventListener('click', function(){
    mainImg.src="p5.png";
    link1.href='';
    link2.href='';
    link3.href='';
    // para.innerText='';
    namep.innerText='maryam rashed';
    work.innerText='back-end developer';
})
person5.addEventListener('click', function(){
    mainImg.src="p4.png";
    link1.href='';
    link2.href='';
    link3.href='';
    // para.innerText='';
    namep.innerText='ahmed medhat';
    work.innerText='back-end developer';
})
person6.addEventListener('click', function(){
    mainImg.src="p6.png";
    link1.href='';
    link2.href='';
    link3.href='';
    // para.innerText='';
    namep.innerText='mostafa belal';
    work.innerText='back-end developer';
})