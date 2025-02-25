const apiKey = "4dea757fe94d4516bd776a7a7fb1c91a";
        const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector("#search input");
        const searchButton = document.querySelector("#search button");
        const weatherIcon = document.querySelector(".Weather-icon");


        async function getWeatherData(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error p").style.display = "block";
                document.querySelector("#weather").style.display = "none";
            }
         
            else{
                var data = await response.json();
            console.log(data);
            

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


            if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png.png";
        } 
         else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png.png";
        } 
         
         else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzling.png.png" ;
        } else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/sun-rain.png.png";
        } else(
            weatherIcon.src = "images/sun-cloud.png.png"
        )

        document.querySelector("#weather").style.display = "block";
        document.querySelector(".error p").style.display = "none";

        }



             
        }

        searchButton.addEventListener("click", ()=>{
            getWeatherData(searchBox.value);
            console.log("hhh");
            
        })