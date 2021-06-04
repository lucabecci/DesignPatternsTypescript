import AudioPlayer from "./AudioPlayer";

class AbstractPattern {
    public static builder(){
        const audioPlayer: AudioPlayer = new AudioPlayer

        audioPlayer.play('mp3', 'bring me to life')
        audioPlayer.play("mp4", "alone.mp4");
        audioPlayer.play("vlc", "far far away.vlc");
        audioPlayer.play("avi", "mind me.avi");
    }
}

export default AbstractPattern