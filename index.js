
function setTime(){
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes().toString().padStart(2, '0');
let amOrPm = hours >= 12 ? 'PM' : 'AM';
const Clocktime = `${hours%12 || 12}:${minutes} ${amOrPm}`;

document.getElementById("time").innerText = Clocktime;
}




navigator.geolocation.getCurrentPosition(position => {
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=1f3b4063201948e099309485256d0372&no_annotations=1`;
    const meteoURL = `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m,weathercode&temperature_unit=fahrenheit`
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const city = data.results[0].components.city;
        const state = data.results[0].components.state;
        document.getElementById('location').textContent = `${city}, ${state}`;
        
      })
      .catch(error => console.error(error));


      fetch(meteoURL)
        .then(response =>response.json())
        .then(data =>{
            const weathercode = data.hourly.temperature_2m[0];
            //alert(weathercode)
        })
  });


  //test

