  // Confetti animation
  const celebrationCanvas = document.getElementById('celebrationCanvas');
  const ctx = celebrationCanvas.getContext('2d');
  
  celebrationCanvas.width = window.innerWidth;
  celebrationCanvas.height = window.innerHeight;
  
  const confettiColors = ['#ff1e56', '#ffac41', '#e84a5f', '#2a1a5e', '#fbbbad', '#a28497'];
  const confettiCount = 150;
  const confetti = [];
  
  class Confetti {
      constructor() {
          this.x = Math.random() * celebrationCanvas.width;
          this.y = Math.random() * -celebrationCanvas.height;
          this.size = Math.random() * 8 + 3;
          this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
          this.speed = Math.random() * 3 + 1;
          this.rotation = Math.random() * 360;
          this.rotationSpeed = Math.random() * 5 - 2.5;
      }
      
      update() {
          this.y += this.speed;
          this.rotation += this.rotationSpeed;
          if (this.y > celebrationCanvas.height) {
              this.y = Math.random() * -celebrationCanvas.height;
              this.x = Math.random() * celebrationCanvas.width;
          }
      }
      
      draw() {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation * Math.PI / 180);
          ctx.fillStyle = this.color;
          ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
          ctx.restore();
      }
  }
  
  for (let i = 0; i < confettiCount; i++) {
      confetti.push(new Confetti());
  }
  
  function animate() {
      ctx.clearRect(0, 0, celebrationCanvas.width, celebrationCanvas.height);
      
      confetti.forEach(conf => {
          conf.update();
          conf.draw();
      });
      
      requestAnimationFrame(animate);
  }
  
  animate();
  
  // Birthday wish button effect
  const birthdayWishBtn = document.getElementById('birthdayWish');
  
  birthdayWishBtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Create fireworks effect
      for (let i = 0; i < 30; i++) {
          setTimeout(() => {
              createFirework();
          }, i * 100);
      }
      
      alert("🎉 Your birthday wish for Eddy has been sent to the universe! 🎂");
  });
  
  function createFirework() {
      const firework = document.createElement('div');
      firework.classList.add('confetti');
      
      // Random position
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      
      // Random color
      const colors = ['#FF1493', '#00BFFF', '#7CFC00', '#FFD700', '#FF4500', '#9400D3'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      firework.style.left = `${posX}px`;
      firework.style.top = `${posY}px`;
      firework.style.backgroundColor = randomColor;
      firework.style.width = `${Math.random() * 15 + 5}px`;
      firework.style.height = firework.style.width;
      
      document.body.appendChild(firework);
      
      setTimeout(() => {
          document.body.removeChild(firework);
      }, 5000);
  }
  
  // Music toggle
  const musicToggle = document.getElementById('musicToggle');
  let audio;
  let isPlaying = false;
  
  musicToggle.addEventListener('click', function() {
      if (!audio) {
          audio = new Audio('https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.8/lottie.min.js');  // This is just a placeholder, it won't actually play music
          audio.loop = true;
      }
      
      if (isPlaying) {
          audio.pause();
          this.classList.remove('playing');
      } else {
          audio.play().catch(e => console.log('Audio play was prevented: ', e));
          this.classList.add('playing');
      }
      
      isPlaying = !isPlaying;
  });
  
  // Window resize event for canvas
  window.addEventListener('resize', function() {
      celebrationCanvas.width = window.innerWidth;
      celebrationCanvas.height = window.innerHeight;
  });
