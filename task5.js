async function weather(l) {
    try {
        const cityName = document.getElementById("cityName");
        const city = cityName.value;
        console.log(city);
        if(city === ''){
            alert("Please enter a city name firts!");
            return;
        }


        const response = await fetch(
            `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`,
            {
               method: "GET",
            }
        );

        // if(!response.ok){
        //     alert("Please enter a vali city name!");
        // }
        const weatherDetail = await response.json();
        // console.log(weatherDetail);
        const condition = weatherDetail["current"]["condition"]["text"];
        const farahheit = weatherDetail["current"]["temp_f"];
        const celcius = weatherDetail["current"]["temp_c"];
        let region = weatherDetail["location"]["region"];
        const clouds = weatherDetail["current"]["cloud"];
        const humidity = weatherDetail["current"]["humidity"];
        const pressure = weatherDetail["current"]["wind_kph"];
        // console.log(condition);
        // console.log(farahheit);
        // console.log(celcius);
        // console.log(region);
        // console.log(clouds);
        // console.log(humidity);
        // console.log(pressure);

        document.getElementById("region").innerText = 'Region: ' + region;
        document.getElementById("f").innerText = 'Temp in F: ' + farahheit + " F";
        document.getElementById("c").innerText = 'Temp in C: ' + celcius + " C";
        document.getElementById("clouds").innerText = 'Clouds: ' + clouds + " %";
        document.getElementById("humidity").innerText = 'Humidity: ' + humidity + " %";
        document.getElementById("pressure").innerText = 'Wind Pressure: ' + pressure + " Kilo meter per hour.";
        document.getElementById("condition").innerText = 'Condition: ' + condition;

    }
    catch (error) {
        console.log(error);
        alert("Please Enter a valid City Name!");
        // weather.reload();
        document.getElementById("cityName").value = "";

        document.getElementById("region").innerText = "";
        document.getElementById("f").innerText = "";
        document.getElementById("c").innerText ="" ;
        document.getElementById("clouds").innerText = "";
        document.getElementById("humidity").innerText = "";
        document.getElementById("pressure").innerText = "";
        document.getElementById("condition").innerText = "";
    }
    return ;
}