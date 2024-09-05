/* 
    Numeric enums 
*/

enum Sizes {
    sm, // 0
    md, // 1
    lg, // 2
};

enum Sizes {
    // we can't have just 'xl' because the sm is already 0
    // that's why we need to assign to 3
    xl = 3,
};

// Reverse mapping
console.log(Sizes.sm, Sizes[Sizes.sm]) // 0 sm  
console.log(Sizes.md, Sizes[Sizes.md]) // 1 md  
console.log(Sizes.lg, Sizes[Sizes.lg]) // 2 lg  
console.log(Sizes.xl, Sizes[Sizes.xl]) // 3 xl  

const selectedSize = 2;

console.log(Sizes[selectedSize]); // lg