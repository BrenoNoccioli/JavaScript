function carregar() {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();

  if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'manha.jpg';
    document.body.style.background = '#e2cd9f';
    var saudacao = 'Bom dia!';
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'tarde.jpg';
    document.body.style.background = '#b9846f';
    var saudacao = 'Boa tarde!';
  } else {
    //BOA NOITE!
    img.src = 'noite.jpg';
    document.body.style.background = '#515154';
    var saudacao = 'Boa noite!';
  }
  msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos. <br/> ${saudacao}`;
}
