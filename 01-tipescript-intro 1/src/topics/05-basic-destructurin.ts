

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}


interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 0,
    songDuration: 38,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}


const song = 'New Song';
const {song: anotherSong, songDuration:duration, details} = audioPlayer;
const { author } = details;




// console.log('song: ', audioPlayer.song);
// console.log('Duration: ', duration);
// console.log('Author: ', author);


const[, , trunks = 'Not found'] : string[] = ['Goku', 'Vegeta'];
console.error ('Personaje 3: ', trunks);

