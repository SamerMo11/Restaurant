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


// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
