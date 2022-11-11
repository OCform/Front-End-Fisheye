class PlayerLightbox {
    constructor(photographer) {
        this.photographer = photographer;

        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('player_wrapper');

        this.$lightboxWrapper = document.querySelector('.lightbox');
        this.slideIndex = 1;
        
    }
    
    showSlides(n) {
        let i;
        //this.slides = document.getElementsByClassName(".player_wrapper button::nth-child(2)");

        if (n > this.$wrapper.length) { this.slideIndex = 1; }

        if (n < 1) { this.slideIndex = this.$wrapper.length; }

        for (i = 0; i < this.$wrapper.length; i++) {
            this.$wrapper[i].style.display = "none";
        }

        this.$wrapper[this.slideIndex - 1].style.display = "block";
        showSlides(this.slideIndex);
    }
    
    onCloseButton() {
        this.$wrapper
            .querySelector('.close-btn')
            .addEventListener('click', () => {
                this.$lightboxWrapper.classList.remove('lightbox_on');
                this.$wrapper.innerHTML = "";
            });
    }

    onCurrentSlideButton(n) {
        this.$wrapper
            .querySelector('.media_wrapper')
            .addEventListener('click', () => {
                showSlides(this.slideIndex = n);                
            });
    }
    
    onSlideRightButton(n) {
        this.$wrapper
            .querySelector('.slide-right-btn')
            .addEventListener('click', () => {
                console.log('THIS IS THE RIGHT BUTTON');
                showSlides(this.slideIndex += n);
            });
    }

    onSlideLeftButton() {
        this.$wrapper
            .querySelector('.slide-left-btn')
            .addEventListener('click', () => {
                console.log('THIS IS THE LEFT BUTTON');
                showSlides(this.slideIndex += n);
            });
    }
    
    createPlayer() {        
        if(`${this.photographer.type}`=== 'image' && this.$wrapper !== '') {
            const player = `
                <div class="player">
                    <button type="button" class="close-btn"><em class="fa-solid fa-xmark"></em><button>
                    <img 
                        src="${this.photographer.view}"
                        alt="${this.photographer.title}"                    
                    >
                    <button type="button" class="slide-left-btn"><em class="fa-solid fa-chevron-left"></em><button>
                    <button type="button" class="slide-right-btn"><em class="fa-solid fa-chevron-right"></em><button>                
                </div>
            `;
            this.$wrapper.innerHTML = player;
        } else if(`${this.photographer.type}`=== 'video' && this.$wrapper !== '') {
            const player = `
                <div class="player">
                    <button type="button" class="close-btn"><em class="fa-solid fa-xmark"></em><button>
                    <video controls>
                        <source 
                            src="${this.photographer.view}"
                            type="video/mp4"
                            Votre navigateur ne lit pas ce format video.                    
                        >
                    </video>                    
                    <button type="button" class="slide-left-btn"><em class="fa-solid fa-chevron-left"></em><button>
                    <button type="button" class="slide-right-btn"><em class="fa-solid fa-chevron-right"></em><button>                
                </div>
            `;
            this.$wrapper.innerHTML = player;
        } else {
            this.$wrapper.parentNode.removeChild(div);
            throw new Error('Aucune image, ni video !');
        }

        this.$lightboxWrapper.classList.add('lightbox_on');
        this.$lightboxWrapper.appendChild(this.$wrapper);

        this.onCloseButton();
        this.showSlides();
        this.onCurrentSlideButton();
        this.onSlideRightButton();
        this.onSlideLeftButton();
    }

    render() {
        this.createPlayer();
    }
}