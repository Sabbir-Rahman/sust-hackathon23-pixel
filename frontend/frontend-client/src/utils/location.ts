export const forwardGeocoding = async (address: any) => {
  const ACCESS_TOKEN =
    'pk.eyJ1IjoiaWJ0aWRyYWhtYW4iLCJhIjoiY2tibzZ1dmJoMXptMzM1cXZmZWl6c2d3YyJ9.MQFAvX513awEJnETltcXEQ';
  var url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=' +
    ACCESS_TOKEN +
    '&limit=1';

  //   const response = await request(
  //     { url: url, json: true },
  //     function (error: any, response: any) {
  //       if (error) {
  //         callback('Unable to connect to Geocode API', undefined);
  //       } else if (response.body.features.length == 0) {
  //         callback(
  //           'Unable to find location. Try to ' + 'search another location.'
  //         );
  //       } else {
  //         var longitude = response.body.features[0].center[0];
  //         var latitude = response.body.features[0].center[1];
  //         var location = response.body.features[0].place_name;

  //         console.log('Latitude :', latitude);
  //         console.log('Longitude :', longitude);
  //         console.log('Location :', location);
  //         cb(response.body.features[0]);
  //       }
  //     }
  //   );
  const response = await fetch(url);
  const data = await response.json();
  let longitude = data.features[0].center[0];
  let latitude = data.features[0].center[1];

  return { longitude, latitude };
};
