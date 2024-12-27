// star-effect.js
(function() {
    const STAR_COUNT = 100; // 星星的数量
    const STAR_SIZE = 3; // 星星的大小
    const STAR_SPEED = 0.5; // 星星移动的速度

    let stars = [];
    let canvas;
    let ctx;

    function init() {
        canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.pointerEvents = 'none'; // 确保星星不会影响点击事件
        canvas.style.zIndex = '9999'; // 确保星星在最上层
        document.body.appendChild(canvas);

        ctx = canvas.getContext('2d');

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        createStars();
        animate();
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createStars() {
        for (let i = 0; i < STAR_COUNT; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * STAR_SIZE + 1,
                speed: Math.random() * STAR_SPEED + 0.1
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();

            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animate);
    }

    init();
})();
