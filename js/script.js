let progressBar;
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.02;
let parallax_6, parallax_5, parallax_4;


window.onload = function() {
    progressBar = document.getElementsByClassName("progressBar")[0];

    parallax_6 = document.getElementById("parallax_6");
    parallax_5 = document.getElementById("parallax_5");
    parallax_4 = document.getElementById("parallax_4");

    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    loop();
}

function scrollFunc(e) {
    var scrollTop = document.documentElement.scrollTop;

    let per = Math.round(scrollTop / (document.body.scrollHeight - window.innerHeight) * 100);

    progressBar.style.width = `${per}%`;
}

function loop() {
    mx += (x -mx) * speed;
    my += (y -my) * speed;

    parallax_6.style.transform = `scale(1.2) translate(${-mx/50}px, ${-my/50}px)`;
    parallax_5.style.transform = `scale(1.1) translate(${mx/70}px, ${my/70}px)`;
    parallax_4.style.transform = `translate(${-mx/90}px, ${-my/90}px)`;

    window.requestAnimationFrame(loop);
}


function mouseMove (e) {
    x = (e.clientX - window.innerWidth/2);
    y = (e.clientY - window.innerHeight/2);
}
