let progressBar;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.02;
let scrollTop;
let parallax_6, parallax_5, parallax_4;


window.onload = function() {
    progressBar = document.getElementsByClassName("progressBar")[0];

    parallax_6 = document.getElementById("parallax_6");
    parallax_5 = document.getElementById("parallax_5");
    parallax_4 = document.getElementById("parallax_4");
    parallax_3 = document.getElementById("parallax_3");
    parallax_2 = document.getElementById("parallax_2");
    parallax_1 = document.getElementById("parallax_1");
    parallax_0 = document.getElementById("parallax_0");

    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    scrollTop = document.documentElement.scrollTop;
    loop();
}

function scrollFunc(e) {
    scrollTop = document.documentElement.scrollTop;

    let per = Math.round(scrollTop / (document.body.scrollHeight - window.innerHeight) * 100);
    progressBar.style.width = `${per}%`;

    parallax_0.style.transform = `translate3d(0px, ${scrollTop * .03}px, 0px)`;
    parallax_1.style.transform = `translate3d(0px, ${-scrollTop * .03}px, 0px)`;
    parallax_2.style.transform = `translate3d(0px, ${-scrollTop * .12}px, 0px)`;
    parallax_3.style.transform = `translate3d(0px, ${-scrollTop * .16}px, 0px)`;
    //parallax_4.style.transform = `translate3d(0px, ${-scrollTop * .22}px, 0px)`;
    //parallax_5.style.transform = `translate3d(0px, ${-scrollTop * .25}px, 0px)`;
    
}

function loop() {
    mx += (x -mx) * speed;
    my += (y -my) * speed;

    parallax_4.style.transform = `translate3d(${mx/40}px, ${-scrollTop * .26}px, 0px)`;
    //parallax_5.style.transform = `scale(1.1) translate3d(${mx/50}px, ${-scrollTop * .25}px, 0px)`;
    parallax_5.style.transform = `scale(1.05) translate(${-mx/20}px, ${-scrollTop * .30}px)`;
    parallax_6.style.transform = `scale(1.2) translate(${mx/20}px, ${my/20}px)`;

    window.requestAnimationFrame(loop);
}


function mouseMove (e) {
    x = (e.clientX - window.innerWidth/2);
    y = (e.clientY - window.innerHeight/2);
}
