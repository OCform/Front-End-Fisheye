class LightboxModal {
    constructor(photographer) {
        this.photographer = photographer;
        
        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('lightbox-wrapper');

        this.$modalWrapper = document.querySelector('.modal');
        this.$modalClose = this.$modalWrapper.querySelector('body > div > button.close-btn');
        this.$modalNext = this.$modalWrapper.querySelector('body > div > button.next-btn');
        this.$modalPrev = this.$modalWrapper.querySelector('body > div > button.prev-btn');
    }
    
    onCloseButton() {
        this.$modalClose
        .addEventListener('click', () => {
            this.$modalWrapper.classList.remove('modal-on');
            this.$wrapper.innerHTML = "";
            this.$modalClose.style.display = 'none';
            this.$modalNext.style.display = 'none';
            this.$modalPrev.style.display = 'none';
        });
    }

    onNextButton() {
        const med = new LightboxModal(media);
        const ListMedias = med.photographer.$mediaList;
        let n = ListMedias.indexOf(this.photographer);
                
        this.$modalNext
        .addEventListener('click', () => {
            
            n += 1;            
            if (n > ListMedias.length-1) {n = 0;}
            console.log('counter',n);
            console.log(`${this.photographer.type}`);
            if(`${this.photographer.type}`=== 'image') {
                this.photographer._type = 'image';
                const image = document.createElement('img');
                image.setAttribute('src', `${ListMedias[n].view}`);
                image.setAttribute('alt', `${ListMedias[n].title}`);
                this.$modalWrapper.classList.remove('modal-on');
                this.$wrapper.innerHTML = '';
                this.$wrapper.append(image);
                
                console.log(image.src);            
            } 
            
            if(this.photographer.type === 'video') {
                this.photographer._type = 'video';
                const video = document.createElement('video');
                video.controls = 'controls';
                const source = document.createElement('source');
                video.appendChild(source);
                source.setAttribute('src', `${ListMedias[n].view}`);
                // source.setAttribute('alt', `${ListMedias[n].title}`);
                video.play();
                this.$modalWrapper.classList.remove('modal-on');
                this.$wrapper.innerHTML = '';
                this.$wrapper.append(video);
                this.$wrapper.innerHTML = `
                    <video controls>
                        <source
                            src="${source.src}"
                            alt="${source.alt}"                            
                            type="video/mp4"
                            Votre navigateur ne lit pas ce format video.                    
                        >
                    </video>
                    `;          
                
                console.log(video.src);
            } else {
                throw new Error('Aucune image, ni video !');
            }
        });
        
    }

    onPrevButton() {
        const med = new LightboxModal(media);
        const ListMedias = med.photographer.$mediaList;
        let n = ListMedias.indexOf(this.photographer);
        
        this.$modalPrev
        .addEventListener('click', () => {
            
            n -= 1;
            if(n < 0) n = ListMedias.length-1;
            console.log('counter',n);
            console.log(`${this.photographer.type}`);
            if(`${this.photographer.type}`=== 'image') {
                this.photographer._type = 'image';
                const image = document.createElement('img');
                image.setAttribute('src', `${ListMedias[n].view}`);
                image.setAttribute('alt', `${ListMedias[n].title}`);
                this.$modalWrapper.classList.remove('modal-on');
                this.$wrapper.innerHTML = '';
                this.$wrapper.append(image);
                                
                console.log(image.src);            
            }
            
            if(`${this.photographer.type}`=== 'video') {
                this.photographer._type = 'video';
                const video = document.createElement('video');
                video.controls = 'controls';
                const source = document.createElement('source');
                video.appendChild(source);
                source.setAttribute('src', `${ListMedias[n].view}`);
                source.setAttribute('alt', `${ListMedias[n].title}`);
                video.play();
                this.$wrapper.innerHTML = '';
                this.$wrapper.parentNode.removeChild(div);
                this.$modalWrapper.classList.remove('modal-on');                
                this.$wrapper.append(video);
                this.$wrapper.innerHTML = `
                    <video controls>
                        <source
                            src="${source.src}"
                            alt="${source.alt}"                            
                            type="video/mp4"
                            Votre navigateur ne lit pas ce format video.                    
                        >
                    </video>
                    `;            
                                
                console.log(source.src);
            } else {
                throw new Error('Aucune image, ni video !');
            }

        });
        
    }
    
    createLightbox() {
        const med = new LightboxModal(media);
        const ListMedias = med.photographer.$mediaList;
        let n = ListMedias.indexOf(this.photographer);
        
        if(`${this.photographer.type}`=== 'image') {
            this.photographer._type = 'image';
            const image = document.createElement('img');
            image.setAttribute('src', `${ListMedias[n].view}`);
            image.setAttribute('alt', `${ListMedias[n].title}`);
            this.$wrapper.innerHTML = '';
            this.$wrapper.append(image);
            console.log(image.src); 
            // this.photographer._type = '';           
        } else if(`${this.photographer.type}`=== 'video') {
            this.photographer._type = 'video';
            const video = document.createElement('video');
            video.controls = 'controls';
            const source = document.createElement('source');
            video.appendChild(source);
            source.setAttribute('src', `${ListMedias[n].view}`);
            // source.setAttribute('alt', `${ListMedias[n].title}`);
            video.play();
            this.$wrapper.innerHTML = '';
            this.$wrapper.append(video);
            console.log(source.src);
            // this.photographer._type = '';
        } else {
            this.$wrapper.parentNode.removeChild(div);
            throw new Error('Aucune image, ni video !');
        }
        
        
        
        //     this.$wrapper.innerHTML = `
        //         <img 
        //             src="${ListMedias[n].view}"
        //             alt="${ListMedias[n].title}"                    
        //         >
        //     `;
        
        //     this.$wrapper.innerHTML = `
        //         <video controls>
        //             <source
        //                 src="${ListMedias[n].view}"
        //                 alt="${ListMedias[n].title}"                            
        //                 type="video/mp4"
        //                 Votre navigateur ne lit pas ce format video.                    
        //             >
        //         </video>
        //     `;
        // } else {
        //     this.$wrapper.parentNode.removeChild(div);
        //     throw new Error('Aucune image, ni video !');
        // }
        
        this.$modalWrapper.classList.add('modal-on');
        this.$modalWrapper.appendChild(this.$wrapper);
        this.$modalClose.style.display = 'block';
        this.$modalNext.style.display = 'block';
        this.$modalPrev.style.display = 'block';
        
        this.onCloseButton();
        this.onNextButton();
        this.onPrevButton();
        
    }
    
    render() {        
        this.createLightbox();
    }
}
