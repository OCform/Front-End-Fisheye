function mediaCardWithPlayer(mediaCard) {
    mediaCard.addEventListener('click', () => {
        const Player = new PlayerModal(mediaCard.media);
        Player.render()
    });
    return mediaCard;
}
