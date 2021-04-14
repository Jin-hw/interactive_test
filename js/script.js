let progressBar;


window.onload = function() {
    progressBar = document.getElementsByClassName("progressBar")[0];

    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    //stageResize();
    loop();
}

function scrollFunc(e) {
    var scrollTop = document.documentElement.scrollTop;

    let per = Math.round(scrollTop / (document.body.scrollHeight - window.innerHeight) * 100);
    console.log(progressBar.style);

    progressBar.style.width = `${per}%`;
   
}

function stageResize() {
    
}

function loop() {
  
    window.requestAnimationFrame(loop);
}


function mouseMove (e) {

}
