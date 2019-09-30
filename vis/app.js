// Video 1.5
document.getElementById("msg").innerText = "Hey, Annika!";


// // Video 2.2
// var ol = 0;
// var circleInterval = setInterval(circleAnimation, 50);
// function circleAnimation() {
//     // Video 2.3
//     if(ol>=4000/50){
//         document.getElementById("circle").style.backgroundColor = "dimgrey";
//         clearInterval(circleInterval);
//     }
//     else{
//         ol++;
//         document.getElementById("circle").style.left = ol + "px";
//     }
// }


// Better Method (Video 2.4)
// var ol = 0;
// var circleInterval;
// function circleAnimation(time) {
//     ol++;
//     document.getElementById("circle").style.left = ol + "px";
//     // Video 2.3
//     if(time<4000){
//         circleInterval = requestAnimationFrame(circleAnimation);
//     }
//     else{
//         document.getElementById("circle").style.backgroundColor = "dimgrey";
//         cancelAnimationFrame(circleInterval)
//     }
// }

// circleInterval = requestAnimationFrame(circleAnimation);


// With User Input (Video 2.5)
// var ol = 0;
// var isPlaying = false;
// var circleInterval;
// function circleAnimation(time) {
//     ol++;
//     document.getElementById("circle").style.left = ol + "px";
//     circleInterval = requestAnimationFrame(circleAnimation);
// }

// function mouseClicked(){
//     if(isPlaying){
//         isPlaying = false;
//         document.getElementById("circle").style.backgroundColor = "dimgrey";
//         cancelAnimationFrame(circleInterval)
//     }
//     else{
//         isPlaying = true;
//         document.getElementById("circle").style.backgroundColor = "crimson";
//         circleInterval = requestAnimationFrame(circleAnimation);
//     }
// }

// document.getElementById("circle").addEventListener("click", mouseClicked);
// document.getElementById("circle").style.backgroundColor = "dimgrey";


// With User Input and Scaling (Video 2.6)

var el = document.getElementById("circle");
var sc = 1;
var ol = 0;
var isPlaying = false;
var circleInterval;

function circleAnimation(time) {
    ol++;
    sc++;
    el.style.left = ol + "px";
    el.style.width = sc + "px";
    el.style.height = sc + "px";
    el.style.borderRadius = sc*100 + "px";
    circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked(){
    if(isPlaying){
        isPlaying = false;
        document.getElementById("circle").style.backgroundColor = "dimgrey";
        cancelAnimationFrame(circleInterval)
    }
    else{
        isPlaying = true;
        document.getElementById("circle").style.backgroundColor = "crimson";
        circleInterval = requestAnimationFrame(circleAnimation);
    }
}

document.getElementById("circle").addEventListener("click", mouseClicked);
document.getElementById("circle").style.backgroundColor = "dimgrey";
