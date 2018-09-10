window.onload = function() {
  var luminousOpts = {
    caption: function (trigger) {
      return trigger.querySelector('img').getAttribute('alt');
    }
  };

  new LuminousGallery(document.querySelectorAll('.luminous'), {}, luminousOpts);
};