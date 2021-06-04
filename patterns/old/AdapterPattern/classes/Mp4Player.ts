import AdvancedMediaPlayer from "../interfaces/AdvancedMediaPlayer";

class Mp4Player implements AdvancedMediaPlayer{
    public playVlc(fileName: string): void{
        return
    }

    public playMp4(fileName: string): void {
        console.log('Playing mp4 file. Name:', fileName)
    }
}

export default Mp4Player