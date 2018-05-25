import {plotLines} from './lib/plot-lines';

mapboxgl.accessToken =
  'pk.eyJ1IjoidWJpbGFicyIsImEiOiJ4Tm02bDJrIn0.aA51umnsZbzugtBiFLZPoQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ubilabs/cjhbua7mp0a712rnnqi4k6il2',
  center: [9.9611942, 53.5612595],
  zoom: 9
});

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
  })
);

const printButton = document.querySelector('.print-button');
printButton.addEventListener('click', () => {
  const center = map.getCenter().toArray();
  const zoom = map.getZoom();

  plotLines({width: 200, height: 100, center, zoom});
});
