function mediaCardWithLightbox(mediaCard) {
    const params = new URLSearchParams(document.location.search);
    const idPhotographer = parseInt(params.get("idPhotographer"));
    
    if (mediaCard.media.photographerId === idPhotographer) {
        mediaCard.$wrapper.addEventListener('click', () => {
            const Player = new LightboxModal(mediaCard.media);
            Player.render();
        });
    }

    return mediaCard;
}