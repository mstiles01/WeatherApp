window.addEventListener('load', () =>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");


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
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
            });
           
        });


      
    }

    
    else{
        h1.textContent = "Please Enable location for weather"
    }

   
});