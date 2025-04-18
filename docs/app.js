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

    // 添加滚动动画
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(".animate__animated");
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const isVisible =
                elementTop < window.innerHeight && elementBottom >= 0;

            if (isVisible) {
                element.classList.add("animate__fadeInUp");
            }
        });
    };

    // 监听滚动事件
    window.addEventListener("scroll", animateOnScroll);
    // 初始检查
    // animateOnScroll();

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
});
