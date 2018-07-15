/*!
 * Milligram v1.3.0 (Modified by Squary)
 * https://milligram.github.io
 *
 * Copyright (c) 2017 CJ Patoilo
 * Copyright (c) 2018 Squary
 * Licensed under the MIT license
 */

"use strict";

window.onload = function () {
  function a(a) {
      for (e = 0; e < d.length; e++) d[e].classList.remove("popover-open");
  }
  function b(b) {
      b.preventDefault(), document.querySelector(this.getAttribute("href")).classList.contains("popover-open") ? document.querySelector(this.getAttribute("href")).classList.remove("popover-open") : (a(), 
      document.querySelector(this.getAttribute("href")).classList.add("popover-open")), 
      b.stopImmediatePropagation();
  }
  var c = document.querySelectorAll("[data-popover]"), d = document.querySelectorAll(".popover"), e = void 0;
  for (e = 0; e < c.length; e++) c[e].addEventListener("click", b);
  document.addEventListener("click", a);
};
