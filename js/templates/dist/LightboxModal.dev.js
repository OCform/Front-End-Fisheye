"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LightboxModal =
/*#__PURE__*/
function () {
  function LightboxModal(photographer) {
    _classCallCheck(this, LightboxModal);

    this._photographer = photographer;
    this.$wrapper = document.createElement('div');
    this.$wrapper.classList.add('lightbox-wrapper');
    this.$modalWrapper = document.querySelector('.modal');
    this.$modalClose = this.$modalWrapper.querySelector('body > div > button.close-btn');
    this.$modalNext = this.$modalWrapper.querySelector('body > div > button.next-btn');
    this.$modalPrev = this.$modalWrapper.querySelector('body > div > button.prev-btn');
  }

  _createClass(LightboxModal, [{
    key: "onCloseButton",
    value: function onCloseButton() {
      var _this = this;

      this.$modalClose.addEventListener('click', function () {
        _this.$modalWrapper.classList.remove('modal-on');

        _this.$wrapper.innerHTML = "";
        _this.$modalClose.style.display = 'none';
        _this.$modalNext.style.display = 'none';
        _this.$modalPrev.style.display = 'none';
      });
    } // onNextButton() {
    //     const med = new LightboxModal(media);
    //     const ListMedias = med.photographer.$mediaList;
    //     let n = ListMedias.indexOf(this.photographer);
    //     this.$modalNext
    //     .addEventListener('click', () => {
    //         console.log(ListMedias[0].id);
    //         n += 1;            
    //         if (n > ListMedias.length-1) {n = 0;}
    //         console.log('counter',n);
    //         console.log(`${this.photographer.type}`);
    //         if(`${this.photographer.type}`=== 'image') {
    //             this.photographer._type = 'image';
    //             const image = document.createElement('img');
    //             image.setAttribute('src', `${ListMedias[n].view}`);
    //             image.setAttribute('alt', `${ListMedias[n].title}`);
    //             this.$modalWrapper.classList.remove('modal-on');
    //             this.$wrapper.innerHTML = '';
    //             this.$wrapper.append(image);
    //             console.log(image.src);            
    //         } 
    //         if(this.photographer.type === 'video') {
    //             this.photographer._type = 'video';
    //             const video = document.createElement('video');
    //             video.controls = 'controls';
    //             const source = document.createElement('source');
    //             video.appendChild(source);
    //             source.setAttribute('src', `${ListMedias[n].view}`);
    //             // source.setAttribute('alt', `${ListMedias[n].title}`);
    //             video.play();
    //             this.$modalWrapper.classList.remove('modal-on');
    //             this.$wrapper.innerHTML = '';
    //             this.$wrapper.append(video);
    //             this.$wrapper.innerHTML = `
    //                 <video controls>
    //                     <source
    //                         src="${source.src}"
    //                         alt="${source.alt}"                            
    //                         type="video/mp4"
    //                         Votre navigateur ne lit pas ce format video.                    
    //                     >
    //                 </video>
    //                 `;          
    //             console.log(video.src);
    //         } else {
    //             throw new Error('Aucune image, ni video !');
    //         }
    //     });
    // }
    // onPrevButton() {
    //     const med = new LightboxModal(media);
    //     const ListMedias = med.photographer.$mediaList;
    //     let n = ListMedias.indexOf(this.photographer);
    //     this.$modalPrev
    //     .addEventListener('click', () => {
    //         console.log(ListMedias[0].id);
    //         n -= 1;
    //         if(n < 0) n = ListMedias.length-1;
    //         console.log('counter',n);
    //         console.log(`${this.photographer.type}`);
    //         if(`${this.photographer.type}`=== 'image') {
    //             this.photographer._type = 'image';
    //             const image = document.createElement('img');
    //             image.setAttribute('src', `${ListMedias[n].view}`);
    //             image.setAttribute('alt', `${ListMedias[n].title}`);
    //             this.$modalWrapper.classList.remove('modal-on');
    //             this.$wrapper.innerHTML = '';
    //             this.$wrapper.append(image);
    //             console.log(image.src);            
    //         }
    //         if(`${this.photographer.type}`=== 'video') {
    //             this.photographer._type = 'video';
    //             const video = document.createElement('video');
    //             video.controls = 'controls';
    //             const source = document.createElement('source');
    //             video.appendChild(source);
    //             source.setAttribute('src', `${ListMedias[n].view}`);
    //             source.setAttribute('alt', `${ListMedias[n].title}`);
    //             video.play();
    //             this.$wrapper.innerHTML = '';
    //             this.$wrapper.parentNode.removeChild(div);
    //             this.$modalWrapper.classList.remove('modal-on');                
    //             this.$wrapper.append(video);
    //             this.$wrapper.innerHTML = `
    //                 <video controls>
    //                     <source
    //                         src="${source.src}"
    //                         alt="${source.alt}"                            
    //                         type="video/mp4"
    //                         Votre navigateur ne lit pas ce format video.                    
    //                     >
    //                 </video>
    //                 `;            
    //             console.log(source.src);
    //         } else {
    //             throw new Error('Aucune image, ni video !');
    //         }
    //     });
    // }

  }, {
    key: "createLightbox",
    value: function createLightbox() {
      var _this2 = this;

      var $media = new LightboxModal(media);
      var $list = $media.photographer.$mediaList;
      this.n = $list.indexOf(this.photographer);
      this.s = this.n;
      this.view = '';
      this.$modalNext.addEventListener('click', function () {
        _this2.s++;

        if (_this2.s > $list.length - 1) {
          _this2.s = 0;
        }

        console.log("".concat(_this2.photographer.type));
        console.log(_this2.$wrapper);
        _this2.$wrapper.innerHTML = null;

        if ("".concat(_this2.photographer.type) === 'image') {
          _this2.view = document.createElement('img');

          _this2.$wrapper.append(_this2.view);

          console.log(_this2.photographer._type);
        } else if ("".concat(_this2.photographer.type) === 'video') {
          var video = document.createElement('video');
          video.controls = 'controls';
          _this2.view = document.createElement('source');
          video.appendChild(_this2.view);
          video.play();

          _this2.$wrapper.append(video);

          console.log(_this2.photographer.type);
        } else {
          _this2.$wrapper.parentNode.removeChild(div);

          throw new Error('Aucune image, ni video !');
        }

        _this2.view.setAttribute('src', "".concat($list[_this2.s].view));

        _this2.view.setAttribute('alt', "".concat($list[_this2.s].title));
      });
      this.$modalPrev.addEventListener('click', function () {
        _this2.s--;

        if (_this2.s < 0) {
          _this2.s = $list.length - 1;
        }

        console.log("".concat(_this2.photographer.type));
        console.log(_this2.$wrapper);
        _this2.$wrapper.innerHTML = null;

        if ("".concat(_this2.photographer.type) === 'image') {
          _this2.view = document.createElement('img');
          _this2.$wrapper.innerHTML = '';

          _this2.$wrapper.append(_this2.view);
        } else if ("".concat(_this2.photographer.type) === 'video') {
          var video = document.createElement('video');
          video.controls = 'controls';
          _this2.view = document.createElement('source');
          video.appendChild(_this2.view);
          video.play();
          _this2.$wrapper.innerHTML = '';

          _this2.$wrapper.append(video);
        } else {
          _this2.$wrapper.parentNode.removeChild(div);

          throw new Error('Aucune image, ni video !');
        }

        _this2.view.setAttribute('src', "".concat($list[_this2.s].view));

        _this2.view.setAttribute('alt', "".concat($list[_this2.s].title));
      });
      console.log("".concat(this.photographer.type));

      if ("".concat(this.photographer.type) === 'image') {
        this.view = document.createElement('img');
        this.$wrapper.innerHTML = '';
        this.$wrapper.append(this.view);
        console.log("".concat(this.view.src));
      } else if ("".concat(this.photographer.type) === 'video') {
        var video = document.createElement('video');
        video.controls = 'controls';
        this.view = document.createElement('source');
        video.appendChild(this.view);
        video.play();
        this.$wrapper.innerHTML = '';
        this.$wrapper.append(video);
        console.log(this.view.src);
      } else {
        this.$wrapper.parentNode.removeChild(div);
        throw new Error('Aucune image, ni video !');
      }

      this.view.setAttribute('src', "".concat($list[this.s].view));
      this.view.setAttribute('alt', "".concat($list[this.s].title)); //     this.$wrapper.innerHTML = `
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
      this.onCloseButton(); // this.onNextButton();
      // this.onPrevButton();
    }
  }, {
    key: "render",
    value: function render() {
      this.createLightbox();
    }
  }, {
    key: "type",
    get: function get() {
      return this._photographer.type;
    }
  }]);

  return LightboxModal;
}();