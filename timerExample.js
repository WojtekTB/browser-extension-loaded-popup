// This file is just for timer example, and is not required for persistent pop up

let timer = 0;
document.getElementById("timer").innerHTML = timer;
setInterval(()=>{
    document.getElementById("timer").innerHTML = timer;
    timer++;
}, 1000);