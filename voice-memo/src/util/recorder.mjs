export default class Recorder{

  constructor(){
    this.audioType = 'audio/webm; codecs=opus' //tipo de compatibiliade do audio
    this.mediaRecorder = {}; //API do browser para fazer gravações

    this.recordedBlobs=[] //array onde serão guardados os dados
  }

  _setup(){
    const options = {mimeType: this.audioType}
    const isSupported = MediaRecorder.isTypeSupported(options.mimeType)
    if(!isSupported){
      const msg = `the codec: ${options.mimeType} isn't supported!`
      alert(msg)

      throw new Error(msg);
    }

    return options;
  }

  startRecording(stream){
    const options = this._setup();
    this.mediaRecorder = new MediaRecorder(stream, options)

    this.mediaRecorder.onstop = (event)=>{
      console.log('Recorded Blobs', this.recordedBlobs);
    }

    this.mediaRecorder.ondataavailable = (event) =>{
      if(!event.data || !event.data.size) return;
      //guardando dados gravados no array
      this.recordedBlobs.push(event.data);

    }

    this.mediaRecorder.start()
    console.log('Media Recorded started', this.mediaRecorder);
  }

  async stopRecording(){
    if(this.mediaRecorder.state === 'inactive') return;

    this.mediaRecorder.stop();
    console.log('media recorder stopped');
  }

  getRecordingURL(){
    const blob = new Blob(this.recordedBlobs, {type: this.audioType});
    return window.URL.createObjectURL(blob)
  }

}