$(document).ready(function() {
    var canvas = $('#canvas')[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var w = canvas.width;
      var h = canvas.height;
      var waterHeight = 0;
      var waveMove = 1;
      var waveVelocity = 1;
      ctx.strokeStyle = 'rgba(174,194,224,0.5)';
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';

  
      var init = [];
      var maxParts = 1000;
      for (var a = 0; a < maxParts; a++) {
        init.push({
          x: Math.random() * w,
          y: Math.random() * h,
          l: Math.random() * 1,
          xs: -4 + Math.random() * 4 + 2,
          ys: Math.random() *10 + 10
        })
      }
  
      var particles = new Map();
      for (var b = 0; b < maxParts; b++) {
        particles.set(init[b].x, init[b]);
      }
  
      function draw() {
        ctx.clearRect(0, 0, w, h);
        for (var value of particles.values()) {
          var p = value;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
          if((p.y + p.l)>(h-waterHeight)){
              pinkSplash(p.x + p.l * p.xs, p.y + p.l * p.ys);
          }
          ctx.stroke();
        }
        move();
        increasePool();
        drawSin();
      }
  
      function move() {
        for (var value of particles.values()) {
          var p = value;
          p.x += p.xs*0.3;
          p.y += p.ys*0.3;
          if(p.x > w || p.y > h){
            p.x = Math.random() * w;
            p.y = -20;
          }
          
        }
      }

      function drawSin(){
        for(var xCoord = -1*waveMove; xCoord < (-1*waveMove+w); xCoord+=2){
            ctx.beginPath();
            var s = Math.sin(xCoord/20);
            ctx.rect(xCoord+waveMove, (h-waterHeight)-s*20, 2, h);
            ctx.fillStyle = 'rgba(174,194,224,0.5)';
            ctx.fill();
        }
        waveMove+=waveVelocity;
      }

      function increasePool() {
        waterHeight += 0.5;
      }

      function pinkSplash(x, y) {
        ctx.beginPath();
        var radius = 4;
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'pink';
        ctx.fill();
      }
  
      setInterval(draw, 30);
  
    }
  });