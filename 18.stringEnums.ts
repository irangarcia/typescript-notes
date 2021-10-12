/* 
    String enums
*/

enum Sizes {
    sm = 'SMALL',
    md = 'MEDIUM', 
    lg = 'LARGE',
};

let selected: Sizes;

function updateSize(size: Sizes): void {
    selected = size;
};

updateSize(Sizes.lg); 

console.log(selected) // => 'LARGE'

 