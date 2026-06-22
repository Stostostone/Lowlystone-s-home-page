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
