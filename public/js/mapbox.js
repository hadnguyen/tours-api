/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaGFkbmd1eWVuIiwiYSI6ImNsM2JlbHR3ODAwNmMza280anJrcDBnM3UifQ.UcZ-yCM7TcTw_gz_gWjSQw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/hadnguyen/cl3cnrvww003z14rx5sl7czeh',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 40,
    })
      .setLngLat(loc.coordinates)
      .setHTML(loc.description)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 200,
      left: 100,
      right: 100,
    },
  });
};
