// let slideIndex = 1;
    // showSlides(slideIndex)

    // plusSlides(n) {
        
    //     showSlides(slideIndex += n);
    // }

    // currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    // showSlides(n) {
    //     
    //     let i;
    //     let slides = document.getElementsByClassName("lightbox");

    //     if (n > slides.length) { slideIndex = 1; }

    //     if (n < 1) { slideIndex = slides.length }

    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }

    //     slides[slideIndex - 1].style.display = "block";
    // }
// onSlideButton() {
    //     if(this.$modalNext) {
    //         this.$modalNext
    //         .addEventListener('click', () => {
    //             console.log('THIS IS THE RIGHT SLIDE');
                
                
    //             const med = new LightboxModal(media);
    //             const ListMedias = med.photographer.$mediaList;
    //             let n = ListMedias.indexOf(this.photographer);
    //             console.log('n > slides.length',n>ListMedias.length);
    //             console.log(ListMedias[n+1].view);
    //             let i = 0;
    //                 i++;
    //                 n=+i;
    //             if(`${this.photographer.type}`=== 'image' && this.$wrapper !== '') {
    //                 if (n > ListMedias.length) {n = 1;}
                    
    //                 const lightbox = `
    //                     <img 
    //                         src="${ListMedias[(ListMedias.length)-n].view}"
    //                         alt="${ListMedias[(ListMedias.length)-n].title}"                    
    //                     >
    //                 `;
    //                 this.$wrapper.innerHTML = lightbox;
    //             } else if(`${this.photographer.type}`=== 'video' && this.$wrapper !== '') {
                    
    //                 const lightbox = `
    //                     <video controls>
    //                         <source
    //                             src="${ListMedias[n].view}"
    //                             alt="${ListMedias[n].title}"                            
    //                             type="video/mp4"
    //                             Votre navigateur ne lit pas ce format video.                    
    //                         >
    //                     </video>
    //                 `;
    //                 this.$wrapper.innerHTML = lightbox;
    //             } else {
    //                 this.$wrapper.parentNode.removeChild(div);
    //                 throw new Error('Aucune image, ni video !');
    //             }
                
    //         });
    //     } 
    //     if(this.$modalPrev) {
    //         this.$modalPrev
    //         .addEventListener('click', () => {
    //             console.log('THIS IS THE LEFT SLIDE');

    //             const med = new LightboxModal(media);
    //             const ListMedias = med.photographer.$mediaList;
    //             let n = [];
    //             n.push(ListMedias.indexOf(this.photographer));
                
    //             if(`${this.photographer.type}`=== 'image' && this.$wrapper !== '') {
    //                 if (n < 1) {n = ListMedias.length;}
                    
    //                     const lightbox = `                        
    //                         <img 
    //                             src="${ListMedias[n-1].view}"
    //                             alt="${ListMedias[n-1].title}"                    
    //                         >
    //                     `;
    //                     this.$wrapper.innerHTML = lightbox;
                    
    //             } else if(`${this.photographer.type}`=== 'video' && this.$wrapper !== '') {
                    
                    
    //                     const lightbox = `
    //                         <video controls>
    //                             <source
    //                                 src="${ListMedias[n-1].view}"
    //                                 alt="${ListMedias[n-1].title}"                            
    //                                 type="video/mp4"
    //                                 Votre navigateur ne lit pas ce format video.                    
    //                             >
    //                         </video>
    //                     `;
    //                     this.$wrapper.innerHTML = lightbox;
                    
    //             } else {
    //                 this.$wrapper.parentNode.removeChild(div);
    //                 throw new Error('Aucune image, ni video !');
    //             }
    //         });
    //     }
    // }

    // // onSlideLeftButton() {
    // //     this.$wrapper
    // //         .querySelector('.slide-left-btn')
    // //         .addEventListener('click', () => {                
    // //             if (this.listMedia > ListMedias.length) { this.listMedia = 1; }
    // //             if (this.listMedia < 1) { this.listMedia = ListMedias.length; }

    // //             for(let x=ListMedias.length; x>this.listMedia; x-- ) console.log('THIS IS THE LEFT BUTTON', this.listMedia-x); 
    // //         });
    // // }
    