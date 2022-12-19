class LightboxModal {
    constructor(lightboxModal) {
        this._lightboxModal = lightboxModal;
        
        this.images = document.querySelectorAll(".media-card-wrapper img");        
        this.imgIndex = 1;
    }

    get lightboxModal() {
        return this._lightboxModal;
    }

    //next image function
    nextImg() {
        this.imgIndex++;
        console.log(this.imgIndex);
        //check if it is the the last image
        if (this.imgIndex >= this.images.length) {
            this.imgIndex = 0;
        }
        //return src of the new image
        return this.images[this.imgIndex].src;
    }
    //previous image function
    prevImg() {
        this.imgIndex--;
        console.log(this.imgIndex);
        //check if it is the first image
        if (this.imgIndex < 0) {
            this.imgIndex = this.images.length - 1;
        }
        //return src of previous image
        return this.images[this.imgIndex].src;
    }

    onSrc() {
        console.log(this.imgIndex);
        let imgSrc;
        // get images src onclick
        this.images.forEach((img, i) => {
            img.addEventListener("click", (e) => {                  
                imgSrc = e.target.src;
                //run lightbox function
                this.createLightbox(imgSrc);
                //index of the next image
                this.imgIndex = i;
                e.preventDefault();
            });
        });
    }

    //creating the lightbox
    createLightbox(src) {
        const lightbox = document.createElement("div");
        lightbox.setAttribute("class", "lightbox");
        //add lightbox to the parent element
        document.querySelector(".photographer_portofolio").append(lightbox);
        //adding image to lightbox
        const newImage = document.createElement("img");
        newImage.setAttribute("src", src);        
        //creating the close button
        const closeBtn = document.createElement("i");
        closeBtn.setAttribute("class", "fas fa-times closeBtn");
        //close function
        closeBtn.onclick = () => {
            console.log(this.imgIndex);
            lightbox.remove();
        };

        //next and previous buttons    
        const nextBtn = document.createElement("i");
        nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
        // change the src of current image to the src of next image
        nextBtn.onclick = () => {
            newImage.setAttribute("src", this.nextImg());
        };
        const prevBtn = document.createElement("i");
        prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
        // change the src of current image to the src of pevious image
        prevBtn.onclick = () => {
            newImage.setAttribute("src", this.prevImg());
        };
        lightbox.append(newImage, closeBtn, nextBtn, prevBtn);
        this.onSrc();
    }    
}

const modal = new LightboxModal();
modal.onSrc();