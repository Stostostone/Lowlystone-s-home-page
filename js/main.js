function setting() {
    // change the ability of the setting card
    const settingCard = document.querySelector('.setting-card');
    if (settingCard) {
        settingCard.style.display = settingCard.style.display === 'none' ? 'block' : 'none';
    }
}
