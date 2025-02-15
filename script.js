document.addEventListener("DOMContentLoaded", function() {
    const bgm = document.getElementById("bgm");
    const toggleBgm = document.getElementById("toggleBgm");
    const volumeControl = document.getElementById("volumeControl");

    // ⭐ 星をランダムに配置する関数
    function createStars() {
        const starContainer = document.createElement("div");
        starContainer.classList.add("star-container");
        document.body.appendChild(starContainer);

        for (let i = 0; i < 50; i++) { // 星の数を調整
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2〜5秒の範囲でランダム
            starContainer.appendChild(star);
        }
    }
    
    // 🌟 光が流れるエフェクト
    function createLightEffect() {
        const light = document.createElement("div");
        light.classList.add("light-effect");
        document.body.appendChild(light);
    }

    createStars(); // 星を生成
    createLightEffect(); // 光エフェクトを追加
    
    // 音量を設定
    volumeControl.addEventListener("input", function() {
        bgm.volume = this.value;
    });

    // BGMの再生・停止
    toggleBgm.addEventListener("click", function() {
        if (bgm.paused) {
            bgm.play();
            toggleBgm.textContent = "⏸ 停止";
        } else {
            bgm.pause();
            toggleBgm.textContent = "🎵 再生";
        }
    });

    // デフォルト音量を設定
    bgm.volume = 0.5;
});
