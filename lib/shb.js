/* slightly modified version of code found here: https://github.com/dr-dimitru/SHB-js */
/*eslint guard-for-in:0, prefer-template:0 */
exports.getSocialButtonLib = function () {
  return {
    getMeta: function (tag) {
      const metas = document.getElementsByTagName('meta');
      for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === tag) {
          return metas[i].getAttribute('content');
        }
      }
      return '';
    },
    init: function () {
      if (typeof this.orig !== 'object') {
        this.orig = {};
        this.orig.defaults = this.defaults;
        this.orig.buttons = this.buttons;
      }
      this.defaults.desc = this.getMeta('description');
      this.defaults.img = this.getMeta('image');
    },
    reset: function () {
      this.defaults = this.orig.defaults;
      this.buttons = this.orig.buttons;
    },
    defaults: {
      btnTitle: 'Share via ',
      btnTag: 'a',
      btnLinkAttr: 'href',
      btnClass: 'btn btn-default', //Default TWBS Class
      btnSizeClass: '', // empty | btn-sm | btn-lg | btn-xs
      shareBtnText: 'Share:', //String
      url: window.location.href,
      iconClass: 'fa',
      iconSize: 'fa-lg',
      twitterName: '', //Your website's Twitter Account
      title: document.title,
    },

    buttons: {
      fbLike: {
        iconClass: 'fa-thumbs-o-up fb',
        iconURL: 'http://www.facebook.com/plugins/like.php',
        iconParams: {
          url: 'href',
        },
      },

      fbShare: {
        iconClass: 'fa-facebook fb',
        iconURL: 'http://www.facebook.com/sharer.php',
        iconParams: {
          url: 'u',
          desc: 't',
        },
      },

      tweet: {
        iconClass: 'fa-twitter tw',
        iconURL: 'http://twitter.com/share',
        iconParams: {
          url: 'url',
          desc: 'text',
          twitterName: 'via',
        },
      },

      plusOne: {
        btnClass: 'google-plus-one',
        iconHTML: '<span class="google">1</span>',
        iconClass: 'fa-google-plus google',
        iconURL: 'https://apis.google.com/_/+1/fastbutton',
        iconSize: 'fa-2x',
        iconParams: {
          url: 'url',
          other: {
            hl: 'en',
            usegapi: '1',
            size: 'standard',
          },
        },
      },

      plusShare: {
        iconClass: 'fa-google-plus google',
        iconURL: 'https://plus.google.com/share',
        iconParams: {
          url: 'url',
        },
      },

      linkedInShare: {
        iconClass: 'fa-linkedin linkin',
        iconURL: 'http://www.linkedin.com/shareArticle',
        iconParams: {
          url: 'url',
        },
      },

      vkShare: {
        iconClass: 'fa-vk vk',
        iconURL: 'http://vk.com/share.php',
        iconParams: {
          url: 'url',
          title: 'title',
          desc: 'description',
          img: 'image',
        },
      },

      pinterest: {
        iconClass: 'fa-pinterest pinterest',
        iconURL: 'http://www.pinterest.com/pin/create/button/',
        iconParams: {
          url: 'url',
          title: 'title',
          desc: 'description',
          img: 'media',
        },
      },

      surf: {
        iconClass: 'surfingbird',
        iconURL: 'http://surfingbird.ru/share',
        iconParams: {
          url: 'url',
          title: 'title',
          desc: 'description',
          img: 'screenshot',
        },
      },
    },

    build: function (conf) {
      this.init();
      if (typeof conf === 'string') {
        this.container = document.getElementById(conf);
        this.toBuild = this.prepareBtnConf(this.buttons);
      } else {
        this.container = document.getElementById(conf.elementID);
        const buttons = typeof conf.buttons === 'object' ? conf.buttons : '*';
        if (buttons === '*') {
          this.toBuild = this.prepareBtnConf(this.buttons);
        } else {
          this.toBuild = this.prepareBtnConf(conf.buttons);
        }
        if (typeof conf.pref === 'object') {
          for (const index in conf.pref) {
            this.defaults[index] =
              typeof conf.pref[index] === 'string'
                ? conf.pref[index]
                : this.defaults[index];
          }
        }
      }
      return this.btn();
    },
    btn: function () {
      for (const index in this.toBuild) {
        let link = '';
        for (const ind in this.toBuild[index].iconParams) {
          if (ind === 'other') {
            for (const indx in this.toBuild[index].iconParams[ind]) {
              link =
                link +
                '' +
                indx +
                '=' +
                encodeURIComponent(this.toBuild[index].iconParams[ind][indx]) +
                '&';
            }
          } else {
            link =
              link +
              '' +
              this.toBuild[index].iconParams[ind] +
              '=' +
              encodeURIComponent(this.defaults[ind]) +
              '&';
          }
        }
        const b = document.createElement(this.defaults.btnTag);
        const bClass =
          typeof this.toBuild[index].btnClass === 'string'
            ? this.toBuild[index].btnClass + ' ' + this.defaults.btnClass
            : this.defaults.btnClass;
        const linkStartsWith =
          this.toBuild[index].iconURL.indexOf('?') !== -1 ? '&' : '?';
        b.setAttribute(
          this.defaults.btnLinkAttr,
          this.toBuild[index].iconURL + linkStartsWith + link
        );
        b.setAttribute('class', bClass + ' ' + this.defaults.btnSizeClass);
        b.setAttribute('target', '_blank');
        const size =
          typeof this.toBuild[index].iconSize === 'string'
            ? this.toBuild[index].iconSize
            : this.defaults.iconSize;
        const i = document.createElement('i');
        i.setAttribute(
          'class',
          size +
            ' ' +
            this.toBuild[index].iconClass +
            ' ' +
            this.defaults.iconClass
        );
        if (typeof this.toBuild[index].iconHTML === 'string') {
          b.innerHTML = this.toBuild[index].iconHTML;
        }
        b.appendChild(i);
        this.container.appendChild(b);
      }
      this.reset();
      return this.container;
    },
    prepareBtnConf: function (btn) {
      const b = {};
      for (const index in btn) {
        if (typeof this.buttons[index] === 'object') {
          b[index] = this.buttons[index];
          b[index].iconClass =
            typeof btn[index].iconClass === 'object'
              ? btn[index].iconClass
              : this.buttons[index].iconClass;
          b[index].iconURL =
            typeof btn[index].iconURL === 'object'
              ? btn[index].iconURL
              : this.buttons[index].iconURL;
          b[index].iconParams =
            typeof btn[index].iconParams === 'object'
              ? btn[index].iconParams
              : this.buttons[index].iconParams;
          b[index].iconSize =
            typeof btn[index].iconSize === 'object'
              ? btn[index].iconSize
              : this.buttons[index].iconSize;
        } else {
          b[index] = btn[index];
        }
      }
      return b;
    },
  };
};
