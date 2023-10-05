document.addEventListener("DOMContentLoaded", function(){
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(function(posicao){
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
    
            console.log("Testando localização:")
            console.log(`Latitude: ${latitude}`)
            console.log(`Longitude: ${longitude}`)
        }, function(error){
            switch(error.code){
                case error.PERMISSION_DENIED:
                    console.log("O usuário negou a solicitação de geolocalização.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("As informações de localização não estão disponíveis.");
                    break;
                case error.TIMEOUT:
                    console.log("Tempo limite expirado ao obter a localização.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.log("Ocorreu um erro desconhecido ao obter a localização.");
                    break;
            }
        })
    }
    else{
        return console.log("Geolocalização nao suportada")
    }
})