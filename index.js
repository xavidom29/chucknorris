//  FUNCIONES


function getCryptoInfo() {
  const requester = new XMLHttpRequest();
  requester.onreadystatechange = function() {
    if (this.readyState != 4) {
      return
    }
    if (this.status == 200) {
      var data = JSON.parse(this.responseText);

      mostrarInfo(data)
    }
  };
  requester.open('GET', "https://api.chucknorris.io/jokes/random");
  requester.send();
}

function mostrarInfo(cryptocurrency) {
  console.log(cryptocurrency);
  document.querySelectorAll('#contenedor')[0].innerHTML = "<div>Name: " + cryptocurrency.value;
}

// VARIABLES
const botonAñadir = document.querySelectorAll('#boton')[0];

// BINDS Y EVENTOS

botonAñadir.addEventListener('click', function () {

  getCryptoInfo();
})
