/*!
 * JavaScript for webpage
 *
 * Copyright (c) 2018 Squary
 * Licensed under the MIT license
 */

"use strict";

window.addEventListener("load", function() {
  var luminousOpts = {
    onOpen: function() {
      var eleBody = document.getElementsByTagName("body")[0];
      var eleNav = document.getElementsByTagName("nav")[0];
      var scrollbar_width = window.innerWidth - document.body.scrollWidth;
      eleBody.style.overflow = "hidden";
      if(scrollbar_width) {
        eleBody.style.paddingRight = scrollbar_width + "px";
        eleNav.style.paddingRight = scrollbar_width + "px";
      }
    },
    onClose: function() {
      var eleBody = document.getElementsByTagName("body")[0];
      var eleNav = document.getElementsByTagName("nav")[0];
      eleBody.style.overflow = "visible";
      eleBody.style.paddingRight = "0";
      eleNav.style.paddingRight = "0";
    },
    caption: function(trigger) {
      return trigger.querySelector("img").getAttribute("alt");
    }
  };
  new LuminousGallery(document.querySelectorAll(".luminous"), {}, luminousOpts);
});
