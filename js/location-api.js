document.addEventListener("DOMContentLoaded", function () {
  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (posicao) {
        let latitude = posicao.coords.latitude;
        let longitude = posicao.coords.longitude;
        console.log("Testando localização:");
        console.log(`Latitude: ${latitude}`);
        console.log(`Longitude: ${longitude}`);
        }, 
        function (erro) {
        switch (erro.code) {
          case erro.PERMISSION_DENIED:
            console.log("Solicitação negada pelo usuário");
            break;
          case erro.POSITION_UNAVAILABLE:
            console.log("Informações de localização indisponíveis");
            break;
          case erro.TIMEOUT:
            console.log("Tempo limite expirado ao obter a localização");
            break;
          case erro.UNKNOWN_ERROR:
            console.log("Ocorreu um erro desconhecido ao obter a localização");
            break;
        }
      });
    } else {
      return console.log("Geolocalização não suportada");
    }
  });
  