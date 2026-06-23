function setting() {
    // change the ability of the setting card
    const settingCard = document.querySelector('.setting-card');

    if (!settingCard) {
        return;
    }

    const isOpen = settingCard.classList.contains("is-open");
    
    if (isOpen) {
        settingCard.classList.remove("is-open");
        settingCard.classList.add("is-closing");

        settingCard.addEventListener('animationend', () => {
            settingCard.classList.remove("is-closing");
        }, { once: true });
    }
    else {
        settingCard.classList.remove("is-closing");
        settingCard.classList.add("is-open");
    }
}
document.querySelector('.setting-toggle-button').addEventListener('click', setting);
function showPage(pageClass) {
    const pages = document.querySelectorAll(".page-section");
    const targetPage = document.querySelector(pageClass);

    if (!targetPage) {
        return;
    }

    pages.forEach((page) => {
        page.classList.remove("is-active");
    });

    targetPage.classList.add("is-active");
}

document.querySelector(".menu-button").addEventListener("click", () => {
    showPage(".menu-page");
});

document.querySelector(".tools-button").addEventListener("click", () => {
    showPage(".tools-page");
});

document.querySelector(".about-button").addEventListener("click", () => {
    showPage(".about-page");
});

function github() {
    window.open("https://github.com/Stostostone", "_blank");
}
document.querySelector(".github-link").addEventListener("click", github);
function email() {
    window.open("mailto:3587959529@qq.com", "_blank");
}
document.querySelector(".email-link").addEventListener("click", email);
function bilibili() {
    window.open("https://space.bilibili.com/440117109", "_blank");
}
document.querySelector(".bilibili-link").addEventListener("click", bilibili);
function steam() {
    window.open("https://steamcommunity.com/profiles/76561198990417401/", "_blank");
}
document.querySelector(".steam-link").addEventListener("click", steam);
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const yearString = now.getFullYear();
    document.getElementById("time").textContent = timeString;
    document.getElementById("year").textContent = yearString;
}
setInterval(updateTime, 1000);
function suggestion() {
    const now = new Date();
    const hour = now.getHours();
    let suggestion = "";
    if (hour >= 6 && hour < 12) {
        suggestion = "Have a nice day!";
    } else if (hour >= 12 && hour < 18) {
        suggestion = "Good afternoon!";
    } else {
        suggestion = "It's time to go to bad ";
    }
    document.getElementById("time-suggestion").textContent = suggestion;
}
setInterval(suggestion, 1000);
function weather() {
    fetch('https://wttr.in/永康?format=j1&lang=zh')
        .then(r => r.json())
        .then(data => {
            const desc = data.current_condition[0].weatherDesc[0].value;
            let imgSrc = 'assets/icons/sunny.png';
            if (desc.includes('晴')) imgSrc = 'assets/icons/sunny.png';
            else if (desc.includes('云') || desc.includes('阴')) imgSrc = 'assets/icons/cloudy.png';
            else if (desc.includes('雨')) imgSrc = 'assets/icons/rain.png';
            else if (desc.includes('雪')) imgSrc = 'assets/icons/snowy.png';
            else if (desc.includes('雾') || desc.includes('霾')) imgSrc = 'assets/icons/foggy.png';
            document.querySelector('.weather-img').src = imgSrc;
            // 如果要显示文字
            const temp = data.current_condition[0].temp_C;
            document.getElementById('weather').textContent = `${desc} ${temp}°C`;
        });
}
weather();
setInterval(weather, 600000); // 每10分钟更新一次