scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouthWest, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterWest1, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth0, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorthWest, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterWest0, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorthEast, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    mySprite.setPosition(24, 25)
    tiles.setTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    mySprite.setPosition(24, 25)
    tiles.setTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth0, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouth1, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterSouthEast, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    mySprite.setPosition(24, 25)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    game.over(true)
    effects.confetti.endScreenEffect()
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
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
    . f f f f f f f f f f . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(24, 25)
tiles.setTilemap(tilemap`level1`)
forever(function () {
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 71, 71)
})
