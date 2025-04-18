document.addEventListener("DOMContentLoaded", () => {
    // 初始化技能条动画
    const skillBars = document.querySelectorAll(".skill-level");
    skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });


    // 项目卡片悬停效果
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            anime({
                targets: card,
                scale: 1.05,
                duration: 300,
                easing: "easeInOutQuad",
            });
        });

        card.addEventListener("mouseleave", () => {
            anime({
                targets: card,
                scale: 1,
                duration: 300,
                easing: "easeInOutQuad",
            });
        });
    });

    // 联系方式的悬停效果
    const contactItems = document.querySelectorAll(".contact-item");
    contactItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            anime({
                targets: item,
                scale: 1.1,
                duration: 200,
                easing: "easeInOutQuad",
            });
        });

        item.addEventListener("mouseleave", () => {
            anime({
                targets: item,
                scale: 1,
                duration: 200,
                easing: "easeInOutQuad",
            });
        });
    });


    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const title = link.getAttribute('href').split('#')[1];
            window.location.href = `works.html#${title}`;
        });
    });
});
