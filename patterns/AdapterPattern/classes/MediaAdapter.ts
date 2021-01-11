import AdvancedMediaPlayer from "../interfaces/AdvancedMediaPlayer";
import MediaPlayer from "../interfaces/MediaPlayer";
import Mp4Player from "./Mp4Player";
import VlcPlayer from "./VlcPlayer";

class MediaAdapter implements MediaPlayer {
    advancedMusicPlayer: AdvancedMediaPlayer

    constructor(audioType: string){
        this.MediaAdapter(audioType)
    }

    private MediaAdapter(audioType: string): void{
        if(audioType == 'vlc'){
            this.advancedMusicPlayer = new VlcPlayer
        }
        else if(audioType == 'mp4'){
            this.advancedMusicPlayer = new Mp4Player
        }
    }

    public play(audioType: string, filename: string): void{
        if(audioType == 'vlc'){
            this.advancedMusicPlayer.playVlc(filename)
        }
        else if(audioType == 'mp4'){
            this.advancedMusicPlayer.playMp4(filename)
        }
    }
}

export default MediaAdapter