class PlayerModal {
    constructor(data) {
        this._data = data;
        
        this.$wrapper = document.createElement('div');
        this.$wrapper.classList.add('player-wrapper');

        this.$modalWrapper = document.querySelector('.lightbox-modal');
    }
    
    onCloseButton() {
        this.$wrapper
            .querySelector('.close-btn')
            .addEventListener('click', () => {
                this.$modalWrapper.classList.remove('modal-on');
                this.$wrapper.innerHTML = "";
            });
    }

    createPlayer() {
        console.log('rrrrrr');
        const player = `
            <div class="player">
                <iframe 
                    height="600" 
                    width="800" 
                    src="${media}"
                ></iframe>
                <button class="close-btn">Fermer la fenêtre<button>
            </div>
        `;

        this.$wrapper.innerHTML = player;

        this.$modalWrapper.classList.add('modal-on');
        this.$modalWrapper.appendChild(this.$wrapper);

        this.onCloseButton();
    }

    render() {
        this.createPlayer();
    }
}