navigator.geolocation.getCurrentPosition(position => {
    
    const OpenCageURL = `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=1f3b4063201948e099309485256d0372&no_annotations=1`;
    
    const MeteoURL = `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit`
    
    fetch(OpenCageURL)
      .then(response => response.json())
      .then(data => {
        const city = data.results[0].components.city;
        const state = data.results[0].components.state;
        document.getElementById('location').textContent = `${city}, ${state}`;
        
      })
      .catch(error => console.error(error));


      fetch(MeteoURL)
        .then(response =>response.json())
        .then(data =>{
            var tempF = data.hourly.temperature_2m;
            for(var i = 0; i<15; i++){
                var itemTemp = document.getElementsByClassName('temprature').item(i)
                itemTemp.innerHTML = tempF[i+20] + '˚F';
            }
        })
  });


function setTime(){
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes().toString().padStart(2, '0');
let amOrPm = hours >= 12 ? 'PM' : 'AM';
const Clocktime = `${hours%12 || 12}:${minutes} ${amOrPm}`;

document.getElementById("time").innerText = Clocktime;

var time = document.getElementsByClassName("time");
for (var i = 0; i < time.length; i++) {

    var item = time.item(i);
    
    let amOrPm1234 = (hours%12+i+1) <= 12 ? 'PM' : 'AM';
    item.innerHTML=`${(hours+i+1)%12 || 12}:00 ${amOrPm1234}`;
    
   
}
}









