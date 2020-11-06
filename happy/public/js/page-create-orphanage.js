//create map
var map = L.map('mapid').setView([-23.6040024, -46.6322695], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68], //largura e altura
  iconAncor: [29, 68],
});

let marker;

//create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name = lat]').value = lat;
  document.querySelector('[name = lng]').value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adiciona campo de fotos
function addPhotoField() {
  //pegar container de fotos #images
  const container = document.querySelector('#images');

  //pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload');

  //realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo está vazio e não adicionar se estiver
  const input = newFieldContainer.children[0];
  if (input.value == '') {
    return;
  }

  //limpar o campo antes de adicionar ao container de imagens
  newFieldContainer.children[0].value = '';

  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length < 2) {
    //limpar o campo
    span.parentNode.children[0].value = '';
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//select yes or no
function toggleSelect(event) {
  //retirar a classe .active dos botões
  document
    .querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));

  //colocar a class .active no botão clicado
  const button = event.currentTarget;
  button.classList.add('active');

  //atualizar input hidden com o valor selecionado
  const input = document.querySelector('[name = "open_on_weekends"]');

  input.value = button.dataset.value;
}

//Validar Lat e Lng
// function validate(event) {
//   const needsLatAndLng = true;

//   if (needsLatAndLng) {
//     event.preventDefault();
//     alert('Por favor, elecione um ponto no mapa');
//   }
// }
