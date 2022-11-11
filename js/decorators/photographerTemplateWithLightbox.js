function photographerTemplateWithLightbox(photographerTemplate) {
    const params = new URLSearchParams(document.location.search);
    const idPhotographer = parseInt(params.get("idPhotographer"));
    
    if (photographerTemplate.photographer.photographerId === idPhotographer) {
        photographerTemplate.$wrapper.addEventListener('click', () => {
            const Player = new PlayerLightbox(photographerTemplate.photographer);
            Player.render();
        });
    }

    return photographerTemplate;
}