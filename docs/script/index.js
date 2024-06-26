function getBgURL(num) {
    if (location.host.includes("localhost")) {
        return `../asset/mihuan${num}.jpg`;
    }
    return `/yoki/asset/mihuan${num}.jpg`;
}
const nums = [1, 2, 3, 4, 5, 6, 7, 18, 22, 55, 78];
const readyNums = [];
// 预加载背景图
(function preloadBgImages(params) {
    nums.forEach((num) => {
        const img = new Image();
        img.src = `${getBgURL(num)}`;
        img.onload = function () {
            readyNums.push(num);
        };
    });
})();
// 定时切换背景图
function changeBg() {
    let index = 0;
    return setInterval(() => {
        if (index === readyNums.length - 1) {
            index = 0;
        } else {
            index += 1;
        }
        document.body.style.backgroundImage = `url(${getBgURL(
            readyNums[index],
        )})`;
    }, 2500);
}
let intervalId;
// 页面不可见的时候清除定时器
function handleVisibleChange() {
    if (document.visibilityState === "visible") {
        intervalId = changeBg();
    } else {
        if (intervalId) {
            clearInterval(intervalId);
        }
    }
}

handleVisibleChange();

document.addEventListener("visibilitychange", handleVisibleChange);

const HOST = "https://bucket2023.oss-cn-hangzhou.aliyuncs.com/yoki/gallery/";

const works = [
    {
        url: "芭蕾舞-306-9-苑文娜.jpg",
        name: "芭蕾舞者",
        type: "平面设计",
        tags: ["海报", "人物"],
    },
    {
        url: "冰淇淋-306-9-苑文娜_画板 1.jpg",
        name: "冰淇淋",
        type: "卡通设计",
        tags: ["食物", "卡通"],
    },
    {
        url: "餐饮-306-9-苑文娜-01.jpg",
        name: "汉堡",
        type: "卡通设计",
        tags: ["食物", "卡通"],
    },
    {
        url: "草莓-306-9-苑文娜.jpg",
        name: "草莓",
        type: "广告设计",
        tags: ["食物", "水果"],
    },
    {
        url: "春之韵306-9-苑文娜.jpg",
        name: "春之韵",
        type: "平面设计",
        tags: ["人物", "海报"],
    },
    {
        url: "调色包包-306-9-苑文娜.jpg",
        name: "包包",
        type: "平面设计",
        tags: ["商品", "广告"],
    },
    {
        url: "鳄鱼-306-9-苑文娜_画板 1.jpg",
        name: "小鳄鱼",
        type: "卡通设计",
        tags: ["动物", "卡通"],
    },
    {
        url: "耳机306-9-苑文娜.jpg",
        name: "耳机",
        type: "平面设计",
        tags: ["商品", "广告"],
    },
    {
        url: "防晒banner-306-9-苑文娜.jpg",
        name: "防晒霜",
        type: "平面设计",
        tags: ["商品", "广告", "Banner"],
    },
    {
        url: "丰收-306-9-苑文娜.jpg",
        name: "丰收",
        type: "摄影",
        tags: ["风景", "人文"],
    },
    {
        url: "服装类-306-9-苑文娜.jpg",
        name: "服装1",
        type: "平面设计",
        tags: ["商品", "人物", "Banner"],
    },
    {
        url: "服装banner306-9-苑文娜.jpg",
        name: "服装2",
        type: "平面设计",
        tags: ["商品", "人物", "Banner"],
    },
    {
        url: "公众号次图306-9-苑文娜.jpg",
        name: "公众号次图",
        type: "动漫设计",
        tags: ["人物", "社交媒体", "动漫"],
    },
    {
        url: "古声遗韵-306-9-苑文娜.jpg",
        name: "古声遗韵",
        type: "海报设计",
        tags: ["器物", "海报"],
    },
    {
        url: "寒战-306-9-苑文娜.jpg",
        name: "寒战",
        type: "海报设计",
        tags: ["电影", "人物", "海报"],
    },
    {
        url: "化妆品306-9-苑文娜.jpg",
        name: "化妆品",
        type: "平面设计",
        tags: ["商品", "广告"],
    },
    {
        url: "皇冠-306-9-苑文娜-01.jpg",
        name: "皇冠图表",
        type: "图表设计",
        tags: ["图表", "Icon"],
    },
    {
        url: "婚纱306-9-苑文娜.jpg",
        name: "婚纱",
        type: "平面设计",
        tags: ["人物", "海报"],
    },
    {
        url: "混合-306-9-苑文娜-01.jpg",
        name: "混合",
        type: "字体设计",
        tags: ["霓虹", "艺术字"],
    },
    {
        url: "家电热得快306-9-苑文娜.jpg",
        name: "热得快",
        type: "平面设计",
        tags: ["商品", "广告"],
    },
    {
        url: "家居banner306-9-苑文娜.jpg",
        name: "家居",
        type: "平面设计",
        tags: ["商品", "广告", "Banner"],
    },
    {
        url: "橘子306-9-苑文娜_画板 1.jpg",
        name: "橘子",
        type: "卡通设计",
        tags: ["卡通", "水果"],
    },
    {
        url: "卡通形象-306-9-苑文娜_画板 1.jpg",
        name: "绿粽",
        type: "卡通设计",
        tags: ["卡通", "食物"],
    },
    {
        url: "空调-306-9-苑文娜.jpg",
        name: "空调",
        type: "平面设计",
        tags: ["商品", "广告"],
    },
    {
        url: "美妆护肤封面306-9-苑文娜.jpg",
        name: "美妆护肤",
        type: "平面设计",
        tags: ["人物", "商品", "广告"],
    },
    {
        url: "清新女装306-9-苑文娜.jpg",
        name: "清新女装",
        type: "平面设计",
        tags: ["人物", "商品", "广告"],
    },
    {
        url: "人物插画绘制-306-9-苑文娜_画板 1.jpg",
        name: "人物插画",
        type: "插画设计",
        tags: ["人物", "卡通", "插画"],
    },
    {
        url: "闪电306-9-苑文娜.jpg",
        name: "闪电1",
        type: "平面设计",
        tags: ["风景", "人文"],
    },
    {
        url: "闪电306-0-苑文娜.jpg",
        name: "闪电2",
        type: "平面设计",
        tags: ["风景", "人文"],
    },
    {
        url: "时尚蒙版作业-306-9-苑文娜.jpg",
        name: "时尚蒙版",
        type: "平面设计",
        tags: ["人物", "人文"],
    },
    {
        url: "手表-306-9-苑文娜.jpg",
        name: "手表",
        type: "平面设计",
        tags: ["商品", "广告"],
    },
    {
        url: "寿司_306-9-苑文娜画板 1.jpg",
        name: "寿司",
        type: "卡通设计",
        tags: ["卡通", "食物"],
    },
    {
        url: "水壶306-9-苑文娜.jpg",
        name: "水壶",
        type: "平面设计",
        tags: ["商品", "人文", "器物"],
    },
    {
        url: "投资理财作业-306-9-苑文娜.jpg",
        name: "投资理财",
        type: "平面设计",
        tags: ["海报", "广告"],
    },
    {
        url: "吸尘器-306-9-苑文娜.jpg",
        name: "吸尘器",
        type: "平面设计",
        tags: ["商品", "器物", "广告"],
    },
    {
        url: "相机306-9-渊文娜.jpg",
        name: "相机",
        type: "平面设计",
        tags: ["商品", "人文", "广告"],
    },
    {
        url: "小人-306-9-苑文娜.jpg",
        name: "女孩",
        type: "卡通设计",
        tags: ["卡通", "人物"],
    },
    {
        url: "许愿灯-306-9-苑文娜_画板 1.jpg",
        name: "许愿灯",
        type: "卡通设计",
        tags: ["卡通", "人物"],
    },
    {
        url: "寻彩-306-9-苑文娜-01.jpg",
        name: "寻彩",
        type: "字体设计",
        tags: ["霓虹", "艺术字"],
    },
    {
        url: "椰子树作作业306-9-苑文娜.jpg",
        name: "椰子树",
        type: "平面设计",
        tags: ["Icon", "植物"],
    },
    {
        url: "一寸照306-9-苑文娜.jpg",
        name: "一寸照",
        type: "摄影",
        tags: ["人物", "证件照"],
    },
    {
        url: "音乐类app-306-9-苑文娜.jpg",
        name: "音乐海报",
        type: "平面设计",
        tags: ["海报", "风景"],
    },
    {
        url: "音乐banner306-9-苑文娜.jpg",
        name: "音乐播放器",
        type: "UI设计",
        tags: ["UI", "Layout"],
    },
    {
        url: "影像说-306-9-苑文娜.jpg",
        name: "影像说",
        type: "平面设计",
        tags: ["人物", "海报"],
    },
    {
        url: "用户年龄分布-306-9-苑文娜_画板 1.jpg",
        name: "年龄分布图",
        type: "图表设计",
        tags: ["图表", "数据分析"],
    },
    {
        url: "游戏界面-306-9-苑文娜_画板 1.jpg",
        name: "游戏界面",
        type: "UI设计",
        tags: ["UI", "游戏"],
    },
    {
        url: "招聘求职-306-9-苑文娜_画板 1.jpg",
        name: "招聘求职",
        type: "图表设计",
        tags: ["图表", "数据分析", "插画"],
    },
];
let swiper;

// 构造swiper
function genSwiper() {
    if (swiper) {
        swiper.destroy();
    }
    const isDesktop = detectDeviceType() === "Desktop";
    swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: isDesktop ? "horizontal" : "vertical",
        loop: true,
        autoplay: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        effect: "coverflow",
    });
}

// 输出 'Mobile' 或 'Desktop' 判断是不是移动端
function detectDeviceType() {
    const ua = navigator.userAgent;
    const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            ua,
        );
    return isMobile ? "Mobile" : "Desktop";
}

// 渲染作品
function renderWorks(works) {
    document.querySelector(".works").innerHTML = "";
    const eles = works.map((work) => genWorkEle(work));
    document.querySelector(".works").append(...eles);
    genSwiper();
}
// 构造作品ele
function genWorkEle(work) {
    const ele = document.createElement("div");
    ele.classList.add("work");
    ele.classList.add("work-loading");
    ele.classList.add("swiper-slide");
    ele.setAttribute("data-swiper-autoplay", "2000");
    const picURL = `${HOST}${encodeURIComponent(work.url)}`;
    const img = new Image();
    img.src = picURL;
    img.onload = function () {
        ele.classList.remove("work-loading");
        ele.style.backgroundImage = `url(${picURL})`;
    };
    return ele;
}

renderWorks(works);

// 获取所有Tag值 祛除重复
function getTags() {
    return Array.from(
        new Set(
            works.reduce((a, c) => {
                return a.concat(c.tags);
            }, []),
        ),
    );
}

let selectedTagVals = [];

// Tag点击事件
function handleTagClicked(e) {
    if (selectedTagVals.includes(e.target.innerText)) {
        const index = selectedTagVals.findIndex(
            (v) => v === e.target.innerText,
        );
        selectedTagVals.splice(index, 1);
        e.target.classList.remove("active");
    } else {
        selectedTagVals.push(e.target.innerText);
        e.target.classList.add("active");
    }
    const _works = getFilteredWorks(selectedTagVals);
    _works.length ? renderWorks(_works) : renderWorks(works);
}
// 判断是否有交集
function hasIntersection(arr1, arr2) {
    return arr1.some((item) => arr2.includes(item));
}
// 过滤作品
function getFilteredWorks(vals) {
    return works.filter((item) => {
        if (vals.includes(item.type)) {
            return true;
        }

        if (hasIntersection(item.tags, vals)) {
            return true;
        }

        return false;
    });
}
// 渲染Tag
function renderTags(tags) {
    const tagEles = tags.map((tag) => {
        const ele = document.createElement("div");
        ele.classList.add("tag");
        ele.innerText = tag;
        ele.addEventListener("click", handleTagClicked);
        return ele;
    });
    document.body.querySelector(".tags").append(...tagEles);
}
// 获取类型 祛除重复
function getTypes() {
    return Array.from(new Set(works.map((v) => v.type)));
}

renderTags(getTypes());
// renderTags(getTags());
