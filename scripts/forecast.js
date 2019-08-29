const key = "	rTH7g87XDkRzIKuogLfLANkU2i7NvjOP";

//get weather info
const getWeather = async id => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);

  const data = await response.json();

  return data[0];
};
//get city info
const getCity = async city => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// getCity("sambalpur")
//   .then(data => getWeather(data.Key))
//   .then(data => {
//     console.log(data.Temperature.Metric.Value, "weather fetched");
//   })
//   .catch(error => console.log(error));
