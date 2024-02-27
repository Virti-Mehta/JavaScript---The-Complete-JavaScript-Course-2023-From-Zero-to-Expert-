/*
Coding Challenge #1
In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
Your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes
that you received about the provided location. Then, using this data, log a
message like this to the console: “You are in Berlin, Germany”
4. Chain a .catch method to the end of the promise chain and log errors to the
console
5. This API allows you to make only 3 requests per second. If you reload fast, you
will get this error with code 403. This is an error with the request. Remember,
fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message
PART 2
6. Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.
7. Render the country and catch any errors, just like we have done in the last
lecture (you can even copy this code, no need to type the same code)

Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
GOOD LUCK 😀
*/

// request.open(
//   'GET',
//   'https://api.geocod.io/v1.7/reverse?q=37.0902,95.7129&api_key=a88a87bbe9c6eb8e6880f8c75f5c60f677660a5'
// );
// request.open(
//   'GET',
//   `https://api.geoapify.com/v1/geocode/reverse?lat=52.534708&lon=13.403800&apiKey=${api_key}`
// );
// request.send();
// request.addEventListener('load', function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// });
const countriesContainer = document.querySelector('.countries');
const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(`${url}`).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found');
      console.log(neighbour);

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log('err');
      renderError(`Something went wrong 💥💥${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI = function (lat, lng) {
  const api_key = 'eb93168a5df3445faaba45d256f08222';
  fetch(
    `https://api.geoapify.com/v3/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${api_key}`,
    {
      headers: {
        'Access-Control-Allow-Origin': 'https://api.geoapify.com',
      },
    }
  )
    .then(response => {
      console.log(response);
      // if (response.status === 403) throw new Error('Fetch error');
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      response.json();
    })
    .then(data => {
      console.log(data.features[0]);
      const [info] = data.features;
      // getCountryData(info.properties.country);
      getCountryData(portugal);
      console.log(
        `You are in ${info.properties.city}, ${info.properties.country}`
      );
    })
    .catch(err => console.error(`Something is wrong💥💥 ${err.message}`));
};
whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
