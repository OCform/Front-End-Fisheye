class LightboxModal {
    constructor(photographer) {
        this._photographer = photographer;
        
        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('lightbox-wrapper'); 
        
        this.$lightboxWrapper = document.querySelector('.photographer_lightbox');
        this.$lightboxClose = this.$lightboxWrapper.querySelector('body > div > button.close-btn');
        this.$lightboxNext = this.$lightboxWrapper.querySelector('body > div > button.next-btn');
        this.$lightboxPrev = this.$lightboxWrapper.querySelector('body > div > button.prev-btn');
    }
    get photographer() {
        return this._photographer;
    }
    
    get type() {
        return this._photographer.type;
    }
    
    onCloseButton() {
        this.$lightboxClose
        .addEventListener('click', () => {
            this.$lightboxWrapper.classList.remove('photographer_lightbox_on');
            this.$wrapper.innerHTML = "";
            this.$lightboxWrapper.removeChild(this.$wrapper);
            this.$lightboxClose.style.display = 'none';
            this.$lightboxNext.style.display = 'none';
            this.$lightboxPrev.style.display = 'none';
        });
    }
    createLightbox() {
        const $media = new LightboxModal(media);
        const $list = $media.photographer.$mediaList;

        this.index = $list.indexOf(this.photographer);

        this.slide = this.index;
        
        this.$lightboxNext
        .addEventListener('click', (e) => {
            e.preventDefault();
            this.slide++;                
            if(this.slide > $list.length-1) {this.slide = 0;}
            console.log(this.$wrapper);
            if(this.$lightboxWrapper.children) this.$lightboxWrapper.removeChild(this.$wrapper);
            const Lightbox = new LightboxModal($list[this.slide]);
            Lightbox.render();
        });

        this.$lightboxPrev
        .addEventListener('click', (e) => { 
            e.preventDefault();
            this.slide--;                
            if(this.slide < 0) {this.slide = $list.length-1;}
            this.$lightboxWrapper.removeChild(this.$wrapper);
            const Lightbox = new LightboxModal($list[this.slide]);
            Lightbox.render();
        });

        this.image = document.createElement('img');                
        this.video = document.createElement('video');
        if(this._photographer.type === 'image') {
            const player = `
            <div>
                <img 
                    src="${$list[this.slide].image}" 
                    alt="${$list[this.slide].title}"
                >
                ${$list[this.slide].title}
            </div>
            `;            
            this.$wrapper.innerHTML = player;
        } else if(this._photographer.type === 'video') {
            const player = `
            <div>
                <video width="320" height="240" controls>
                    <source src="${$list[this.slide].video}" type="video/mp4">                    
                    Your browser does not support the video tag.
                </video> 
                <span>${$list[this.slide].title}</span>
            </div>                              
            `;
            const caption = `<span><div class="media-card-caption">${$list[this.slide].title}</div></span>`;
            this.$wrapper.innerHTML = player;
        }  else {
            this.$wrapper.parentNode.removeChild(div);
            throw new Error('Aucune image, ni video !');
        }
        
        this.$lightboxWrapper.classList.add('photographer_lightbox_on');
        this.$lightboxWrapper.appendChild(this.$wrapper);
        this.$lightboxClose.style.display = 'block';
        this.$lightboxNext.style.display = 'block';
        this.$lightboxPrev.style.display = 'block';
        
        this.onCloseButton();        
    }
    
    render() {        
        this.createLightbox();
    }
}
