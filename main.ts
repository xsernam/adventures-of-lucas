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
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedSouth, function (sprite, location) {
    lucas.setPosition(150, 315)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    lucas.setPosition(105, 325)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    lucas.setPosition(105, 210)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    lucas.setPosition(270, 160)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
    music.powerUp.play()
    info.changeScoreBy(50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorLight4)
    for (let value of tiles.getTilesByType(sprites.dungeon.hazardSpike)) {
        tiles.setTileAt(value, sprites.dungeon.floorLight4)
        tiles.setWallAt(value, false)
    }
})
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
scene.cameraFollowSprite(lucas)
controller.moveSprite(lucas)
lucas.setPosition(107, 93)
tiles.setTilemap(tiles.createTilemap(
            hex`1e003200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020303030303040000000000000000000000000000000000000000000000060d01012c2e05000000000203030304000000000000000031000000000006012e2c2f2e0500000000062b302b050000000000000000000000000000062c2e2e01010500000000062b2b2b050000000000000000000000000000062f2e012e2c0500000000062b2b2b05000000000000000000000000000006012e2e2c2c0500000000062b2b2b05000000000000000000000000000007080b0e0c08090000000007082a080900000000000000000000000000000000060105000000000000000000000000000000000000000000000000000000060105000000000000000000000000000000000000000000000000000000060f05000000000000000000000000000000000000000000000000000000070809000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000181111111111111118000000000000000000000000000000000000000000181111111111112618000000000000000000000000000000000000000000181111111011112718000000000000000000000000000000000000000000181616151515190118000000000000000000000000000000000000000000181915150101161618000000000000000000000000000000000000000000181901011515151918000000000000000000000000000000000000000000180101190101191a18000000000000000000000000000000000000000000181b1919011a191b18000000000000000000000000000000000000000000181a1a1c1c1a1a1c18000000000000000000000000000000000000000000181a1b1a1c1a1b1c18000000000000000000000000000000000000000000181c1a1a1a1a1b1a18000000000000000000000000000000000000000000181a1a1b1a1c1c1a1800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . 2 2 2 2 2 . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . 2 . . . 2 . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . 2 . . . 2 . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . 2 . . . 2 . . . . . . . . . . . 
. . . 2 . . . . . 2 . . . . 2 . . . 2 . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 . . . . 2 2 . 2 2 . . . . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 2 . 2 2 . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 2 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . 2 . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.floorLight4,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.buttonOrange,sprites.dungeon.hazardSpike,sprites.dungeon.doorOpenSouth,sprites.dungeon.doorOpenNorth,sprites.builtin.brick,sprites.dungeon.doorLockedNorth,sprites.dungeon.doorLockedEast,sprites.dungeon.doorLockedWest,sprites.dungeon.floorLightMoss,sprites.dungeon.stairLadder,sprites.builtin.forestTiles0,sprites.builtin.forestTiles4,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass3,sprites.castle.shrub,sprites.castle.rock2,sprites.castle.rock1,sprites.castle.saplingOak,sprites.castle.rock0,sprites.dungeon.stairLarge,sprites.dungeon.stairEast,sprites.dungeon.stairSouth,sprites.dungeon.doorClosedNorth,sprites.dungeon.stairNorth,sprites.castle.tilePath2,sprites.builtin.forestTiles21,sprites.dungeon.doorClosedSouth,sprites.dungeon.floorLight2,sprites.dungeon.floorMixed,sprites.dungeon.floorLight5,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen],
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
`, SpriteKind.Enemy)
bed.setPosition(134, 106)
