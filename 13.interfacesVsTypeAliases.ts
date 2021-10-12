/* 
    Interfaces vs type aliases
*/

interface Item { 
    name: string;
}

interface Artist extends Item {
    songs: number;
};

// We can have two interfaces with the same name
interface Artist {
    getSongs(): number;
};

type Artist2 = Item & {
    name: string;
};

const newArtist: Artist = {
    name: 'ABC',
    songs: 4,
    getSongs() {
        return 5;
    },
};
