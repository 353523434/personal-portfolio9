document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    
    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const message = chatInput.value.trim();
        if (message) {
            // Button animation effect
            const btn = chatForm.querySelector('.send-btn');
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
            btn.style.transform = "scale(0.9)";
            
            // Redirecting to Telegram
            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i>';
                btn.style.transform = "scale(1)";
                btn.style.background = "linear-gradient(135deg, #06d6a0, #118ab2)";
                
                window.open('https://t.me/+919919925462?text=' + encodeURIComponent(message), '_blank');
                
                chatInput.value = "";
                chatInput.placeholder = "Opening Telegram...";
                
                // Reset back to normal
                setTimeout(() => {
                    btn.innerHTML = '<i class="fa-brands fa-telegram"></i>';
                    btn.style.background = ""; // Rely on original CSS
                    chatInput.placeholder = "Ask me anything about my work...";
                }, 2000);
            }, 800);
        }
    });

    // 3D Tilt effect on Nav Cards for desktop
    if(window.innerWidth > 768) {
        const cards = document.querySelectorAll('.nav-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
                card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease";
            });
            
            card.addEventListener('mouseenter', () => {
                card.style.transition = "border-color 0.3s ease, box-shadow 0.3s ease";
            });
        });
    }
});
