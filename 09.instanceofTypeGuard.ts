/* 
  instanceof operator
*/

class Foo {
  bar() {}
};

const bar = new Foo();

// Same
bar instanceof Foo;
Object.getPrototypeOf(bar) === Foo.prototype;

class Song {
  constructor(public title: string, public duration: number) {}
};

class Playlist {
  constructor(public name: string, public songs: Song[]) {}
};

function getItemName(item: Song | Playlist) {
  if(item instanceof Song) {
    return item.title;
  };

  return item.name;
};

const songName = getItemName(new Song('Wake me up', 300000));
console.log('Song name:', songName);

const playlistName = getItemName(
  new Playlist('The Bests', [new Song('The Man', 300000)])
);
console.log('Playlist name:', playlistName);