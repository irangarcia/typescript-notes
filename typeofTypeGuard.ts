/* 
  typeof operator
*/

class Song {
    constructor(public title: string, public duration: string | number) {}
};

// After the check of the if, TS knows it will be a number
function getSongDuration(item: Song) {
    if (typeof item.duration === 'string') {
        return item.duration;
    };

    // number
    const {duration} = item;
    
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;

    return `${minutes}:${seconds}`
};

const songDurationFromString = getSongDuration(
    new Song('Wake up before you go go', '05:31'),
);

const songDurationFromMS = getSongDuration(
    new Song('Wonderful Wonderful', 330000)
);

console.log(songDurationFromString)