// Mobile menu toggle
        document.querySelector('.mobile-menu-button').addEventListener('click', function() {
            // You would implement mobile menu toggle functionality here
            console.log('Mobile menu clicked');
        });
        
        // GSAP animations
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate elements on scroll
        gsap.utils.toArray('.holographic-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });
        
        // Hero section animation
        gsap.from(".glitch", {
            duration: 1.5,
            opacity: 0,
            y: -50,
            ease: "power3.out"
        });
        
        // Pulse animation for CTA buttons
        const buttons = document.querySelectorAll('.cyber-button');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    duration: 0.3,
                    scale: 1.05,
                    ease: "power2.out"
                });
            });
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    duration: 0.3,
                    scale: 1,
                    ease: "power2.out"
                });
            });
        });
        
        // Data stream animation
        const dataStream = document.querySelector('.data-stream');
        if (dataStream) {
            const lines = [
                "[INFO] Scanning network endpoints...",
                "[WARNING] Unusual traffic pattern detected from 192.168.1.45",
                "[ALERT] Potential brute force attempt on SSH service",
                "[ACTION] Automatically blocking suspicious IP",
                "[STATUS] Threat mitigated in 0.8 seconds"
            ];
            
            let currentLine = 0;
            
            function updateDataStream() {
                const terminal = dataStream.querySelector('.overflow-auto');
                if (terminal) {
                    const newLine = document.createElement('div');
                    newLine.className = 'font-mono text-xs mb-2';
                    
                    if (currentLine % 2 === 0) {
                        newLine.classList.add('text-green-400');
                    } else if (currentLine % 3 === 0) {
                        newLine.classList.add('text-red-400');
                    } else {
                        newLine.classList.add('text-yellow-400');
                    }
                    
                    newLine.textContent = lines[currentLine % lines.length];
                    terminal.appendChild(newLine);
                    
                    // Scroll to bottom
                    terminal.scrollTop = terminal.scrollHeight;
                    
                    currentLine++;
                    
                    // Random interval between 1-3 seconds
                    setTimeout(updateDataStream, 1000 + Math.random() * 2000);
                }
            }
            
            // Start the data stream
            setTimeout(updateDataStream, 1000);
        }