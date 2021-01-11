import MediaPlayer from "../interfaces/MediaPlayer";
import MediaAdapter from './MediaAdapter'
class AudioPlayer implements MediaPlayer{
    protected mediaAdapter: MediaAdapter

    public play(audioType: string, fileName: string): void{
        if(audioType == 'mp3'){
            console.log('Playing mp3 file. Name:', fileName)
        }else if(audioType == 'vlc' || audioType == 'mp4'){
            this.mediaAdapter = new MediaAdapter(audioType);
            this.mediaAdapter.play(audioType, fileName)
        } else {
            console.log(`Invalid media. ${audioType} format is not supported.`)
        }
    }
}

export default AudioPlayer