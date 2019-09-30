import { Builder, By, Key, until } from 'selenium-webdriver';

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();

// Video 1.5
// document.getElementById("msg").innerText = "Hey, Annika!";


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

// var el = document.getElementById("circle");
// var sc = 1;
// var ol = 0;
// var isPlaying = false;
// var circleInterval;

// function circleAnimation(time) {
//     ol++;
//     sc++;
//     el.style.left = ol + "px";
//     el.style.width = sc + "px";
//     el.style.height = sc + "px";
//     el.style.borderRadius = sc*100 + "px";
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

// Video 3.1
// var canvas = document.getElementById('animated-canvas');
// Video 3.2
// 2d or 3d?
// var context = canvas.getContext('2d');
// Video 3.3
// var canvasInterval = requestAnimationFrame(canvasAnimation);
// var circleX = 60;
// Video 3.4
// var velocity = 1;
// var acceleration = 0.5;

// function canvasAnimation(){
//     circleX++;
//     drawCircle(circleX, canvas.height/2, 25);
//     canvasInterval = requestAnimationFrame(canvasAnimation);
// }

// function drawCircle(x,y,s){
//     clearCanvas();
//     context.fillStyle = "crimson";
//     context.beginPath();
//     context.arc(x, y, s, 0, 2 * Math.PI);
//     context.fill();
//     velocity+=acceleration;
//     circleX+=velocity;
//     if(circleX>canvas.width){
//         circleX = 0;
//         velocity = 1;
//     }
// }

// function makeRandom(n) {
//     return Math.floor(Math.random()*Math.floor(n));
// }

// function clearCanvas(){
//     context.clearRect(0,0,canvas.width, canvas.height);
// }

// drawCircle();

// Video 4.1
// var rotatingSquare = document.getElementById("web-animation").animate(
//     [
//         { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(0deg) translate3D(0, 0, 0)'},
//         { backgroundColor: '#440000', opacity: 0.3 },
//         { backgroundColor: '#000000', opacity: 1.0, transform: 'rotate(360deg) translate3D(0, 0, 0)'}
//     ], {
//       duration: 500,
//       iterations: Infinity,
//       easing: 'ease-in-out'
//     }
// );


