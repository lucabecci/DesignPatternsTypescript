import AdvancedMediaPlayer from "../interfaces/AdvancedMediaPlayer";

class VlcPlayer implements AdvancedMediaPlayer{
    public playVlc(fileName: string): void{
        console.log('Playing vlc file. Name:', fileName)
    }
    public playMp4(fileName: string): void {}
}


export default VlcPlayer
