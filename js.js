window.onload = function () {
  var visibleAcerca = false;
  var visibleContactar = false;

  $("#acerca").click(onAcerca);
  $("#contactar").click(onContactar);

  function onAcerca() {
    if (visibleContactar) {
      $("#btn-contactar").slideUp(1000);
      visibleContactar = false;
      $("#btn-acerca").slideDown(1000);
      visibleAcerca = true;
    } else if (visibleAcerca) {
      $("#btn-acerca").slideUp(1000);
      visibleAcerca = false;
    } else if (!visibleContactar) {
      $("#btn-acerca").slideDown(1000);
      visibleAcerca = true;
    }
  }
  function onContactar() {
    if (visibleAcerca) {
      $("#btn-acerca").slideUp(1000);
      visibleAcerca = false;
      $("#btn-contactar").slideDown(1000);
      visibleContactar = true;
    } else if (visibleContactar) {
      $("#btn-contactar").slideUp(1000);
      visibleContactar = false;
    } else if (!visibleAcerca) {
      $("#btn-contactar").slideDown(1000);
      visibleContactar = true;
    }
  }
};
