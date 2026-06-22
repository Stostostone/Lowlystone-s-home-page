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
document.querySelector('.setting-button').addEventListener('click', setting);
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