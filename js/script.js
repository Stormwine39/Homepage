/* js/script.js */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. 循环打字机效果 ---
    const textElement = document.getElementById('typing-text');
    if (textElement) {
        // 定义要循环显示的句子
        const texts = [
            "「Hello! Welcome!」",
            "「Stay cool」",
            "「Miku Miku Go!!!」"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeLoop() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                // 删除文字
                textElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // 输入文字
                textElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            // 控制速度
            let typeSpeed = isDeleting ? 50 : 150;

            if (!isDeleting && charIndex === currentText.length) {
                // 打完了一句，暂停一下，准备删除
                typeSpeed = 2000; 
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // 删完了，切换到下一句
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // 循环索引
                typeSpeed = 500;
            }

            setTimeout(typeLoop, typeSpeed);
        }

        typeLoop();
    }

    // --- 2. 网站停留时间计时器 ---
    const timeElement = document.getElementById('stay-time');
    if (timeElement) {
        let seconds = 0;
        
        function updateTime() {
            seconds++;
            // 格式化时间 HH:MM:SS
            const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
            const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
            const s = (seconds % 60).toString().padStart(2, '0');
            
            timeElement.textContent = `${h} : ${m} : ${s}`;
        }

        setInterval(updateTime, 1000); // 每秒刷新
    }
    
    // --- 3. 详情页加载动画 (保留之前的逻辑) ---
    const progressBars = document.querySelectorAll('.progress-fill');
    if (progressBars.length > 0) {
        setTimeout(() => {
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
        }, 300);
    }
});