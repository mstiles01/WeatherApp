window.addEventListener('load', () =>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/3d7915fdcd41e27416bcc6755ebebee5/${lat},${long}`;

            fetch(api)
            .then(response => {
                return response.json();
            })
    
            .then(data => {
                console.log(data)
                const {temperature, summary} = data.currently

            })
        });


      
    }

    
    else{
        h1.textContent = "Please Enable location for weather"
    }

   
});