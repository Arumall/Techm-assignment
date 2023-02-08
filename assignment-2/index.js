const form = document.querySelector(".section2 form");
 const citylist = document.querySelector(".city-list"); 
const citieslist = document.querySelector(".section3 .cities");
fetch('config.json')
.then(response => response.json())
.then(data =>{
    let html = '';
    data.forEach(city => {
        html += `
                  
                    <option value="${city.cityType}">${city.cityType}</option>

        `;
    });
    citylist.innerHTML = html;
    
})


.catch(error => {
    alert(`User live server or local server`);
    //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
})
form.addEventListener("submit", e => {        var elem= document.getElementById("add-to-cart-btn");
function mycart() {
    elem.classList.add('show-cart-container');
}
  e.preventDefault();
  let validate = ValidateCity();
  document.getElementById("message").innerHTML = validate;
  if (validate.length == 0) {
    let SelVal = citylist.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${SelVal}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
          weather[0]["icon"]
        }.svg`;
        const date = new Date(data.sys.sunrise * 1000).toLocaleTimeString({hour: '2-digit', minute:'2-digit'});
        const date1 = new Date(data.sys.sunset * 1000).toLocaleTimeString( {hour: '2-digit', minute:'2-digit'});
      
        const li = document.createElement("li");
        setTimeout(() => {
        li.classList.add("city");
        const result = `
          <h2 class="city-name">
            <span class="citys">${name}</span>
            <span class="citys">${sys.country}</span>
            <i class="fa fa-trash delete-icon" id="icon1" aria-hidden="true"></i>
          </h2> 
          <figure>
            <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
            <figcaption>${weather[0]["description"]}</figcaption>
          </figure>
          <div class="city-temp"><span class="temp">${parseInt(Math.round((main.temp + Number.EPSILON) * 100) / 100)}</span><span class="celcius">C</span></div>
          <div class="feels-like"><span class="temp">Feels like: ${parseInt(main.feels_like)}</span><span class="celcius">C</span></div>
          <div class="sun">
          <div class ="sunrise"><div><img src="591787.jpg"></div><div class="sunrise-time">Sunrise: ${date}</div></div>
          <div class ="sunset"><div><img src="591804.jpg"></div><div class="sunset-time">Sunset: ${date1}</div></div>
          </div>
        `;
        li.innerHTML = result;
    
        citieslist.appendChild(li);
          $('.delete-icon').click(function () {
          $(this).closest('.city').remove();
          }); 
        }, 3000)

      })
      .catch((err) => {
        console.log(err);
      });
  }

});
function ValidateCity() {
  var errorMessage = "";
  if (document.querySelector("#City").value == "City") {
      errorMessage += "Please Select City Name";
  }
  return errorMessage;
} 
/* function autoRefresh() {
  window.location = window.location.href;
}
setInterval('autoRefresh()', 2000); */
/* function removeClass()
{
 
   document.getElementById('icon1').closest('.city').remove("city");
} 
 */
