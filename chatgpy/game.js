const note = document.getElementById('note');  
const scoreElement = document.getElementById('score');  
let score = 0;  
let noteSpeed = 5; // 音符移动速度，单位：像素/帧  
  
function moveNote() {  
    const noteRect = note.getBoundingClientRect();  

    if (noteRect.left < -noteRect.width) {  
        // 音符移出屏幕，重置位置和状态  
        note.style.right = '-50px';  
        // 这里可以添加生成新音符的逻辑  
    } else {  
        // 音符还在屏幕上，继续移动  
        note.style.right = `${parseInt(note.style.right, 10) - noteSpeed}px`;  
    }  
}  
  
function checkHit() {  
    // 检查音符是否在打击区域（这里假设是屏幕中央的一个固定宽度区域）  
    const noteRect = note.getBoundingClientRect();  
    const hitAreaWidth = 100; // 假设打击区域宽度为100像素  
    const hitAreaLeft = (window.innerWidth - hitAreaWidth) / 2;  
    const hitAreaRight = hitAreaLeft + hitAreaWidth;  
  
    if (noteRect.right > hitAreaLeft && noteRect.left < hitAreaRight) {  
        // 音符在打击区域内，增加得分  
        score++;  
        scoreElement.textContent = `得分: ${score}`;  
        // 这里可以添加打击效果或声音  
    }  
}  
  
document.addEventListener('keydown', (event) => {  
    // 假设空格键是打击键  
    if (event.key === ' ') {  
        checkHit();  
    }  
});  
  
// 开始游戏循环  
setInterval(moveNote, 1000 / 60); // 假设60帧每秒