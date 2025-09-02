// Confetti animation for celebration page
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}vw;
                width: ${Math.random() * 8 + 6}px;
                height: ${Math.random() * 8 + 6}px;
                background: ${['#ff69b4', '#ffd700', '#00ff7f', '#ff6347', '#9370db', '#00bfff'][Math.floor(Math.random() * 6)]};
                animation: confetti-fall ${Math.random() * 2 + 3}s linear forwards;
                z-index: 1000;
                border-radius: 50%;
            `;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 50);
    }
}

// Auto-start confetti when page loads
document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
    
    // Continue confetti every 3 seconds
    setInterval(createConfetti, 3000);
});

// Add dynamic confetti CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confetti-fall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
