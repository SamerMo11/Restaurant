// --------------------------------------------------------------
// --------------------------------------------------------------
// --------------------------------------------------------------
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
// --------------------Top meals----------------------------
let card00 = document.querySelector(".card00");
let card11 = document.querySelector(".card11");
let card22 = document.querySelector(".card22");
let card33 = document.querySelector(".card33");
let info0 = document.querySelector(".info0");
let info1 = document.querySelector(".info1");
let info2 = document.querySelector(".info2");
let info3 = document.querySelector(".info3");
let rate = document.querySelector(".rateno");
let cheif = document.querySelector(".cheif");
let dishInfo = document.querySelector(".dishInfo");
let title2 = document.querySelector(".title-2");
let title1 = document.querySelector(".title-1");
let overview = document.querySelector(".overview");
let ingre = document.querySelector(".ingre");
let imgcontainer = document.querySelector(".img-container");
let dish1 = document.querySelector(".dish1");
let dish2 = document.querySelector(".dish2");
let dish3 = document.querySelector(".dish3");
let dish4 = document.querySelector(".dish4");
let rot = 360;

card00.addEventListener("click", function () {
  info0.style.display = "flex";
  info1.style.display = "none";
  info2.style.display = "none";
  info3.style.display = "none";
  rate.innerText = "4.9";
  cheif.innerText = "thomas walim";
  dishInfo.innerText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam possimus est facilis reprehenderit sed velit deserunt molestias ipsa.";
  imgcontainer.style = "transform: rotate(" + rot + "deg)";
  rot += 360;
  dish1.style.opacity = "1";
  dish2.style.opacity = "0";
  dish3.style.opacity = "0";
  dish4.style.opacity = "0";
});
card11.addEventListener("click", function () {
  info0.style.display = "none";
  info1.style.display = "flex";
  info2.style.display = "none";
  info3.style.display = "none";
  rate.innerText = "4.8";
  cheif.innerText = "james jhonson";
  dishInfo.innerText =
    "orem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam possimus est facilis reprehenderit sed velit deserunt molestias ipsa.";
  imgcontainer.style = "transform: rotate(" + rot + "deg)";
  rot += 360;
  dish1.style.opacity = "0";
  dish2.style.opacity = "1";
  dish3.style.opacity = "0";
  dish4.style.opacity = "0";
});
card22.addEventListener("click", function () {
  info0.style.display = "none";
  info1.style.display = "none";
  info2.style.display = "flex";
  info3.style.display = "none";
  rate.innerText = "4.7";
  cheif.innerText = "minal room";
  dishInfo.innerText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam possimus est facilis reprehenderit sed velit deserunt molestias ipsa.";
  imgcontainer.style = "transform: rotate(" + rot + "deg)";
  rot += 360;
  dish1.style.opacity = "0";
  dish2.style.opacity = "0";
  dish3.style.opacity = "1";
  dish4.style.opacity = "0";
});
card33.addEventListener("click", function () {
  info0.style.display = "none";
  info1.style.display = "none";
  info2.style.display = "none";
  info3.style.display = "flex";
  rate.innerText = "4.6";
  cheif.innerText = "connie achurra";
  dishInfo.innerText =
    "orem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam possimus est facilis reprehenderit sed velit deserunt molestias ipsa.";
  imgcontainer.style = "transform: rotate(" + rot + "deg)";
  rot += 360;
  dish1.style.opacity = "0";
  dish2.style.opacity = "0";
  dish3.style.opacity = "0";
  dish4.style.opacity = "1";
});

title2.addEventListener("click", function () {
  ingre.style.display = "flex";
  overview.style.display = "none";
});
title1.addEventListener("click", function () {
  ingre.style.display = "none";
  overview.style.display = "flex";
});

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
// let rateno = document.getElementsByClassName('rateno');

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

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
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

// card00.addEventListener('click', function(){
//     rateno.innerText ='2';
// })
// // --------------------------------------------------------------
// // --------------------------------------------------------------
// // --------------------------------------------------------------

// let pizzas = document.querySelector('.pizzas');
// let burgers = document.querySelector('.burgers');
// let salads = document.querySelector('.salads');
// let pastas = document.querySelector('.pastas');
// let extra = document.querySelector('.extra');
// let img1 = document.querySelector('.img1');
// let img2 = document.querySelector('.img2');
// let img3 = document.querySelector('.img3');
// let img4 = document.querySelector('.img4');
// let img5 = document.querySelector('.img5');
// let img6 = document.querySelector('.img6');
// let img7 = document.querySelector('.img7');
// let img8 = document.querySelector('.img8');
// let title1 = document.querySelector('.title1');
// let title2 = document.querySelector('.title2');
// let title3 = document.querySelector('.title3');
// let title4 = document.querySelector('.title4');
// let title5 = document.querySelector('.title5');
// let title6 = document.querySelector('.title6');
// let title7 = document.querySelector('.title7');
// let title8 = document.querySelector('.title8');

// pizzas.addEventListener('click', function(){
//     img1.src="pizza/p1.png";
//     img2.src="pizza/p2.png";
//     img3.src="pizza/p3.png";
//     img4.src="pizza/p4.png";
//     img5.src="pizza/p5.png";
//     img6.src="pizza/p6.png";
//     img7.src="pizza/p7.png";
//     img8.src="pizza/p8.png";
//     title1.innerText= 'pizza1';
//     title2.innerText= 'pizza2';
//     title3.innerText= 'pizza3';
//     title4.innerText= 'pizza4';
//     title5.innerText= 'pizza5';
//     title6.innerText= 'pizza6';
//     title7.innerText= 'pizza7';
//     title8.innerText= 'pizza8';

// })
// burgers.addEventListener('click', function(){
//     img1.src="burger/b1.png";
//     img2.src="burger/b2.png";
//     img3.src="burger/b3.png";
//     img4.src="burger/b4.png";
//     img5.src="burger/b5.png";
//     img6.src="burger/b6.png";
//     img7.src="burger/b7.png";
//     img8.src="burger/b8.png";
//     title1.innerText= 'burger1';
//     title2.innerText= 'burger2';
//     title3.innerText= 'burger3';
//     title4.innerText= 'burger4';
//     title5.innerText= 'burger5';
//     title6.innerText= 'burger6';
//     title7.innerText= 'burger7';
//     title8.innerText= 'burger8';
// })
// salads.addEventListener('click', function(){
//     img1.src="salad/s1.png";
//     img2.src="salad/s2.png";
//     img3.src="salad/s3.png";
//     img4.src="salad/s4.png";
//     img5.src="salad/s5.png";
//     img6.src="salad/s6.png";
//     img7.src="salad/s7.png";
//     img8.src="salad/s8.png";
//     title1.innerText= 'salad1';
//     title2.innerText= 'salad2';
//     title3.innerText= 'salad3';
//     title4.innerText= 'salad4';
//     title5.innerText= 'salad5';
//     title6.innerText= 'salad6';
//     title7.innerText= 'salad7';
//     title8.innerText= 'salad8';
// })
// pastas.addEventListener('click', function(){
//     img1.src="pasta/p1.png";
//     img2.src="pasta/p2.png";
//     img3.src="pasta/p3.png";
//     img4.src="pasta/p4.png";
//     img5.src="pasta/p5.png";
//     img6.src="pasta/p6.png";
//     img7.src="pasta/p7.png";
//     img8.src="pasta/p8.png";
//     title1.innerText= 'pasta1';
//     title2.innerText= 'pasta2';
//     title3.innerText= 'pasta3';
//     title4.innerText= 'pasta4';
//     title5.innerText= 'pasta5';
//     title6.innerText= 'pasta6';
//     title7.innerText= 'pasta7';
//     title8.innerText= 'pasta8';
// })
// extra.addEventListener('click', function(){
//     img1.src="extra/e1.png";
//     img2.src="extra/e2.png";
//     img3.src="extra/e3.png";
//     img4.src="extra/e4.png";
//     img5.src="extra/e5.png";
//     img6.src="extra/e6.png";
//     img7.src="extra/e7.png";
//     img8.src="extra/e8.png";
//     title1.innerText= 'extra1';
//     title2.innerText= 'extra2';
//     title3.innerText= 'extra3';
//     title4.innerText= 'extra4';
//     title5.innerText= 'extra5';
//     title6.innerText= 'extra6';
//     title7.innerText= 'extra7';
//     title8.innerText= 'extra8';
// })

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
const categories = document.querySelectorAll(".categories > *");
const items = document.querySelectorAll(".meal");
console.log(items);
categories.forEach((category) => {
  category.addEventListener("click", () => {
    const categoryTitle = category.innerText;

    items.forEach((item) => {
      if (item.classList.contains(categoryTitle)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  });
});
