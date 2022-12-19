"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Medias =
/*#__PURE__*/
function () {
  function Medias() {
    _classCallCheck(this, Medias);

    this.params = new URLSearchParams(document.location.search);
    this.idPhotographer = parseInt(this.params.get("idPhotographer"));
    this.name = this.params.get("name");
    this.city = this.params.get("city");
    this.country = this.params.get("country");
    this.tagline = this.params.get("tagline");
    this.portrait = this.params.get("portrait");
    this.$mediasWrapper = document.querySelector('.photographer_gallery');
    this.$lightboxWrapper = document.querySelector('.photographer_lightbox');
    this.$formWrapper = document.querySelector('.photographer_form');
    this.mediasApi = new PhotographerApi('/data/photographers.json'); // Medias

    this.Medias = []; // UserContext

    this.UserContext = new UserContext();
  }

  _createClass(Medias, [{
    key: "fetchMedias",
    value: function fetchMedias() {
      var mediasData, $media, medias;
      return regeneratorRuntime.async(function fetchMedias$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(this.mediasApi.getPhotographer());

            case 2:
              mediasData = _context.sent;
              $media = mediasData.media;
              medias = $media.map(function (media) {
                return new MediasFactory(media, 'media', media.photographerId);
              });
              this.Medias = medias;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "main",
    value: function main() {
      var _this = this;

      var photographeName, photographerLocation, photographerTagline, photographerPortrait, Form;
      return regeneratorRuntime.async(function main$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // DOM elements
              photographeName = document.querySelector('.photographer_name');
              photographerLocation = document.querySelector('.photographer_location');
              photographerTagline = document.querySelector('.photographer_tagline');
              photographerPortrait = document.querySelector('.photographer_portrait');
              photographeName.innerHTML = "<h1>".concat(this.name, "</h1>");
              photographerLocation.innerHTML = "<p>".concat(this.city, ", ").concat(this.country, "</p>");
              photographerTagline.innerHTML = "<p>".concat(this.tagline, "</p>");
              photographerPortrait.innerHTML = "<img src=\"".concat(this.portrait, "\" alt=\"\"").concat(this.name, "/>");
              _context2.next = 10;
              return regeneratorRuntime.awrap(this.fetchMedias());

            case 10:
              Form = new FormModal(this.UserContext);
              Form.render();
              this.Medias.forEach(function (media) {
                if (media.photographerId === _this.idPhotographer) {
                  console.log(media.view);
                  var TemplateMediaCard = new MediaCard(media);

                  _this.$mediasWrapper.appendChild(TemplateMediaCard.createMediaCard());

                  var TemplateLightboxModalMediaCard = new LightboxModal(media);

                  _this.$mediasWrapper.appendChild(TemplateMediaCard.createMediaCard());
                }
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Medias;
}();

var media = new Medias();
media.main();