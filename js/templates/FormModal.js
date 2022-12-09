class FormModal {
    constructor(UserContext) {
        this.$wrapper = document.createElement('div');
        this.$formWrapper = document.querySelector('.photographer_form');

        // User
        this.UserContext = UserContext;
    }

    onSubmitForm() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('submit', e => {
                e.preventDefault();

                const firstNameInputValue = this
                    .$wrapper
                    .querySelector('#firstname')
                    .value;
                
                const lastNameInputValue = this
                    .$wrapper
                    .querySelector('#lastname')
                    .value;

                this.UserContext.change(firstNameInputValue, lastNameInputValue);

                if (this.UserContext.currentState.isConnected) {
                    this.$formWrapper.classList.remove('form-on');
                    this.$formWrapper.innerHTML = "";
                }                    
            });
    }

    shouldDisplayForm() {
        return !this.UserContext.currentState.isConnected;
    }

    createForm() {
        const $name = new Medias();
        const form = `            
            <form action="#" method="POST">
                <div class="header">
                    <h1>Contactez-moi <br>${$name.name}</h1>
                    <button class="close-btn" type="button">
                        <em class="fa-solid fa-xmark"></em>
                        <span>Close</span>
                    </button>
                </div>                
                <div class="form-group">
                    <label class="form-label" for="firstname">Prénom</label>
                    <input id="firstname" name="firstname" type="text">
                </div>
                <div class="form-group">
                    <label class="form-label" for="lastname">Nom</label>
                    <input id="lastname" name="lastname" type="text">
                </div>
                <div class="form-group">
                    <label class="form-label" for="email">Email</label>
                    <input id="email" name="email" type="text">
                </div>
                <div class="form-group">
                    <label class="form-label" for="message">Votre message</label>
                    <textarea id="message" name="message" rows="10" cols="33"></textarea>                    
                </div>
                <button class="submit-btn" type="submit">Envoyer</button>
                
            </form>
        `;
        this.$wrapper.innerHTML = form;

        this.$formWrapper.classList.add('form-on');
        this.$formWrapper.appendChild(this.$wrapper);   
    }

    render() {
        if (this.shouldDisplayForm()) {
            this.createForm();
            this.onSubmitForm();
        }
    }
}
