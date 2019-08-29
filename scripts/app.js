const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = data => {
  //   const cityData = data.cityData;
  //   const weatherData = data.weatherData;
  // We will rather destructure this

  const { cityData, weatherData } = data;

  //update details template
  details.innerHTML = `

  <h5 class="my-3">${cityData.EnglishName}</h5>
          <div class="my-3">${weatherData.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weatherData.Temperature.Metric.Value}</span>
            <span>&deg;</span>
          </div>
  `;

  //Update the icon
  let iconSrc = `img/${weatherData.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  //update the images

  let timeSrc = weatherData.IsDayTime ? "img/day.svg" : "img/night.svg";

  time.setAttribute("src", timeSrc);

  //remove d-none once i get the search term

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async city => {
  const cityData = await getCity(city);
  const weatherData = await getWeather(cityData.Key);

  return {
    // cityDet: cityData,
    // weatherDet: weatherData
    //instead of writing like this we can write instead

    cityData,
    weatherData
  };
};

cityForm.addEventListener("submit", e => {
  //prevent default action
  e.preventDefault();

  //get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the UI with new city
  updateCity(city)
    .then(data => {
      updateUI(data);
    })
    .catch(error => {
      console.log(error);
    });
});
