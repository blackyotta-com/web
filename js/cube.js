        // Create floating tech particles
        const particlesContainer = document.getElementById('particles');
        const techWords = ['API', 'IoT', 'AI', 'ML', 'DC', 'SaaS', 'PaaS', 'IaaS', 'DevOps', 'Blockchain', '5G', 'VR', 'AR', 'UX', 'UI', 'DNS', 'CDN', 'SSL', 'VPN'];
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.textContent = techWords[Math.floor(Math.random() * techWords.length)];
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh';
            particle.style.animationDuration = (10 + Math.random() * 20) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particlesContainer.appendChild(particle);
            
            // Remove particle after animation completes
            setTimeout(() => {
                particle.remove();
            }, 30000);
        }
        
        // Create initial particles
        for (let i = 0; i < 30; i++) {
            createParticle();
        }
        
        // Keep creating new particles
        setInterval(createParticle, 1000);
        
        // Random color change for cube faces
        const faces = document.querySelectorAll('.cube-face');
        setInterval(() => {
            faces.forEach(face => {
                const hue = Math.floor(Math.random() * 60) + 180; // Blue-cyan range
                face.style.borderColor = `hsla(${hue}, 100%, 70%, 0.8)`;
                face.style.boxShadow = `0 0 15px hsla(${hue}, 100%, 70%, 0.6)`;
                face.style.textShadow = `0 0 10px hsla(${hue}, 100%, 70%, 0.8)`;
            });
        }, 3000);