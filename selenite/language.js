(function () {
  "use strict";

  var root = document.documentElement;
  var controls = Array.prototype.slice.call(document.querySelectorAll("[data-language]"));

  function setLanguage(language) {
    var active = language === "en" ? "en" : "it";
    root.dataset.activeLanguage = active;
    document.documentElement.lang = active;

    controls.forEach(function (control) {
      control.setAttribute("aria-pressed", String(control.dataset.language === active));
    });

    var title = document.body.getAttribute("data-title-" + active);
    if (title) document.title = title;
  }

  controls.forEach(function (control) {
    control.addEventListener("click", function () {
      setLanguage(control.dataset.language);
    });
  });

  setLanguage(navigator.language && navigator.language.toLowerCase().indexOf("en") === 0 ? "en" : "it");
}());
