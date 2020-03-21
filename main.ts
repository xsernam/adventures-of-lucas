enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 
7 a 7 7 7 7 e e e 7 7 7 7 7 7 7 
a 5 a 7 7 7 e d e 7 7 7 7 7 7 7 
7 a 7 7 7 7 e e e 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 e e e 7 7 7 7 7 7 7 
7 7 7 7 7 7 e d e 7 7 7 7 7 7 7 
7 7 7 7 7 7 e e e 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 4 7 7 7 7 a 7 7 7 
7 7 7 7 7 7 7 4 7 7 7 a 5 a 7 7 
7 7 7 7 7 7 e e e 7 7 7 a 7 7 7 
7 7 7 a 7 7 e d e 7 7 7 7 7 7 7 
7 7 a 5 a 7 e e e 7 7 7 7 7 7 7 
7 7 7 a 7 7 7 4 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 4 7 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
7 e e e e e e e e e e e b e e b 
7 7 7 1 1 1 1 1 1 1 1 1 e 1 1 e 
7 7 d d d d d d d d d d e d 1 e 
7 e e e e e e e e e e e b e e b 
f f f f f f f f f f f f e d 1 e 
f f f f f f f f f f f f e d 1 e 
f f f f f f f f f f f f e d 1 e 
f f f f f f f f f f f f e d 1 e 
f f f f f f f f f f f f e d 1 e 
f f f f f f f f f f f f e d 1 e 
f f f f f f f f f f f f e d 1 e 
f f f f f f f f f f f f e d 1 e 
7 e e e e e e e e e e e b e e b 
7 7 1 1 1 1 1 1 1 1 1 1 e 1 1 e 
7 7 7 d d d d d d d d d e d 1 e 
7 7 e e e e e e e e e e b e e b 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
6 7 6 6 6 6 6 6 6 6 6 6 7 7 7 6 
6 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 7 6 6 6 e e e e e 6 6 6 6 6 6 
6 6 6 6 e d d d d d e 6 6 7 6 6 
6 6 6 e d e e e e e d e 6 7 6 6 
6 6 6 e d e d d d e d e 6 6 6 6 
6 6 6 e d e d e d e d e 6 6 6 6 
6 6 6 e d e d d d e d e 6 6 6 6 
6 6 6 e d e e e e e d e 7 6 6 6 
6 6 6 7 7 d d d d d e 7 7 6 6 6 
6 6 6 7 7 e e e e e 7 7 6 6 6 6 
6 7 6 6 6 6 6 6 7 7 7 6 6 6 6 6 
6 7 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
7 7 7 6 6 6 6 6 6 6 6 6 6 7 7 6 
6 6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
6 6 6 7 7 6 6 6 6 6 6 6 6 6 6 7 
6 6 6 7 6 6 6 6 6 6 6 6 6 6 6 7 
6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 6 
6 6 6 6 6 e e e e e 7 7 7 6 6 6 
6 6 6 e e d d d d d 7 7 e 6 6 6 
7 6 e d d e e e e e e d d e 6 6 
7 7 e e e d d d d d d e e e 6 6 
6 6 e e e e e e e e e e e e 6 7 
6 6 e e e e e e e e e e e e 6 7 
6 6 e e 7 e e e e e e e e e 6 6 
6 e e 7 7 e e e e e 7 e e e 6 6 
6 e e 7 7 7 e e e e 7 7 e e e 6 
e e 7 7 7 7 7 7 e 7 7 7 e e e e 
e e 6 6 7 7 7 7 7 7 7 7 7 7 e e 
6 6 6 6 6 6 e e 6 6 6 6 6 6 6 e 
6 6 6 6 6 6 6 e 6 6 6 6 7 7 6 6 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 3 7 7 7 7 7 7 d 7 7 7 7 7 7 
7 3 5 3 7 d d 7 7 7 7 7 7 7 7 7 
7 7 3 7 7 d d 7 7 7 7 7 7 7 3 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 3 5 3 
7 7 7 7 d 7 7 7 7 d d 7 7 7 3 7 
7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 
7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 d 7 7 7 7 7 
7 3 7 7 d d 7 7 7 7 7 7 7 7 3 7 
3 5 3 7 d d 7 7 7 7 7 7 7 3 5 3 
7 3 7 7 7 7 7 7 d d 7 7 7 7 3 7 
7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
6 6 6 6 6 6 6 d d 6 6 d 6 6 6 6 
7 6 6 d d 6 6 d d 6 6 6 6 6 6 6 
7 4 6 d d 6 6 6 6 6 6 6 6 7 6 6 
4 5 4 6 6 6 d 6 6 6 6 6 7 4 6 6 
6 4 6 6 6 6 6 6 6 d d 6 4 5 4 6 
6 6 6 6 d d 6 6 6 d d 6 6 4 6 6 
6 6 6 6 d d 6 6 6 6 6 6 6 6 6 6 
6 6 7 6 6 6 6 d 6 6 6 6 6 6 6 7 
6 7 7 d 6 6 6 6 6 d d 6 6 6 7 7 
6 6 6 6 6 d d 6 6 d d 6 6 6 6 6 
6 6 6 6 6 d d 6 6 6 6 6 6 6 6 6 
6 6 6 4 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 4 5 4 6 6 7 7 6 6 6 6 4 6 6 
6 7 6 4 6 6 6 6 7 6 6 6 4 5 4 6 
7 7 6 6 6 6 6 6 6 6 6 6 7 4 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
7 7 7 7 7 7 7 7 7 7 7 7 b 5 b 7 
7 7 7 7 7 4 4 4 4 4 7 7 7 b 7 7 
7 b 7 7 7 7 4 e 4 7 7 7 7 7 7 7 
b 5 b 7 7 7 4 e 4 7 7 7 7 7 7 7 
7 b 7 7 7 4 4 e 4 7 7 7 7 7 7 7 
7 7 7 7 7 4 e e e 4 7 7 7 b 7 7 
7 7 7 7 4 4 e 5 e 4 4 7 b 5 b 7 
7 7 7 7 4 e 5 5 5 e 4 7 7 b 7 7 
7 7 7 7 4 e 5 5 5 e 4 7 7 7 7 7 
7 7 7 7 4 4 e 5 e 4 4 7 7 7 7 7 
7 7 b 7 7 4 e e e 4 7 7 7 7 7 7 
7 b 5 b 7 4 4 e 4 4 7 7 7 7 7 7 
7 7 b 7 7 7 4 4 4 7 7 7 7 7 7 b 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 b 5 
7 7 7 7 7 7 7 b 7 7 7 7 7 7 7 b 
7 7 7 7 7 7 b 5 b 7 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
6 6 6 6 6 6 6 d d 6 6 d 6 6 6 6 
7 6 6 d d 6 6 d d 6 6 6 6 6 6 6 
7 2 6 d d 6 6 6 6 6 6 6 6 7 6 6 
2 5 2 6 6 6 d 6 6 6 6 6 7 2 6 6 
6 2 6 6 6 6 6 6 6 d d 6 2 5 2 6 
6 6 6 6 d d 6 6 6 d d 6 6 2 6 6 
6 6 6 6 d d 6 6 6 6 6 6 6 6 6 6 
6 6 7 6 6 6 6 d 6 6 6 6 6 6 6 7 
6 7 7 d 6 6 6 6 6 d d 6 6 6 7 7 
6 6 6 6 6 d d 6 6 d d 6 6 6 6 6 
6 6 6 6 6 d d 6 6 6 6 6 6 6 6 6 
6 6 6 2 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 2 5 2 6 6 7 7 6 6 6 6 2 6 6 
6 7 6 2 6 6 6 6 7 6 6 6 2 5 2 6 
7 7 6 6 6 6 6 6 6 6 6 6 7 2 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
7 7 6 6 6 6 6 6 6 6 6 6 6 6 7 7 
6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
6 6 7 6 6 6 6 6 6 6 6 7 7 6 6 6 
6 7 7 6 6 6 6 6 6 6 6 6 7 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 5 5 5 6 6 6 6 6 6 6 6 6 
6 6 6 6 5 6 5 5 5 5 5 5 5 6 6 6 
6 6 6 6 5 5 5 6 5 6 5 6 5 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 5 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
6 6 7 6 6 6 6 6 6 6 6 6 6 6 7 7 
6 7 7 6 6 6 6 6 7 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 7 7 6 6 6 6 6 6 6 7 7 6 6 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 7 7 7 7 7 7 d 7 7 7 7 7 7 
7 2 5 2 7 d d 7 7 7 7 7 7 7 7 7 
7 7 2 7 7 d d 7 7 7 7 7 7 7 2 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 2 5 2 
7 7 7 7 d 7 7 7 7 d d 7 7 7 2 7 
7 7 7 7 7 7 7 7 7 d d 7 7 7 7 7 
7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 d d 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 d 7 7 7 7 7 
7 2 7 7 d d 7 7 7 7 7 7 7 7 2 7 
2 5 2 7 d d 7 7 7 7 7 7 7 2 5 2 
7 2 7 7 7 7 7 7 d d 7 7 7 7 2 7 
7 7 7 7 7 7 7 7 d d 7 7 7 7 7 7 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
e e e e e e e e e e e e e e e e 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 c c c e d d 
d d e 4 f 4 f 4 f 4 c c c e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
`
    //% blockIdentity=images._tile
    export const tile12 = img`
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
e e e e e e e e e e e e e e e e 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 a a a e d d 
d d e 4 f 4 f 4 f 4 a a a e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
`
    //% blockIdentity=images._tile
    export const tile13 = img`
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
e e e e e e e e e e e e e e e e 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 6 6 6 e d d 
d d e 4 f 4 f 4 f 4 6 6 6 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
`
    //% blockIdentity=images._tile
    export const tile14 = img`
d d d d 1 d d d d 1 d d d d 1 d 
d d d d 1 d d d d 1 d d d d 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 e e e e e e e e e e e e 1 d 
d 1 e 9 9 9 9 9 9 9 9 9 9 e 1 d 
d 1 e 9 9 9 9 9 9 9 1 9 9 e 1 1 
d 1 e 9 9 9 1 9 9 1 9 9 9 e 1 d 
d 1 e 9 9 1 9 9 1 9 9 9 9 e 1 d 
d 1 e 9 1 9 9 1 9 9 1 9 9 e 1 1 
d 1 e 9 9 9 9 9 9 1 9 9 9 e 1 d 
d 1 e 9 9 9 9 9 1 9 9 9 9 e 1 d 
d 1 e 9 9 9 9 9 9 9 9 9 9 e 1 1 
d 1 e e e e e e e e e e e e 1 d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
d d d d 1 d d d d 1 d d d d 1 1 
d d d d 1 d d d d 1 d d d d 1 d 
`
    //% blockIdentity=images._tile
    export const tile15 = img`
e e e e e e e e e e e e e e e e 
e 4 4 e 4 4 e 4 4 e 4 4 e 4 4 e 
e 4 2 e 4 2 e 4 2 e 4 2 e 4 2 e 
e 4 2 e 4 2 e 4 2 e 4 2 e 4 2 e 
e 4 2 e 4 2 e 4 2 e 4 2 e 4 2 e 
e 4 2 e 4 2 e 4 2 e 4 2 e 4 2 e 
e 4 2 e 4 2 e 4 2 e 4 2 e 4 2 e 
e 4 2 e 4 2 e 4 2 e 4 2 e 4 2 e 
e 4 2 e 4 2 e 4 2 e 4 2 e 4 2 e 
e 4 2 e 4 2 e 4 2 e 4 2 e 4 2 e 
e 4 2 e 4 2 e 4 2 e 4 2 e 4 2 e 
e 4 2 e 4 2 e 4 2 e 4 2 e 4 2 e 
e e e e e e e e e e e e e e e e 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 d d d 1 d d d d 1 d d d d 1 d 
1 d d d 1 d d d d 1 d d d d 1 d 
`
    //% blockIdentity=images._tile
    export const tile16 = img`
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 a a a e d d 
d d e 4 f 4 f 4 f 4 a a a e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
e e e e e e e e e e e e e e e e 
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
`
    //% blockIdentity=images._tile
    export const tile19 = img`
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 6 6 6 e d d 
d d e 4 f 4 f 4 f 4 6 6 6 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
e e e e e e e e e e e e e e e e 
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
`
    //% blockIdentity=images._tile
    export const tile20 = img`
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 c c c e d d 
d d e 4 f 4 f 4 f 4 c c c e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
d d e 4 f 4 f 4 f 4 f 4 4 e d d 
e e e e e e e e e e e e e e e e 
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
d d e d d d d d d d d d d e d d 
`
    //% blockIdentity=images._tile
    export const tile21 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile22 = img`
b b b b b b b b b b b b b b b b 
b d d d d 4 4 4 4 4 d d d d d 1 
b d d d d d 4 e 4 d d d d d d 1 
b d d d d d 4 e 4 d d d d d d 1 
b d d d d 4 4 e 4 d d d d d d 1 
b d d d d 4 e e e 4 d d d d d 1 
b d d d 4 4 e 5 e 4 4 d d d d 1 
b d d d 4 e 5 5 5 e 4 d d d d 1 
b d d d 4 e 5 5 5 e 4 d d d d 1 
b d d d 4 4 e 5 e 4 4 d d d d 1 
b d d d d 4 e e e 4 d d d d d 1 
b d d d d 4 4 e 4 4 d d d d d 1 
b d d d d d 4 4 4 d d d d d d 1 
b d d d d d d d d d d d d d d 1 
b d d d d d d d d d d d d d d 1 
b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile23 = img`
6 6 6 6 6 6 6 6 6 7 7 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 7 6 6 6 6 6 
6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 7 7 7 6 6 1 3 1 6 6 6 6 6 6 6 
6 6 6 6 6 1 1 3 3 1 6 6 6 6 7 7 
6 6 6 6 6 1 1 1 1 1 6 6 6 6 7 6 
6 6 6 6 6 1 1 1 1 1 6 6 6 6 7 6 
6 6 6 6 6 1 1 1 1 1 6 6 6 6 6 6 
6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 7 7 7 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 7 6 6 6 6 6 6 6 6 6 7 6 6 6 6 
6 7 7 6 6 6 6 6 6 6 6 7 7 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile24 = img`
7 7 7 7 7 7 7 7 a 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 a 5 a 7 7 7 7 7 7 
7 7 3 7 7 7 7 7 a 7 7 7 7 7 7 7 
7 3 5 3 7 7 7 7 7 7 7 7 7 9 7 7 
7 7 3 7 7 7 7 7 7 7 7 7 9 5 9 7 
7 7 7 7 7 7 7 4 7 7 7 7 7 9 7 7 
7 7 7 7 7 7 4 5 4 7 7 7 7 7 7 7 
7 2 7 7 7 7 7 4 7 7 7 7 7 7 7 7 
2 5 2 7 7 7 7 7 7 7 7 7 7 2 7 7 
7 2 7 7 7 7 7 7 7 7 7 7 2 5 2 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 
7 7 7 7 7 7 a 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 a 5 a 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 a 7 7 7 7 7 7 7 7 7 
7 9 7 7 7 7 7 7 7 7 7 7 7 3 7 7 
9 5 9 7 7 7 7 7 7 7 7 7 3 5 3 7 
`
    //% blockIdentity=images._tile
    export const tile25 = img`
b c c c c c c c c c c c c c b c 
c c c c c c c b a c c c c c c c 
c c b c c c a a a a a a c c c c 
c c c c c a a 6 6 6 6 6 a c c c 
c c c c 6 a 6 6 6 6 6 6 a c c c 
c c c a 6 a a 6 a a 6 6 a c c c 
c c b a 6 6 a 6 6 a 6 6 a c c c 
c c c a 6 6 a a a a 6 6 a c c c 
c c c a a 6 6 6 6 6 6 a a c c c 
c c c c a 6 6 6 6 6 a a c c b c 
c c c c c a a a a a a c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c c b c c c 
b c c c c c c c c c c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile26 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile27 = img`
b c c c c c c c c c c c c c b c 
c c c c c c c b 7 c c c c c c c 
c c b c c c 7 7 7 7 7 7 c c c c 
c c c c c 7 7 9 9 9 9 9 7 c c c 
c c c c 9 7 9 9 9 9 9 9 7 c c c 
c c c 7 9 7 7 9 7 7 9 9 7 c c c 
c c b 7 9 9 7 9 9 7 9 9 7 c c c 
c c c 7 9 9 7 7 7 7 9 9 7 c c c 
c c c 7 7 9 9 9 9 9 9 7 7 c c c 
c c c c 7 9 9 9 9 9 7 7 c c b c 
c c c c c 7 7 7 7 7 7 c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c c c c c c b c c c 
b c c c c c c c c c c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile28 = img`
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c b c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c b c c c c c c 
c c c b c c c 5 5 5 c c c c c c 
c c c c c 7 5 c c c 5 7 c c c c 
c c c c c 5 c c 2 c c 5 c c c c 
c c c c c 5 5 c 5 c 5 5 c c b c 
c c c c c c 5 5 5 5 5 c c c c c 
c c b c c c c c 5 c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c b 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
b c c c c c c c c c c c b c c c 
`
    //% blockIdentity=images._tile
    export const tile29 = img`
c c c c c c c c b c c c c b c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c b c c c c c c c b c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c b c 1 1 c c c c c c b 
c c c c c c c 1 1 b c c c c c c 
c c c c c c c 1 1 c c c c c c c 
c b c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c b c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c b c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c b c c c c c c c c c c c c b 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    lucas.setPosition(400, 700)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    music.powerUp.play()
    tiles.setTileAt(location, sprites.castle.tileDarkGrass3)
    for (let value of tiles.getTilesByType(sprites.dungeon.doorLockedEast)) {
        tiles.setTileAt(value, sprites.dungeon.doorOpenEast)
        tiles.setWallAt(value, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile27, function (sprite, location) {
    lucas.setPosition(720, 980)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile25, function (sprite, location) {
    lucas.setPosition(720, 980)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    lucas.setPosition(150, 315)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile13, function (sprite, location) {
    lucas.setPosition(565, 1010)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    music.magicWand.play()
    tiles.setTileAt(location, sprites.dungeon.floorMixed)
    for (let value of tiles.getTilesByType(sprites.builtin.forestTiles2)) {
        tiles.setTileAt(value, sprites.castle.tilePath5)
        tiles.setWallAt(value, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
    for (let value of tiles.getTilesByType(myTiles.tile4)) {
        tiles.setTileAt(value, sprites.castle.tileDarkGrass3)
        tiles.setWallAt(value, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    color.startFade(color.originalPalette, color.Black, 200)
    color.startFade(color.Black, color.originalPalette, 200)
    lucas.setPosition(105, 325)
    color.clearFadeEffect()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile12, function (sprite, location) {
    lucas.setPosition(420, 1010)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile22, function (sprite, location) {
    music.baDing.play()
    tiles.setTileAt(location, sprites.dungeon.floorLight2)
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    lucas.setPosition(105, 570)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    lucas.setPosition(105, 450)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile20, function (sprite, location) {
    lucas.setPosition(105, 700)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile28, function (sprite, location) {
    music.magicWand.play()
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    info.changeLifeBy(5)
    game.splash("you just found your first artifact")
    game.splash("find 3 more and return to the place you began")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    lucas.setPosition(740, 865)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    lucas.setPosition(720, 980)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    lucas.setPosition(105, 210)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.powerDown.play()
    monster.follow(lucas, 20)
    info.changeLifeBy(0)
    scene.cameraShake(4, 500)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile16, function (sprite, location) {
    lucas.setPosition(105, 700)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    lucas.setPosition(720, 980)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    lucas.setPosition(270, 160)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    lucas.setPosition(250, 1130)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile7, function (sprite, location) {
    music.baDing.play()
    tiles.setTileAt(location, sprites.castle.tileGrass1)
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    music.powerUp.play()
    info.changeScoreBy(50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    music.baDing.play()
    tiles.setTileAt(location, sprites.dungeon.purpleSwitchDown)
    for (let value of tiles.getTilesByType(sprites.dungeon.purpleOuterNorth2)) {
        tiles.setTileAt(value, sprites.dungeon.stairSouth)
        tiles.setWallAt(value, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    lucas.setPosition(720, 1010)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight4)
    for (let value of tiles.getTilesByType(sprites.dungeon.hazardSpike)) {
        tiles.setTileAt(value, sprites.dungeon.floorLight4)
        tiles.setWallAt(value, false)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile19, function (sprite, location) {
    lucas.setPosition(105, 700)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    lucas.setPosition(90, 1000)
})
let sheep: Sprite = null
let monster: Sprite = null
let bat: Sprite = null
let lucas: Sprite = null
lucas = sprites.create(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, SpriteKind.Player)
game.splash("adventures of lucas")
game.showLongText("hello stranger...", DialogLayout.Bottom)
game.showLongText("you might ask yourself, where am i", DialogLayout.Bottom)
game.showLongText("but dont worry u are in the best world possible", DialogLayout.Bottom)
game.setDialogTextColor(2)
game.showLongText("the world of corona", DialogLayout.Bottom)
game.setDialogTextColor(15)
game.showLongText("enjoy and explore", DialogLayout.Bottom)
scene.setBackgroundColor(12)
scene.cameraFollowSprite(lucas)
controller.moveSprite(lucas)
lucas.setPosition(107, 93)
tiles.setTilemap(tiles.createTilemap(
            hex`3700500000000000000000000000000000000000000000000000000000005254546b545451000000000000000000000000000000000000000000000000000000000000000000000031000000000000000000000000536f6f6d6f6f50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000536f6d6d6d6f50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000536f6d6e6d6f50000000000000000000000000000000000000000000000000000203030303030400000000000000000000000000000000537b746e716d5000000000000000000000000000000000000000000000000000060d01012c2e0500000000020303030400000000000000536d6e6e6e6d500000000000000000000000000000000000000000000000000006012e2c2f2e0500000000062b302b0500000000000000536d726e736d5000000000000000000000000000000000000000000000000000062c2e2e01010500000000062b2b2b0500000000000000536d6d6e6a6d5000000000000000000000000000000000000000000000000000062f2e012e2c0500000000062b2b2b0500000000000000536f6d6d6d6f5000000000000000000000000000000000000000000000000000062e2e2e2c2c0500000000062b2b2b0500000000000000536f6d6d6d6f500000000000000000000000000000000000000000000000000007080b0e0c08090000000007082a080900000000000000536f6f6d6f6f500000000000000000000000000000000000000000000000000000000601050000000000000000000000000000000000004d66646d68664f00000000000000000000000000000000000000000000000000000006010500000000000000000000000000000000000000004e6d500000000000000000000000000000000000000000000000000000000000060f0500000000000000000000000000000000000000004e6d5000000000000000000000000000000000000000000000000000000000000708090000000000000000000000000000000052636363656a6754636363636363636363636363635100000000000000000000000000000000000000000000000000000000000000000053161616166a6a6a6a6a6a6a6a6a6a6a6a166a166a5000000000000000000000000000000000000000000000000000000000000000000053161616166a6a6a6a6a6a6a6a6a6a6a6a166a166a500000000000000000000000004a4a4a4a4a4a4a0000000000000000000000000000536a6a6a6a16161616161616161616166a6a6a6a6a50000000000000000000000018111111111111111800000000000000000000000000531616166a6a166a6a6a6a6a6a6a6a6a6a6a6a6a6a50000000000000000000000018114911111111261800000000000000000000000000536a6a6a6a1616166a6a6a6a6a6a6a6a6a1616166a50000000000000000000000018111111101111271800000000000000000000000000536a6a6a6a166a166a161616161616166a166a166a500000000000000000000000181616151515190118000000000000000000000000005316166a16166a166a166a6a6a6a6a166a6a6a166a50000000000000000000000018191515010116161800000000000000000000000000536a166a16166a1616166a6a6a6a6a166a6a6a166a5000000000000000000000001819010115151519180000000000007e000000000000536a166a6a6a6a6a6a6a6a1616166a166a166a166a500000000000000000000000180101190101191a1800000000000000000000000000536a166a6a6a6a6a6a6a6a166a166a166a166a166a500000000000000000000000181b1919011a191b1800000000000000000000000000536a161616166a16161616166a1616166a1616166a500000000000000000000000181a1a1c1c1a1a1c1800000000000000000000000000536a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a500000000000000000000000181a1b1a1c1a1b1c1800000000000000000000000000536a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a6a500000000000000000000000181c1a1a1a1a1b1a18000000000000000000000000004d4c4c4c4c4c4c4c4c646a6a684c4c4c4c4c4c4c4c4f5454545451000000000000181a1a3d3d3d1c4118000000000000000000000000000000004e7a6a535353536a6a62505050502e2e2e2e2e2e2e2e2e500000000000001818183d3d3d181818000000000000000000000000000000004e6a6a535353536a6a62505050502e306a6a306a6a302e50000000000000000018181818180000000000000000000000000000000000004e6a6a535353536a6a62505050502e6a6a6a6a6a6a6a2e50000000000000000000000000000000000000000000000000000000000000004e6a6a535353536a6a62505050502e6a6a6a6a7b6a6a2e50000000000000000018181818180000000000000000000000000000000000004e6a6a535353536a6a75757575752e6a6a6a6a6a6a6a2e500000000000001818183e3e3e181818000000000000000000000000000000004e7979535353536a6a75757575752e6a7b6a6a6a6a6a2e50000000000000181d1d3e3e3e361d1800000000000000000000000000000000545454655353536a6a62505050502e2e2e2e2e2e2e2e2e50000000000000181d331d36361d1d1800000000000000000000000000004e4e54545454654e536a6a625050506754545454545454545451000000000000181d331d1d1d1d1d1800000000000000000000000000004e4e545454545465536a6a625050675454545254545454545150000000000000181d1d1d33331d1d1800005a00000000000000000000004e4e546363636363656a6a625077775454544e6a6a6a6a6a5050000000000000181d361d1d331d1d1d18000000000000000000000000004e4e406a6a6a6a6a6a6a6a506725255454544e6a306a306a505000000000000018361d361d1d5d1d1d18000000000000000000000000004e4e406a6a6a6a6a6a6a6a50526969545454656a6a6a6a6a505000000000000018361d1d361d1d361d18000000000000000000000000004e4e4c4c4c4c4c4c646a6a504e6a6a6a6a6a6a6a6a6a6a6a5050000000000000181d335d1d1d1d361d18181818181818181818181818004e4e4c4c4c4c4c644e6a6a504e6a6a6a6a6a6a6a6a6a6a165050000000000000181d33331d36361d1d1d1d1d1d1d1d1d1d1d32383838004e4e4c4c4c4c644e4e6a6a504e6a6a684c4c646a6a6a6a165050000000000000181d1d1d1d361d1d331d1d361d33331d1d19193838380000004c4c4c644e4e4e6a6a504e6a6a5068644e166a6a7b6a5050000000000000181d1d1d1d1d1d33331d1d5d1d1d33361919133838380000006a6a6a4e4e4e4e6a6a67656a6a50504e4e16166a6a6a5050000000000000181d33331d5d1d1d36361d331d1d1d363619383838380000006a6a6a4e4e4e4e6a6a6a6a6a6a50504e4d4c4c4c4c4c4f50000000000000181d1d1d1d1d1d1d18181818181818181818181818180000006a6a6a4e4e4e4e6a6a6a6a6a6a50504d4c4c4c4c4c4c4c4f000000000000181d1d1d1d1d1d3318000000000000000000000000000000006a6a6a4e4e4e4d6666666666664f506a6a6a6a6a6a6a6a6a000000000000181d5d1d1d1d1d3318000000000000000000000000000000006a6a6a4e4e4d4c4c4c4c4c4c4c4c4f6a6a6a6a6a6a6a6a6a000000000000181d1d331d1d1d1d18000000000000181818181800000000006a6a6a4e4d4c4c4c4c4c4c4c4c4c4c525454545454510000000000000000181d1d33331d1d1d180000000000181833333318180000000000000000000000000000000000000053552c2b1616500000000000000000185d1d1d1d1d1d1d1818181818181833335d333318180000000000000000000000000000000000004e2b2b2d1616500000000000000000181d1d1d1d1d1d1d33331d1d3c3333333333333344180000000000000000000000000000000000004e5c2d2c2d2b500000000000000000181d1d1d1d5d1d1d1d1d1d1d3c3333335d33333333180000000000000000000000000000000000004e162c2c2b24500000000000000000181d1d1d1d1d181818181818181818333333333318180000000000000000000000000000000000004d4c4c4c4c4c4f0000000000000000181d331d1d1818000000000000001818333333181800000000000000000000000000000000000000000000000000000000000000000000181d33331d1800000000000000000018181818180000000000000000000000000000000000000000000000000000000000000000000000181d1d1d1d1800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000181d5d1d1d1800000000000000000000000000000000020303030304000000020303030304000000020303030303040000000000000000181d1d331d1800000000000000000000000000000000062b302b5c0500000006302b302b0500000006302b2b2b2b050000000000000000181d1d331d1800000000000000000000000000000000062b2b2b5c05000000062b2b2b2b05000000062b2b2b232b05000000000000000018331d1d1d1800000000220000000000000000000000062b2b2b2b05000000062b2b2b2b05000000065c2b2b2b2b050000000000000000183343431d1800000000000000000000000000000000062b2b2b2b05000000062b2b2b5c05000000065c2b2b2b2b050000000000000000181843431818000000000000000000000000000000000708580808090000000708590808090000000708085a08080900000000000000001818434318180000000018181818181818180000000000000000000000000000000000000000000000000000000000000000000000000018181818181800000000181818181818181800000000000000000000000000000000000000000000000000000000000000000000000000181818181818000000001818184545181818000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018181845451818184a4a4a4a4a4a004a4a4a4a4a00004a4a4a4a4a4a0000000000000000000000000000000000000000000000000000001818184545181818111111111111001111111111000011111111111100000000000000000000000000000000000000000000000000000018181a1b191a1818114911111111001111114911212111111111491100000000000000000000000000000018181818181818181818181818181a19191a1818111111114911181149111111181811494911111118181818181818181818181818000018181a1c1c4242421a1a1a1a391a1a19191a1a1a1111471111111a111148111116161111111146111b161818181818181818181818000018181a1b1a4242421a1a1a1b391a1a1a191a1a1a161a151a1b1a1a1a1a151a1a1a1a1a1a1a1a151b1b1a1818181818181818181818000018181a1b1b1a1a1c1a1a1a1a391a1a1919191a19191a151a1a1919191a151a1a19191a1a1a1a15191919575757572828287c1818180000187d1a1a1a1a1a1c5e1a1a1a1a1a1a1a1919191919191919191919191919191919191919191919191919575757573434347c1818180000187d1a1a1a1a1c1a1a1a1a1a1a1a1a1c1a1a1a1a1a1919191a1a1a1a1a1a1919191a1a1919191a1a1a1a1818181818181818181818000018181a1a5e1c1a1a1a1a1b1b391a1a1c1a1a1a1a1a1a1a1a1a1a1a1c1c1c1a1a1a1b1b1a1a1c1c1c1a1b1818181818181818181818000018181a1a1a1a1a1a1a1a1a1a391a1a1a1a1a1a1a1a1a1a1a1b1b1a1a1a1c1c1a1a5e1a1a1a1c1a1a1b1b1818181818181818181818000018181818181818181818181818181818181818181818181818181818181818181818181818181818181818181818181818181818180000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . 2 2 2 2 2 . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . 2 . . . 2 . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . 2 . . . 2 . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . 2 . . . 2 . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . 2 . . . 2 . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . 2 2 . 2 2 . . . . . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . . . . . . . . . . . 2 2 2 . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 2 2 . . . . . . . . . . . . . . . . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . 2 . 2 . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . 2 . 2 . 2 2 . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 . . 2 . . . . . . . . . . . . . . 2 2 . . . . . . . . 
. . 2 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . 2 . . . . 2 2 2 . . . . . . . . . 2 2 2 . 2 2 . . . . . . . . 
. . 2 2 2 2 . 2 2 . 2 . . . . . . . . . . . . . 2 . . . . 2 . 2 . 2 2 2 2 2 2 2 . 2 . 2 . 2 . . . . . . . . . 
. . 2 2 2 . . . . . 2 . . . . . . . . . . . . . 2 2 2 . 2 2 . 2 . 2 . . . . . 2 . . . 2 . 2 2 . . . . . . . . 
. . 2 . . . . . 2 2 2 . . . . . . . . . . . . . 2 . 2 . 2 2 . 2 2 2 . . . . . 2 . . . 2 . 2 2 . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . 2 . . . . . . . . 2 2 2 . 2 . 2 . 2 . 2 2 . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . 2 . . . . . . . . 2 . 2 . 2 . 2 . 2 . 2 . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . 2 2 2 2 . 2 2 2 2 2 . 2 2 2 . 2 2 2 . 2 . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . 2 2 . 2 . . 2 . . . 2 . . . . . . . . . 2 . . . . 
. . 2 2 2 . . . 2 2 2 . . . . . . . . . . . . . . . . 2 . . 2 2 . 2 . . 2 . . . 2 . . . . . . . . . 2 . . . . 
. . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . 2 . . 2 2 . 2 . . 2 . . . 2 . . . . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 2 2 . 2 . . 2 2 2 2 2 . . . . . . . . . 2 . . . . 
. . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . 2 . . . . 
. . 2 2 2 . . . 2 2 2 . . . . . . . . . . . . . . . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . 2 . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . 2 2 2 2 2 . 2 . . 2 2 2 2 2 . . . . . . . . . 2 . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . . 2 . . 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . 2 . . . 2 2 2 . . 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . 2 2 . . 2 . . 2 . . . . . 2 2 . . . . 
. . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . 2 . . 2 . . . . . 2 2 . . . . 
. . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . 2 2 . . . . 
. . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . 2 2 . . . . . . . . . . . 2 2 2 . . . 
. . 2 . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 . . 2 2 . . . . . . . . . . 2 2 2 2 . . . 
. . 2 . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . 2 . . 2 2 . . 2 2 2 2 . . . . 2 2 2 . . . . 
. . 2 . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . 2 . . 2 2 . . 2 . . 2 2 . . . . 2 2 . . . . 
. . 2 . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . 2 . . 2 2 . . 2 . . 2 2 2 . . . 2 2 . . . . 
. . 2 . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . 2 . . . . . . 2 . . 2 2 2 2 2 2 2 2 . . . . 
. . 2 . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . 2 . . . . . . 2 . . . . . . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . 
. . 2 . . . . . . . 2 . . . . . 2 2 . . . 2 2 . . . . . . . . . . . . . . . . . . . 2 . . . 2 2 2 . . . . . . 
. . 2 . . . . . . . 2 2 2 2 2 2 2 . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 . . . 2 2 2 . . . . . . 
. . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . . . 
. . 2 . . . . . . . . . . . 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 2 . . . . 2 . . . . . . 
. . 2 . . . . . 2 2 2 2 2 2 2 2 2 . . . . . 2 2 . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . 
. . 2 . . . . 2 2 . . . . . . . 2 2 . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . 2 . . . . . . . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . 2 . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 . . . . . . 
. . 2 . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . 2 . . . 2 . . . . 2 . . . 2 . . . . . 2 . . . . . . 
. . 2 . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . 2 . . . 2 . . . . 2 . . . 2 . . . . . 2 . . . . . . 
. . 2 . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . 2 . . . 2 . . . . 2 . . . 2 . . . . . 2 . . . . . . 
. . 2 . . . . 2 . . . . . . . . . . . . . . . . 2 . . . . 2 . . . 2 . . . . 2 . . . 2 . . . . . 2 . . . . . . 
. . 2 2 . . 2 2 . . . . . . . . . . . . . . . . 2 2 . 2 2 2 . . . 2 2 . 2 2 2 . . . 2 2 2 . 2 2 2 . . . . . . 
. . 2 2 . . 2 2 . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 . . . . 2 2 2 . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 2 . . 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 . . . . . . . . . . 2 . . . . . . . 2 2 . 2 2 2 . 2 2 . 2 2 2 2 2 2 2 2 . 2 . 2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 . . . . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . 
2 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . 2 . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 . . . . 2 . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . 
2 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . 
2 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
`,
            [myTiles.tile0,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.buttonOrange,sprites.dungeon.hazardSpike,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenNorth,sprites.builtin.brick,sprites.dungeon.doorLockedNorth,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedWest,sprites.dungeon.floorLightMoss,sprites.dungeon.stairLadder,sprites.builtin.forestTiles0,sprites.builtin.forestTiles4,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.castle.shrub,sprites.castle.rock2,sprites.castle.rock1,sprites.castle.saplingOak,sprites.castle.rock0,sprites.dungeon.stairLarge,sprites.dungeon.stairEast,sprites.dungeon.stairSouth,sprites.dungeon.doorClosedNorth,sprites.dungeon.stairNorth,sprites.castle.tilePath2,sprites.builtin.forestTiles21,sprites.dungeon.doorClosedSouth,sprites.dungeon.floorLight2,sprites.dungeon.floorMixed,sprites.dungeon.floorLight5,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.builtin.forestTiles12,sprites.castle.tileDarkGrass2,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles8,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.doorOpenEast,sprites.dungeon.doorOpenWest,sprites.dungeon.buttonTeal,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,sprites.dungeon.floorLight3,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.buttonPink,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,myTiles.tile16,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23,myTiles.tile24,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles10,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleSwitchUp,sprites.builtin.crowd5,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark2,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.stairWest,sprites.dungeon.collectibleBlueCrystal,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile28,myTiles.tile29,sprites.castle.tilePath6,sprites.dungeon.doorClosedWest,sprites.dungeon.purpleSwitchDown],
            TileScale.Sixteen
        ))
info.setScore(0)
info.setLife(3)
animation.runImageAnimation(
lucas,
[img`
. . . . . . . . . . . . . 
. . . . . f f f f . . . . 
. . . f f f f f f f f . . 
. . f f f f f f c f f f . 
f f f f f f f c c f f f c 
f f f f c f f f f f f f c 
. c c c f f f e e f f c c 
. f f f f f e e f f c c f 
. f f f b f e e f b f f f 
. f f 4 1 f 4 4 f 1 4 f f 
. . f e 4 4 4 4 4 e e f e 
. f e f b 7 7 7 e 4 4 4 e 
. e 4 f 7 7 7 7 e 4 4 e . 
. . . f 6 6 6 6 6 e e . . 
. . . f f f f f f f . . . 
. . . f f f . . . . . . . 
`,img`
. . . . . . . . . . . . . 
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f c f f f f f f . . 
c f f f c c f f f f f f f 
c f f f f f f f c f f f f 
c c f f e e f f f c c c . 
f c c f f e e f f f f f . 
f f f b f e e f b f f f . 
f f 4 1 f 4 4 f 1 4 f f . 
e f e e 4 4 4 4 4 e f . . 
e 4 4 4 e 7 7 7 b f e f . 
. e 4 4 e 7 7 7 7 f 4 e . 
. . e e 6 6 6 6 6 f . . . 
. . . f f f f f f f . . . 
. . . . . . . f f f . . . 
`],
500,
true
)
for (let value of tiles.getTilesByType(myTiles.tile29)) {
    bat = sprites.create(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Enemy)
    tiles.placeOnTile(bat, value)
    bat.follow(lucas, 20)
    animation.runImageAnimation(
    bat,
    [img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`,img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c . . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f b 3 b c 3 b c f b b c c c . 
. c b b b b b b c f b c b c c . 
. c b b b b b b c b b c b b c . 
c b 1 b b b 1 b b b c c c b c . 
c b b b b b b b b c c c c c . . 
f b c b b b c b b b b f c . . . 
f b 1 f f f 1 b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . c c . . c c . . . . . . . . 
. . c 3 c c 3 c c c . . . . . . 
. c b 3 b c 3 b c c c . . . . . 
. c b b b b b b b b f f . . . . 
c c b b b b b b b b f f . . . . 
c b 1 b b b 1 b b c f f f . . . 
c b b b b b b b b f f f f . . . 
f b c b b b c b c c b b b . . . 
f b 1 f f f 1 b f c c c c . . . 
. f b b b b b b f b b c c . . . 
c c f b b b b b c c b b c . . . 
c c c f f f f f f c c b b c . . 
. c c c . . . . . . c c c c c . 
. . c c c . . . . . . . c c c c 
. . . . . . . . . . . . . . . . 
`,img`
. f f f . . . . . . . . f f f . 
f f c . . . . . . . f c b b c . 
f c c . . . . . . f c b b c . . 
c f . . . . . . . f b c c c . . 
c f f . . . . . f f b b c c . . 
f f f c c . c c f b c b b c . . 
f f f c c c c c f b c c b c . . 
. f c 3 c c 3 b c b c c c . . . 
. c b 3 b c 3 b b c c c c . . . 
c c b b b b b b b b c c . . . . 
c b 1 b b b 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
f b c b b b c b b b b f . . . . 
. f 1 f f f 1 b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`,img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c 1 b b b 1 b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b 1 f f 1 c b b b b f . . . . 
f f 1 f f 1 f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`,img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c c . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f c 3 b c 3 b c f b b c c c . 
f c b b b b b b c f b c b c c . 
c c 1 b b b 1 b c b b c b b c . 
c b b b b b b b b b c c c b c . 
c b 1 f f 1 c b b c c c c c . . 
c f 1 f f 1 f b b b b f c . . . 
f f f f f f f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 2 b b b c f . . . . 
. . f 2 2 2 b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . c c . c c . . . . . . . . 
. . f 3 c c 3 c c c . . . . . . 
. f c 3 b c 3 b c c c . . . . . 
f c b b b b b b b b f f . . . . 
c c 1 b b b 1 b b b f f . . . . 
c b b b b b b b b c f f f . . . 
c b 1 f f 1 c b b f f f f . . . 
f f 1 f f 1 f b c c b b b . . . 
f f f f f f f b f c c c c . . . 
f f 2 2 2 2 f b f b b c c c . . 
. f 2 2 2 2 2 b c c b b c . . . 
. . f 2 2 2 b f f c c b b c . . 
. . . f f f f f f f c c c c c . 
. . . . . . . . . . . . c c c c 
`,img`
. f f f . . . . . . . . f f f . 
f f c . . . . . . . f c b b c . 
f c c . . . . . . f c b b c . . 
c f . . . . . . . f b c c c . . 
c f f . . . . . f f b b c c . . 
f f f c c . c c f b c b b c . . 
f f f c c c c c f b c c b c . . 
. f c 3 c c 3 b c b c c c . . . 
. c b 3 b c 3 b b c c c c . . . 
c c b b b b b b b b c c . . . . 
c 1 1 b b b 1 1 b b b f c . . . 
f b b b b b b b b b b f c c . . 
f b c b b b c b b b b f . . . . 
. f 1 f f f 1 b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`],
    100,
    true
    )
}
for (let value of tiles.getTilesByType(myTiles.tile23)) {
    monster = sprites.create(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, SpriteKind.Enemy)
    tiles.placeOnTile(monster, value)
    monster.follow(lucas, 20)
    animation.runImageAnimation(
    monster,
    [img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`,img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 c 6 6 6 6 c 7 7 7 c . . . . 
f 7 6 f 6 6 f 6 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 7 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`,img`
. . . . . c c c c c c c . . . . 
. . . . c 6 7 7 7 7 7 6 c . . . 
. . . c 7 c 6 6 6 6 c 7 6 c . . 
. . c 6 7 6 f 6 6 f 6 7 7 c . . 
. . c 7 7 7 7 7 7 7 7 7 7 c . . 
. . f 7 8 1 f f 1 6 7 7 7 f . . 
. . f 6 f 1 f f 1 f 7 7 7 f . . 
. . . f f 2 2 2 2 f 7 7 6 f . . 
. . c c f 2 2 2 2 7 7 6 f c . . 
. c 7 7 7 7 7 7 7 7 c c 7 7 c . 
c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 1 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`],
    100,
    true
    )
}
for (let value of tiles.getTilesByType(myTiles.tile24)) {
    sheep = sprites.create(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`, SpriteKind.Food)
    tiles.placeOnTile(sheep, value)
    sheep.follow(lucas, 10)
    animation.runImageAnimation(
    monster,
    [img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`,img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e b f b . 
f d d f d d f d d f f d f . 
f b d d b b d d 2 b f d f . 
. f 2 2 2 2 2 2 d b d b f . 
. f d d d d d d d f f f . . 
. f d b d f f f d f . . . . 
. . f f f f . . f f . . . . 
`,img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 b f f d f 
. f 2 2 2 2 2 2 d b b d b f 
. f d d d d d d d f f f f . 
. . f d b d f d f . . . . . 
. . . f f f f f f . . . . . 
`],
    100,
    true
    )
}
let bed = sprites.create(img`
. . . b b c c c c c c b b . . . 
. . b d d d d d d d d 1 d b . . 
. b d d b b b b b b b b d d b . 
. c d b b b b b b b b b b d c . 
. c b b b c c c c c c b b b c . 
. c b b c 1 1 1 1 1 1 c b b c . 
. f b c d 1 1 1 1 1 1 d c b f . 
f 6 6 c d d 1 1 1 1 d d c 6 6 f 
f 6 c c c b b b b b b c c c 6 f 
f c b b 3 3 3 3 3 3 3 3 b b c f 
f b b 3 3 3 3 3 3 3 3 3 3 b b f 
f b b 3 d 1 1 1 1 1 1 d 3 b b f 
f b d 1 1 1 1 1 1 1 1 1 1 d b f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d b b c c c c c c b b d d f 
f d b d d d d d d d d 1 d b d f 
c b d d b b b b b b b b d d b f 
c c d b b b b b b b b b b d c c 
c c b c c c c c c c c c c b c c 
. c c c c c c c c c c c c c c . 
. f b b f b b b b b b f b b f . 
. . f f . . . . . . . . f f . . 
`, SpriteKind.Food)
bed.setPosition(134, 106)
forever(function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
})
