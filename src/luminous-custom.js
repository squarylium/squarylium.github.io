/*!
 * JavaScript for webpage
 *
 * Copyright (c) 2018 Squary
 * Licensed under the MIT license
 */

"use strict";

window.addEventListener('load', function() {
  var luminousOpts = {
    caption: function (trigger) {
      return trigger.querySelector('img').getAttribute('alt');
    }
  };
  new LuminousGallery(document.querySelectorAll('.luminous'), {}, luminousOpts);
});
