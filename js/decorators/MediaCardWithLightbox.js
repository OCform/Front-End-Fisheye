class MediaCardWithLightbox {
    constructor(mediaCard) {
        mediaCard
            .$wrapper.addEventListener('click', (e) => {
                e.preventDefault();
                const Lightbox = new LightboxModal(mediaCard.media);
                Lightbox.render();
        });
        return mediaCard;
    }
}