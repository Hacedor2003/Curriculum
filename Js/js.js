window.onload = function () {
  orca = document.getElementById("caja-derecha");
  orca.onclick = function () {
    alert("La orca asesina");
  };

  var caraMia = 0;

  $("#btn1").click(onCorre);
  $("#btn2").click(onCorre);
  $("#btn3").click(onCorre);

  function onCorre() {
    if (caraMia == 0) {
      $("#caraMIa").animate({ left: "-100%" }, 1000);
      document.getElementById("caja-isquierda").id = "caja-isquierda-2";
      btn2.classList.add("ocultar");
      btn3.classList.add("ocultar");
      caraMia++;
    } else {
      $("#caraMIa").animate({ left: "25%" }, 1000);
      document.getElementById("caja-isquierda-2").id = "caja-isquierda";
      btn2.classList.remove("ocultar");
      btn3.classList.remove("ocultar");
      caraMia--;
    }
  }

  
};
