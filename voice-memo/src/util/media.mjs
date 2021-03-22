export default class Media{

  async getAudio(){
    //pegando dados do microfone do usuário
    return navigator.mediaDevices.getUserMedia({
      audio: true
    })
  }

}