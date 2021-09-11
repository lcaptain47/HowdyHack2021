export class Clip {
    constructor(file, speed, volume){
        this.file = file;
        this.speed = 1.0;
        this.volume = .5;
    }
    changeVolume(newVolume) {
        this.volume = newVolume;
    }
    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    }
}

export class SoundBites{
    constructor(){
        var ayameTisI = new Clip('\\assets\\Ayame_Tis_I.mp3', 1.0, .5);
        var eekumBokum = new Clip('\\assets\\Eekum_Bokum.mp3', 1.0, .5);
        var unforgivable = new Clip('\\assets\\unforgivable.mp3', 1.0, .5);
        var hiHoney = new Clip('\\assets\\Hi_Honey.mp3', 1.0, .5);
        var onigiri = new Clip('\\assets\\onigiri.mp3', 1.0, .5);
        var yubiYubi = new Clip(file, 1.0, .5);
        var pineapple = new Clip(file, 1.0, .5);
    }
    
}

