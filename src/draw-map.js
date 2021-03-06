import plotMap from './lib/plot-map';

import {MAPBOX_TOKEN} from '../api-tokens';

mapboxgl.accessToken = MAPBOX_TOKEN;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ubilabs/cjhbua7mp0a712rnnqi4k6il2',
  center: [9.990033, 53.554937],
  zoom: 11
});

map.dragRotate.disable();

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
  })
);

const label = document.getElementById('label');
let labelText = "HAMBURG";

label.addEventListener('input', event => {
  labelText = label.innerText.toUpperCase();
});

const previewButton = document.querySelector('.preview-button');
previewButton.addEventListener('click', async () => {
  const center = map.getCenter().toArray();
  const zoom = map.getZoom();

  previewButton.disabled = true;
  await plotMap({
    width: 400,
    height: 400,
    center,
    zoom: zoom + 9,
    label: labelText
  });
  previewButton.disabled = false;
});
