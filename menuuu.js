// -------------------------------------------------------------
// -----------------LOADER--------------------------------------
// -------------------------------------------------------------
let loader = document.getElementsByClassName('loader');
let click = document.getElementsByClassName('click');

for (let a = 0; a < click.length; a++) {
    click[a].onclick = function () {
        document.documentElement.style.setProperty('--height', "100%");
        btn[a].style.cssText = `
        opacity:1;
        transition:2s;
        `
    }
}
// -------------------------------------------------------------
// -----------------REVEAL-TOP----------------------------------
// -------------------------------------------------------------
window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
// -------------------------------------------------------------
// -----------------REVEAL-BOTTOM-------------------------------
// -------------------------------------------------------------

window.addEventListener("scroll", bottom);

function bottom() {
    var bottoms = document.querySelectorAll(".bottom");

    for (var b = 0; b < bottoms.length; b++) {
        let windowheight = window.innerHeight;
        let revealbottom = bottoms[b].getBoundingClientRect().top;
        let bottompoint = 100;

        if (revealbottom < windowheight - bottompoint) {
            bottoms[b].classList.add("active");
        } else {
            bottoms[b].classList.remove("active");
        }
    }
}

// -------------------------------------------------------------
// -----------------REVEAL-LEFT---------------------------------
// -------------------------------------------------------------


window.addEventListener("scroll", left);

function left() {
    var lefts = document.querySelectorAll(".left");

    for (var l = 0; l < lefts.length; l++) {
        let windowheight = window.innerHeight;
        let revealleft = lefts[l].getBoundingClientRect().top;
        let leftpoint = 100;

        if (revealleft < windowheight - leftpoint) {
            lefts[l].classList.add("active");
        } else {
            lefts[l].classList.remove("active");
        }
    }
}

// -------------------------------------------------------------
// -----------------REVEAL-RIGHT--------------------------------
// -------------------------------------------------------------


window.addEventListener("scroll", right);

function right() {
    var rights = document.querySelectorAll(".right");

    for (var r = 0; r < rights.length; r++) {
        let windowheight = window.innerHeight;
        let revealright = rights[r].getBoundingClientRect().top;
        let rightpoint = 100;

        if (revealright < windowheight - rightpoint) {
            rights[r].classList.add("active");
        } else {
            rights[r].classList.remove("active");
        }
    }
}

// -------------------------------------------------------------
// -----------------ROTATE--------------------------------------
// -------------------------------------------------------------

window.addEventListener("scroll", rotate);

function rotate() {
    var rotates = document.querySelectorAll(".rotate");

    for (var t = 0; t < rotates.length; t++) {
        let windowheight = window.innerHeight;
        let revealtop = rotates[t].getBoundingClientRect().top;
        let revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            rotates[t].classList.add("active");
        } else {
            rotates[t].classList.remove("active");
        }
    }
}
// ----------------------------------------------------------
// ----------------------------------------------------------


// --------------------Top meals----------------------------
let card00 =document.querySelector('.card00');
let card11 =document.querySelector('.card11');
let card22 =document.querySelector('.card22');
let card33 =document.querySelector('.card33');
let info0 = document.querySelector('.info0');
let info1 = document.querySelector('.info1');
let info2 = document.querySelector('.info2');
let info3 = document.querySelector('.info3');
let rate = document.querySelector('.rateno');
let cheif = document.querySelector('.cheif');
let dishInfo = document.querySelector('.dishInfo');
let title2 = document.querySelector('.title-2');
let title1 = document.querySelector('.title-1');
let overview = document.querySelector('.overview');
let ingre = document.querySelector('.ingre');
let imgcontainer = document.querySelector('.img-container');
let dish1 = document.querySelector('.dish1');
let dish2 = document.querySelector('.dish2');
let dish3 = document.querySelector('.dish3');
let dish4 = document.querySelector('.dish4');
let rot = 360;


card00.addEventListener('click', function(){
    info0.style.display="flex";
    info1.style.display="none";
    info2.style.display="none";
    info3.style.display="none";
    rate.innerText ="4.9";
    cheif.innerText ="thomas walim";
    dishInfo.innerText ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam possimus est facilis reprehenderit sed velit deserunt molestias ipsa.";
    imgcontainer.style = 'transform: rotate(' + rot + 'deg)';
    rot += 360;
    dish1.style.opacity="1";
    dish2.style.opacity="0";
    dish3.style.opacity="0";
    dish4.style.opacity="0";
});
card11.addEventListener('click', function(){
    info0.style.display="none";
    info1.style.display="flex";
    info2.style.display="none";
    info3.style.display="none";
    rate.innerText ="4.8";
    cheif.innerText ="james jhonson";
    dishInfo.innerText ="orem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam possimus est facilis reprehenderit sed velit deserunt molestias ipsa.";
    imgcontainer.style = 'transform: rotate(' + rot + 'deg)';
    rot += 360;
    dish1.style.opacity="0";
    dish2.style.opacity="1";
    dish3.style.opacity="0";
    dish4.style.opacity="0";

});
card22.addEventListener('click', function(){
    info0.style.display="none";
    info1.style.display="none";
    info2.style.display="flex";
    info3.style.display="none";
    rate.innerText ="4.7";
    cheif.innerText ="minal room";
    dishInfo.innerText ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam possimus est facilis reprehenderit sed velit deserunt molestias ipsa.";
    imgcontainer.style = 'transform: rotate(' + rot + 'deg)';
    rot += 360;
    dish1.style.opacity="0";
    dish2.style.opacity="0";
    dish3.style.opacity="1";
    dish4.style.opacity="0";

});
card33.addEventListener('click', function(){
    info0.style.display="none";
    info1.style.display="none";
    info2.style.display="none";
    info3.style.display="flex";
    rate.innerText ="4.6";
    cheif.innerText ="connie achurra";
    dishInfo.innerText ="orem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam possimus est facilis reprehenderit sed velit deserunt molestias ipsa.";
    imgcontainer.style = 'transform: rotate(' + rot + 'deg)';
    rot += 360;
    dish1.style.opacity="0";
    dish2.style.opacity="0";
    dish3.style.opacity="0";
    dish4.style.opacity="1";
});

title2.addEventListener('click', function(){
    ingre.style.display="flex";
    overview.style.display="none";
});
title1.addEventListener('click', function(){
    ingre.style.display="none";
    overview.style.display="flex";
});
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
const categories = Array.from(document.querySelectorAll(".category > *"));
const items = document.querySelectorAll(".meal")
categories.forEach((catgory) => {
    catgory.addEventListener("click" , ()=> {
        const chossedCat = catgory.querySelector(".value").innerHTML;
        items.forEach((item) => {
            if(item.classList.contains(chossedCat)) {
                item.style.display = "flex";
            }else {
                item.style.display = "none";

            }
        })
        console.log(chossedCat)
    })
})
console.log(categories)
// let pizzas = document.querySelector('.pizzas');
// let burgers = document.querySelector('.burgers');
// let salads = document.querySelector('.salads');
// let pastas = document.querySelector('.pastas');
// let extras = document.querySelector('.extras');

// let pizza = document.getElementsByClassName("pizza");
// let burger = document.getElementsByClassName("burger");
// let salad = document.getElementsByClassName("salad");
// let pasta = document.getElementsByClassName("pasta");
// let extra = document.getElementsByClassName("extra");

// pizzas.addEventListener('click', function(){
// for (var i = 0, len = pizza.length; i < len; i++) {
//     pizza[i].style.display="flex";
//     burger[i].style.display="none";
//     salad[i].style.display="none";
//     pasta[i].style.display="none";
//     extra[i].style.display="none";
// }
// })

// burgers.addEventListener('click', function(){
// for (var i = 0, len = burger.length; i < len; i++) {
//     pizza[i].style.display="none";
//     burger[i].style.display="flex";
//     salad[i].style.display="none";
//     pasta[i].style.display="none";
//     extra[i].style.display="none";
// }
// })

// pastas.addEventListener('click', function(){
// for (var i = 0, len = pasta.length; i < len; i++) {
//     pizza[i].style.display="none";
//     burger[i].style.display="none";
//     salad[i].style.display="none";
//     pasta[i].style.display="flex";
//     extra[i].style.display="none";
// }
// })

// salads.addEventListener('click', function(){
// for (var i = 0, len = salad.length; i < len; i++) {
//     pizza[i].style.display="none";
//     burger[i].style.display="none";
//     salad[i].style.display="flex";
//     pasta[i].style.display="none";
//     extra[i].style.display="none";
// }
// })

// extras.addEventListener('click', function(){
// for (var i = 0, len = extra.length; i < len; i++) {
//     pizza[i].style.display="none";
//     burger[i].style.display="none";
//     salad[i].style.display="none";
//     pasta[i].style.display="none";
//     extra[i].style.display="flex";
// }
// })




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
// let name1 = document.querySelector('.name1');
// let name2 = document.querySelector('.name2');
// let name3 = document.querySelector('.name3');
// let name4 = document.querySelector('.name4');
// let name5 = document.querySelector('.name5');
// let name6 = document.querySelector('.name6');
// let name7 = document.querySelector('.name7');
// let name8 = document.querySelector('.name8');

// pizzas.addEventListener('click', function(){
//     img1.src="pizza/p1.png";
//     img2.src="pizza/p2.png";
//     img3.src="pizza/p3.png";
//     img4.src="pizza/p4.png";
//     img5.src="pizza/p5.png";
//     img6.src="pizza/p6.png";
//     img7.src="pizza/p7.png";
//     img8.src="pizza/p8.png";
//     name1.innerText= 'pizza1';
//     name2.innerText= 'pizza2';
//     name3.innerText= 'pizza3';
//     name4.innerText= 'pizza4';
//     name5.innerText= 'pizza5';
//     name6.innerText= 'pizza6';
//     name7.innerText= 'pizza7';
//     name8.innerText= 'pizza8';
    
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
//     name1.innerText= 'burger1';
//     name2.innerText= 'burger2';
//     name3.innerText= 'burger3';
//     name4.innerText= 'burger4';
//     name5.innerText= 'burger5';
//     name6.innerText= 'burger6';
//     name7.innerText= 'burger7';
//     name8.innerText= 'burger8';
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
//     name1.innerText= 'salad1';
//     name2.innerText= 'salad2';
//     name3.innerText= 'salad3';
//     name4.innerText= 'salad4';
//     name5.innerText= 'salad5';
//     name6.innerText= 'salad6';
//     name7.innerText= 'salad7';
//     name8.innerText= 'salad8';
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
//     name1.innerText= 'pasta1';
//     name2.innerText= 'pasta2';
//     name3.innerText= 'pasta3';
//     name4.innerText= 'pasta4';
//     name5.innerText= 'pasta5';
//     name6.innerText= 'pasta6';
//     name7.innerText= 'pasta7';
//     name8.innerText= 'pasta8';
// })
// extra.addEventListener('click', function(){
//     img1.src="extras/e1.png";
//     img2.src="extras/e2.png";
//     img3.src="extras/e3.png";
//     img4.src="extras/e4.png";
//     img5.src="extras/e5.png";
//     img6.src="extras/e6.png";
//     img7.src="extras/e7.png";
//     img8.src="extras/e8.png";
//     name1.innerText= 'extra1';
//     name2.innerText= 'extra2';
//     name3.innerText= 'extra3';
//     name4.innerText= 'extra4';
//     name5.innerText= 'extra5';
//     name6.innerText= 'extra6';
//     name7.innerText= 'extra7';
//     name8.innerText= 'extra8';
// })