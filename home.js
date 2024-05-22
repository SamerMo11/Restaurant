let open =document.querySelector('.open');
let close =document.querySelector('.close');
let menu =document.querySelector('.links');

open.addEventListener('click', function(){
    menu.style.display='flex';
    this.style.display='none';
    close.style.display='flex';
})

close.addEventListener('click', function(){
  menu.style.display='none';
  this.style.display='none';
  open.style.display='flex';
})


// ----------------------------------------------------------
// -----------------ARROW-TO-FIRST-SECTION-------------------
// ----------------------------------------------------------

let arr = document.getElementById("arrow");

window.onscroll = function () {
  if (scrollY >= 720) {
    arr.style.display = "block";
  } else {
    arr.style.display = "none";
  }
};


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
// ------------BEST-DICHES-TEXT-APPEARANCE------------------------
// ---------------------------------------------------------------
// let best = document.getElementsByClassName('best');
// let click = document.getElementsByClassName('click');

// for(let a=0 ; a<click.length; a++){
//   click[a].onclick = function(){
//       document.documentElement.style.setProperty('--height', "100%")
//   }
// }

// ---------------------------------------------------------------
// ------------OVERVIEW-INGREDIENTS------------------------
// ---------------------------------------------------------------
// let overviewBtn = document.getElementsByClassName('title-1');
// let ingreBtn = document.getElementsByClassName('title-2');
// let overview = document.getElementsByClassName('overview');
// let ingre = document.getElementsByClassName('ingre');

// for(let t1=0 ; t1<overviewBtn.length ; t1++){
//   overviewBtn[t1].onclick = function(){
//     overview[t1].style.cssText = `
//     display: flex;
//     `;
//     ingre[t1].style.cssText = `
//     display: none;
//     `;
//   }
// }
// for(let t2=0 ; t2<ingreBtn.length ; t2++){
//   ingreBtn[t2].onclick = function(){
//     overview[t2].style.cssText = `
//     display: none;
//     `;
//     ingre[t2].style.cssText = `
//     display: flex;
//     `;
//   }
// }
// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------
// let dishCard = document.getElementsByClassName('dish-card');
// let dishPara = document.getElementsByClassName('dish');
// let card00 = document.getElementsByClassName('card00');
// let card11 = document.getElementsByClassName('card11');
// let card22 = document.getElementsByClassName('card22');
// let card33 = document.getElementsByClassName('card33');
// let info0 = document.getElementsByClassName('info0');
// let info1 = document.getElementsByClassName('info1');
// let info2 = document.getElementsByClassName('info2');
// let info3 = document.getElementsByClassName('info3');


// for(let a=0 ; a<card00.length; a++){
//   card00[a].onclick = function(){
//       info0[a].style.cssText = `
//       display:flex;
//       `;
//       info1[a].style.cssText = `
//       display:none;
//       `;
//       info2[a].style.cssText = `
//       display:none;
//       `;
//       info3[a].style.cssText = `
//       display:none;
//       `;
//   }
// }
// for(let a=0 ; a<card11.length; a++){
//   card11[a].onclick = function(){
//       info1[a].style.cssText = `
//       display:flex;
      
//       `;
//       info0[a].style.cssText = `
//       display:none;
//       `;
//       info2[a].style.cssText = `
//       display:none;
//       `;
//       info3[a].style.cssText = `
//       display:none;
//       `;
//   }
// }
// for(let a=0 ; a<card22.length; a++){
//   card22[a].onclick = function(){
//       document.documentElement.style.setProperty('--height', "100%");
//       document.documentElement.style.setProperty('--width', "100%");
//       info2[a].style.cssText = `
//       display:flex;
//       `;
//       info0[a].style.cssText = `
//       display:none;
//       `;
//       info1[a].style.cssText = `
//       display:none;
//       `;
//       info3[a].style.cssText = `
//       display:none;
//       `;
//   }
// }
// for(let a=0 ; a<card33.length; a++){
//   card33[a].onclick = function(){
//       document.documentElement.style.setProperty('--height', "100%");
//       document.documentElement.style.setProperty('--width', "100%");
//       info3[a].style.cssText = `
//       display:flex;
//       `;
//       info0[a].style.cssText = `
//       display:none;
//       `;
//       info1[a].style.cssText = `
//       display:none;
//       `;
//       info2[a].style.cssText = `
//       display:none;
//       `;
//   }
// }

// // --------------------------------------------------
// // --------------------------------------------------
// // --------------------------------------------------
// let btn = document.querySelector('.btn00');
// const dishesContainer = document.querySelector(".dishes");
// const imgContainer = document.querySelector(".bests .parent");
// let postion = 0;
// const imgs = [...imgContainer.children];
// console.log(imgs)
// const btns = [...dishesContainer.children];
// btns.forEach((ele) => {
//     ele.addEventListener("click" , (e) => {
        
//         postion += 360;
//         const index = +ele.getAttribute("data-value");
//         const activeBtn = document.querySelector(".btn.show");
//         const lastIndex = (activeBtn) ? activeBtn.getAttribute("data-value") : 0;
//         imgs.forEach((img)=> img.classList.remove("show"));
//         imgs[index].classList.add("show");
//         imgContainer.style.transform = `rotate(${postion}deg)`;
//     })
// });