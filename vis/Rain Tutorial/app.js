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
          xs: -4 + Math.random() + 2,
          ys: Math.random() * 2 + 10
        })
      }
  
      var particles = [];
      for (var b = 0; b < maxParts; b++) {
        particles[b] = init[b];
      }
  
      function draw() {
        ctx.clearRect(0, 0, w, h);
        // for (var c = 0; c < particles.length; c++) {
        //   var p = particles[c];
        //   ctx.beginPath();
        //   ctx.moveTo(p.x, p.y);
        //   ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        //   if((p.y + p.l * p.ys)>(h-waterHeight)){
        //       pinkSplash(p.x + p.l * p.xs, p.y + p.l * p.ys);
        //   }
        //   ctx.stroke();
        // }
        // move();
        increasePool();
        drawSin();
      }
  
      function move() {
        for (var b = 0; b < particles.length; b++) {
          var p = particles[b];
          p.x += p.xs;
          p.y += p.ys;
          if (p.x > w || p.y > (h-waterHeight)) {
            p.x = Math.random() * w;
            p.y = -20;
          }
        }
      }

      function drawSin(){
        for(var xCoord = -1*waveMove; xCoord < (-1*waveMove+w); xCoord+=2){
            if(xCoord%10==0){
                console.log(xCoord);
            }
            ctx.beginPath();
            var s = Math.sin(xCoord/20);
            ctx.rect(xCoord+waveMove, h, 2, (waterHeight/2)+s*20);
            ctx.fillStyle = 'rgba(174,194,224,0.5)';
            ctx.fill();
        }
        waveMove+=waveVelocity;
      }

      function increasePool() {
        waterHeight -= 0.5;
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