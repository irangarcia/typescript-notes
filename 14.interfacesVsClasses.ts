/* 
    Interfaces vs classes
*/

/*
interface Artist {
    name: string;
};
*/ 

class ArtistCreator /* implements Artist */ {
    constructor(public name: string) {};
};

function artistFactory({name}: ArtistCreator) {
    return new ArtistCreator(name);
};

// The Class will provide the type checking 
artistFactory({name: 'Todd'});
