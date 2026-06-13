const btn = document.getElementById('runaway-btn');
const reveal = document.getElementById('reveal');
const container = document.getElementById('game-container');

let clicks = 0;
const maxClicks = 10; // Make her chase it 10 times

btn.addEventListener('mouseover', () => {
    if (clicks < maxClicks) {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
        
        clicks++;
        btn.innerText = `You're too slow! (${clicks}/${maxClicks})`;
    } else {
        btn.innerText = "Okay, okay... click me.";
    }
});

btn.addEventListener('click', () => {
    if (clicks >= maxClicks) {
        container.style.display = 'none';
        reveal.classList.remove('hidden');
    }
});
