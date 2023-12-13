function citySearch() {
    city = data.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080`).then(out => out.json())
        .then(result => displayData(result))
        function displayData(dataArray) {
            const temperature = Math.round(dataArray.main.temp-273.15)
            const place = dataArray.name
            const humidity = dataArray.main.humidity
            const wind = dataArray.wind.speed
            const maxtemp=Math.round(dataArray.main.temp_max-273.15)
            const mintemp=Math.round(dataArray.main.temp_min-273.15)
    
            const weat = dataArray.weather[0].main.toLowerCase()
    
            result1.innerHTML = `
           <h1 class="mt-3" id="temp">${temperature}<sup class="text-primary">o</sup>c</h1>
                    <h2>${place}</h2>`
    
            result2.innerHTML = `
            <img class="w-25 mt-4" src="./images/wind.png" alt="">
                        <h6 class="p-2">wind speed</h6>
                        <p>${wind}km/h</p>
    `
    
            result3.innerHTML = `
            <img class="w-25 mt-5" src="./images/humidity.png" alt="">
                            <h6 class="p-2">Humidity</h6>
                            <p>${humidity}%</p>`
    
            result4.innerHTML=`<img  class="w-25 mt-5" src="./images/drizzle.png" alt="" />
                        <h6 >Min-temp:-${mintemp}<sup class="text-primary">o</sup>c</h6>
                        <h6>Max-temp:-${maxtemp}<sup class="text-primary">o</sup>c</h6>
                        `
    
    
            result5.innerHTML=`
            <div class="image text-center">
                ${
                    weat=='haze'
                    ?'<img src="./images/haze.png"  alt="" style="height: 224px;width: 224px;">'
                    :weat=="rain"
                    ?'<img src="./images/rain.png" alt="">'
                    :weat=="mist"
                    ?'<img src="./images/mist.png" alt="">'
                    :weat=="clouds"
                    ?'<img src="./images/clouds.png" alt="">'
                    :weat=="snow"
                    ?'<img src="./images/snow.png" alt="">'
                    :'<img src="./images/cloud-sun.jpg" alt="">'
                }
                        <h4 class="">${weat}</h4>
                    </div>
    `
        }
}
function getInfo(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5b4bee0ba241d092159faf007e166080`).then(out => out.json())
        .then(result => displayData(result))
        function displayData(dataArray) {
            const temperature = Math.round(dataArray.main.temp-273.15)
            const place = dataArray.name
            const humidity = dataArray.main.humidity
            const wind = dataArray.wind.speed
            const maxtemp=Math.round(dataArray.main.temp_max-273.15)
            const mintemp=Math.round(dataArray.main.temp_min-273.15)
    
            const weat = dataArray.weather[0].main.toLowerCase()
    
            result1.innerHTML = `
           <h1 class="mt-3" id="temp">${temperature}<sup class="text-primary">o</sup>c</h1>
                    <h2>${place}</h2>`
    
            result2.innerHTML = `
            <img class="w-25 mt-4" src="./images/wind.png" alt="">
                        <h6 class="p-2">wind speed</h6>
                        <p>${wind}km/h</p>
    `
    
            result3.innerHTML = `
            <img class="w-25 mt-5" src="./images/humidity.png" alt="">
                            <h6 class="p-2">Humidity</h6>
                            <p>${humidity}%</p>`
    
            result4.innerHTML=`<img  class="w-25 mt-5" src="./images/drizzle.png" alt="" />
                        <h6 >Min-temp:-${mintemp}<sup class="text-primary">o</sup>c</h6>
                        <h6>Max-temp:-${maxtemp}<sup class="text-primary">o</sup>c</h6>
                        `
    
    
            result5.innerHTML=`
            <div class="image text-center">
                ${
                    weat=='haze'
                    ?'<img src="./images/haze.png"  alt="" style="height: 224px;width: 224px;">'
                    :weat=="rain"
                    ?'<img src="./images/rain.png" alt="">'
                    :weat=="mist"
                    ?'<img src="./images/mist.png" alt="">'
                    :weat=="clouds"
                    ?'<img src="./images/clouds.png" alt="">'
                    :weat=="snow"
                    ?'<img src="./images/snow.png" alt="">'
                    :'<img src="./images/cloud-sun.jpg" alt="">'
                }
                        <h4 class="">${weat}</h4>
                    </div>`
        }
}
function currentLocation() {
    
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(getInfo);
        
    }
    else {
        alert("Geolocation is not supported by this browser.")
    }
    
}






// current location
        



