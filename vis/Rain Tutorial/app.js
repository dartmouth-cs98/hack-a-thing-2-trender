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
      var waveHeight = 10;
      var waveIncrease = true;
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
  
      var particles = [];
      var bubbles = [];
      for (var b = 0; b < maxParts; b++) {
        particles[b] = init[b];
        bubbles[b] = null;
      }
  
      function draw() {
        ctx.clearRect(0, 0, w, h);
        for(var c = 0; c < particles.length; c++){
          if(particles[c]!=null){
            var p = particles[c];
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
            if((p.y + p.l)>(h-waterHeight)){
                bubbles[c] = p;
                particles[c] = null;
            }
            ctx.stroke();
          }
        }
        for(var b = 0; b < bubbles.length; b++){
          var p = bubbles[b];
          if(p!=null){
            pinkSplash(p.x + p.l * p.xs, p.y + p.l * p.ys);
          }
        }
        move();
        increasePool();
        drawSin();
      }
  
      function move() {
        for(var c = 0; c < particles.length; c++){
          var p = particles[c];
          if(p!=null){
            p.x += p.xs*0.35;
            p.y += p.ys*0.35;
          }
        }
        for(var b = 0; b < bubbles.length; b++){
          var p = bubbles[b];
          if(p!=null){
            p.x += p.xs*0.1;
            p.y += p.ys*0.1;
            if(p.x > w || p.y > h){
              p.x = Math.random() * w;
              p.y = -20;
              bubbles[b] = null;
              particles[b] = p;
            }
          }
        }
      }

      function drawSin(){
        for(var xCoord = -1*waveMove; xCoord < (-1*waveMove+w); xCoord+=2){
            ctx.beginPath();
            var s = Math.sin(xCoord/20);
            var x = xCoord+waveMove;
            var y = (h-waterHeight)-s*waveHeight;
            if(collision(x, y)){
              ctx.rect(x, y+3, 2, h);
              ctx.fillStyle = 'rgba(174,194,224,0.5)';
              ctx.fill();
              ctx.beginPath();
              ctx.rect(x, y-8, 1, 1);
              ctx.fillStyle = 'rgba(174,194,224,0.5)';
              ctx.fill();
            }
            else{
              ctx.rect(x, y, 2, h);
              ctx.fillStyle = 'rgba(174,194,224,0.5)';
              ctx.fill();
            }
            
        }
        waveMove+=waveVelocity;
        if(waveIncrease){
          waveHeight+=0.5;
        }
        else{
          waveHeight-=0.5;
        }
        if(waveHeight>14){
          waveIncrease = false;
        }
        if(waveHeight <6){
          waveIncrease = true;
        }
      }

      function collision(x, y) {
        for(var c = 0; c < particles.length; c++){
          if(particles[c] !=null){
            var p = particles[c];
            if(p.x < x+2 && p.x > x-2){
              if(p.y > y-3){
                return true;
              }
            }
          }
        }
      }

      function increasePool() {
        waterHeight += 0.3;
      }

      function pinkSplash(x, y) {
        ctx.beginPath();
        var radius = 4;
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgbargb(255,20,147, 1)';
        ctx.fill();
      }
  
      setInterval(draw, 30);
  
    }
  });