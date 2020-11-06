const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

//create map
var map = L.map('mapid', options).setView([lat, lng], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68], //largura e altura
  iconAncor: [29, 68],
  popupAncor: [170, 2],
});

// create and add marker

L.marker([lat, lng], { icon }).addTo(map);

/* image galery */
function selectImage(event) {
  const button = event.currentTarget; //alvo atual do evento de clique

  //remover classe .active
  const buttons = document.querySelectorAll('.images button');
  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  //selecionar imagem
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  //atualizar o container de
  imageContainer.src = image.src;

  //atualizar a classe .active para o botão clicado
  button.classList.add('active');
}
