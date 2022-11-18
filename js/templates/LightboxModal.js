class LightboxModal {
    constructor(photographer) {
        this.photographer = photographer;

        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('lightbox-wrapper');

        this.$modalWrapper = document.querySelector('.modal');
        this.arrayIndex = [];
        this.slideIndex = 1;
        this.index = this.photographer.id;
    }

    // get photographer() {
    //     return this.photographer;
    // }
    // get arrayIndex() {
    //     return this.arrayIndex;
    // }
    // get slideIndex() {
    //     return this.slideIndex;
    // }
    
    // set arrayIndex(n) {
    //     this.index = this.arrayIndex.pussh(this.photographer.id);
    // }

    // set slideIndex(n) {
    //     this.arrayIndex[this.arrayIndex.length] = n;
    // }
    
    // showSlides(slideIndex)

    // plusSlides(n) {
        
    //     showSlides(slideIndex += n);
    // }

    // currentSlide(n) {let slideIndex = 1;
    //     showSlides(slideIndex = n);
    // }

    // showSlides(n) {
    //     let slideIndex = 1;
    //     let i;
    //     let slides = document.getElementsByClassName("slides");

    //     if (n > slides.length) { slideIndex = 1; }

    //     if (n < 1) { slideIndex = slides.length }

    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }

    //     slides[slideIndex - 1].style.display = "block";
    // }

    onCloseButton() {
        this.$wrapper
            .querySelector('.close-btn')
            .addEventListener('click', () => {
                this.$modalWrapper.classList.remove('modal-on');
                this.$wrapper.innerHTML = "";
            });
    }

    createLightbox() {
        console.log('Current slide id', this.photographer.id);
        let plusSlides = (n) => {console.log('Current slide id', this.photographer.id);};
        
        if(`${this.photographer.type}`=== 'image' && this.$wrapper !== '') {
            const lightbox = `
                <div class="lightbox">
                    <button type="button" class="close-btn"><em class="fa-solid fa-xmark"></em><button>
                    <img 
                        src="${this.photographer.view}"
                        alt="${this.photographer.title}"                    
                    >
                    <button type="button" class="slide-left-btn" onclick="plusSlides(1)"><em class="fa-solid fa-chevron-left"></em><button>
                    <button type="button" class="slide-right-btn" onclick="plusSlides(-1)"><em class="fa-solid fa-chevron-right"></em><button>                
                </div>
            `;
            this.$wrapper.innerHTML = lightbox;
        } else if(`${this.photographer.type}`=== 'video' && this.$wrapper !== '') {
            const lightbox = `
                <div class="lightbox">
                    <button type="button" class="close-btn"><em class="fa-solid fa-xmark"></em><button>
                    <video controls>
                        <source 
                            src="${this.photographer.view}"
                            type="video/mp4"
                            Votre navigateur ne lit pas ce format video.                    
                        >
                    </video>                    
                    <button type="button" class="slide-left-btn" onclick="plusSlides(1)"><em class="fa-solid fa-chevron-left"></em><button>
                    <button type="button" class="slide-right-btn" onclick="plusSlides(-1)"><em class="fa-solid fa-chevron-right"></em><button>                
                </div>
            `;
            this.$wrapper.innerHTML = lightbox;
        } else {
            this.$wrapper.parentNode.removeChild(div);
            throw new Error('Aucune image, ni video !');
        }

        this.$modalWrapper.classList.add('modal-on');
        this.$modalWrapper.appendChild(this.$wrapper);

        this.onCloseButton();
    }

    render() {
        this.createLightbox();
    }
}









// class LightboxModal {
//     constructor(photographer) {
//         this.photographer = photographer;

//         this.$wrapper = document.createElement('div');
//         this.$wrapper.classList.add('player_wrapper');

//         this.$lightboxWrapper = document.querySelector('.modal');
        
        
//     }
    
//     showSlides(n) {
//         let i;
//         //this.slides = document.getElementsByClassName(".player_wrapper button::nth-child(2)");

//         if (n > this.$wrapper.length) { this.slideIndex = 1; }

//         if (n < 1) { this.slideIndex = this.$wrapper.length; }

//         for (i = 0; i < this.$wrapper.length; i++) {
//             this.$wrapper[i].style.display = "none";
//         }

//         this.$wrapper[this.slideIndex - 1].style.display = "block";
//         showSlides(this.slideIndex);
//     }
    
//     onCloseButton() {
//         this.$wrapper
//             .querySelector('.close-btn')
//             .addEventListener('click', () => {
//                 this.$lightboxWrapper.classList.remove('lightbox_on');
//                 this.$wrapper.innerHTML = "";
//             });
//     }

//     onCurrentSlideButton(n) {
//         this.$wrapper
//             .querySelector('.media_wrapper')
//             .addEventListener('click', () => {
//                 console.log('THIS IS THE Current Slide BUTTON');                
//             });
//     }
    
//     onSlideRightButton(n) {
//         this.$wrapper
//             .querySelector('.slide-right-btn')
//             .addEventListener('click', () => {
//                 console.log('THIS IS THE RIGHT BUTTON');
//             });
//     }

//     onSlideLeftButton() {
//         this.$wrapper
//             .querySelector('.slide-left-btn')
//             .addEventListener('click', () => {
//                 console.log('THIS IS THE LEFT BUTTON');
//             });
//     }
    
//     createPlayer() {        
//         if(`${this.photographer.type}`=== 'image' && this.$wrapper !== '') {
//             const player = `
//                 <div class="player">
//                     <button type="button" class="close-btn"><em class="fa-solid fa-xmark"></em><button>
//                     <img 
//                         src="${this.photographer.view}"
//                         alt="${this.photographer.title}"                    
//                     >
//                     <button type="button" class="slide-left-btn"><em class="fa-solid fa-chevron-left"></em><button>
//                     <button type="button" class="slide-right-btn"><em class="fa-solid fa-chevron-right"></em><button>                
//                 </div>
//             `;
//             this.$wrapper.innerHTML = player;
//         } else if(`${this.photographer.type}`=== 'video' && this.$wrapper !== '') {
//             const player = `
//                 <div class="player">
//                     <button type="button" class="close-btn"><em class="fa-solid fa-xmark"></em><button>
//                     <video controls>
//                         <source 
//                             src="${this.photographer.view}"
//                             type="video/mp4"
//                             Votre navigateur ne lit pas ce format video.                    
//                         >
//                     </video>                    
//                     <button type="button" class="slide-left-btn"><em class="fa-solid fa-chevron-left"></em><button>
//                     <button type="button" class="slide-right-btn"><em class="fa-solid fa-chevron-right"></em><button>                
//                 </div>
//             `;
//             this.$wrapper.innerHTML = player;
//         } else {
//             this.$wrapper.parentNode.removeChild(div);
//             throw new Error('Aucune image, ni video !');
//         }

//         this.$lightboxWrapper.classList.add('lightbox_on');
//         this.$lightboxWrapper.appendChild(this.$wrapper);

//         this.onCloseButton();
//         this.showSlides();
//         this.onCurrentSlideButton();
//         this.onSlideRightButton();
//         this.onSlideLeftButton();
//     }

//     render() {
//         this.createPlayer();
//     }
// }