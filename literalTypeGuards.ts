/* 
    Literal type guards
*/

const exists = 'localStorage' in window; 

// Foo is literal type 'bar'
const foo = 'bar'; 

class Song {
    kind: 'song';
    constructor(public title: string, public duration: number) {}
};  

class Playlist {
    kind: 'playlist';
    constructor(public name: string, public songs: Song[]) {}
};  

function isSong(item: any): item is Song {
    return 'title' in item;
};

function getItemName(item: Song | Playlist) { 
    if(item.kind === 'song') {
        return item.title;
    }

    return item.name;
}