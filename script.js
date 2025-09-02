// Version check (keeping original functionality)
(async function checkForUpdates() {
    const currentVersion = "2.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 
    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;
        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

// Apology messages array
const apologyMessages = [
    "Pretty please? 🥺",
    "I promise I'll be better! 🙏",
    "Look how sorry I am! 😢",
    "I brought virtual cookies! 🍪",
    "I'm really really sorry! 💔",
    "Can we be friends again? 🤝",
    "I miss talking to you... 😭",
    "Please don't stay mad... 🥹",
    "I learned my lesson! 📚",
    "Forgiveness = free hugs! 🤗",
    "I'll do anything! 🙇‍♂️",
    "Look at this cute face! 🥺",
    "I'm truly sorry, cutie! 💝",
    "Pretty pretty please? ✨"
];

// Different sorry GIFs to rotate through
const sorryGifs = [
    "https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif",
    "https://media.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.gif", 
    "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif",
    "https://media.giphy.com/media/10rsLtGrOcCR0s/giphy.gif"
];

let messageIndex = 0;
let currentGifIndex = 0;

function handleNotYetClick() {
    const notYetButton = document.getElementById('no-button');
    const forgiveButton = document.querySelector('.forgive-button');
    const mainText = document.getElementById('main-text');
    const mainGif = document.getElementById('main-gif');
    
    // Change the message
    notYetButton.textContent = apologyMessages[messageIndex];
    messageIndex = (messageIndex + 1) % apologyMessages.length;
    
    // Make forgive button bigger and more appealing
    const currentSize = parseFloat(window.getComputedStyle(forgiveButton).fontSize);
    forgiveButton.style.fontSize = `${Math.min(currentSize * 1.2, 60)}px`;
    forgiveButton.style.padding = '20px 40px';
    
    // Change GIF occasionally
    if (messageIndex % 3 === 0) {
        currentGifIndex = (currentGifIndex + 1) % sorryGifs.length;
        mainGif.src = sorryGifs[currentGifIndex];
    }
    
    // Add shake effect to not-yet button
    notYetButton.style.animation = 'shake 0.5s';
    setTimeout(() => {
        notYetButton.style.animation = '';
    }, 500);
    
    // Make the main text more pleading after several clicks
    if (messageIndex > 5) {
        mainText.textContent = "Please please please? 🥺👉👈";
        mainText.style.fontSize = '2.2em';
    }
}

function handleForgiveClick() {
    // Redirect to forgiveness page
    document.body.innerHTML = `
        <div style="text-align: center; margin-top: 10vh; font-family: 'Comic Sans MS', cursive;">
            <div style="font-size: 5em;">🥳</div>
            <h1 style="color: #2ecc71; font-size: 3.5em; margin: 20px 0;">Yay! Thank you! ❤️</h1>
            <p style="font-size: 1.8em; color: #8e44ad;">You're the sweetest! I promise to be better! 🥺💕</p>
            <div style="margin-top: 30px;">
                <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" 
                     style="width: 400px; border-radius: 20px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);"
                     alt="Happy celebration">
            </div>
            <div style="margin-top: 30px; font-size: 2em;">
                💖 Thank you for forgiving me! 💖
            </div>
        </div>
    `;
    
    // Add celebration confetti effect
    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}vw;
                width: 10px;
                height: 10px;
                background: ${['#ff69b4', '#ffd700', '#00ff7f', '#ff6347', '#9370db'][Math.floor(Math.random() * 5)]};
                animation: confetti-fall 3s linear forwards;
                z-index: 1000;
                border-radius: 50%;
            `;
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 100);
    }
}

// Create floating hearts background
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = ['💕', '💖', '💗', '💝'][Math.floor(Math.random() * 4)];
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    document.getElementById('hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Create floating background decorations
function createFloatingDecoration() {
    const decorations = ['🌸', '🦋', '🌺', '🌷', '🌻', '🌼', '✨', '💫', '🌈'];
    const decoration = document.createElement('div');
    decoration.innerHTML = decorations[Math.floor(Math.random() * decorations.length)];
    decoration.className = 'floating-element';
    decoration.style.left = Math.random() * 100 + 'vw';
    decoration.style.top = Math.random() * 100 + 'vh';
    decoration.style.animationDelay = Math.random() * 15 + 's';
    
    document.getElementById('bg-decoration').appendChild(decoration);
    
    setTimeout(() => {
        decoration.remove();
    }, 15000);
}

// Create hearts every 2 seconds
setInterval(createHeart, 2000);

// Create floating decorations every 3 seconds
setInterval(createFloatingDecoration, 3000);

// Initial hearts and decorations
for (let i = 0; i < 5; i++) {
    setTimeout(createHeart, i * 400);
    setTimeout(createFloatingDecoration, i * 600);
}

// Add cute mouse follow effect
document.addEventListener('mousemove', (e) => {
    const spark = document.createElement('div');
    spark.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 6px;
        height: 6px;
        background: #ff69b4;
        border-radius: 50%;
        pointer-events: none;
        animation: spark-fade 1s ease-out forwards;
        z-index: 999;
    `;
    document.body.appendChild(spark);
    
    setTimeout(() => spark.remove(), 1000);
});
