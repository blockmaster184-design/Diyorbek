// RAQIBLAR BILAN TO'QNASHUV
Object.values(players).forEach(p => {
    // 1. Agar mening boshim raqibning dumi yoki tanasiga tegsa
    p.segments.forEach((s, index) => {
        let dist = Math.hypot(head.x - s.x, head.y - s.y);
        
        // Agar bosh raqibning tanasiga tegsa (index > 0 - bu tana degani)
        if(dist < 12) {
            alert("Siz yutqazdingiz! Ball: " + myScore);
            resetMySnake(); // Sahifani yangilamasdan, ilonni qayta tiklaymiz
        }
    });
});

// O'yinni yangilash funksiyasi (reload o'rniga)
function resetMySnake() {
    myScore = 0;
    mySegments = Array(15).fill({
        x: Math.random() * canvas.width, 
        y: Math.random() * canvas.height
    });
    document.getElementById("score").innerText = "0";
}




































