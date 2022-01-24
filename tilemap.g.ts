// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000030404040404040404040404040404050c0202010e010e0202020102010201060c0201010e0e0e0e0e010e0e0e0e0e060c0101010101010e01010e0102010e060c0e0e0e0e100e0e10010e010e0e0e060c010e020e01020e0e010e010e020e060b010e020e0111020f0f0e010e010e060b010e020e0e0e0e010e0e0101010e060b010e010e010f01010f01010e010e060b010e010e0e0e0e0e0e0e0e0e010e060b010e010e0101010102010102010e060b0e0e010e010e0e0e0e0e0e0e0e0e060b010e01010202020201010102010e060b010e0e010e0e0e0e0e0e0e0e0e0e060b010101010101010d010102020201060a090909090909090808080808080807`, img`
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
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight4,sprites.dungeon.floorLightMoss,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101040105050501010101010101010101010404040404010404040404040101010104010101010101040501010101010101010101010101010401050104010501010402020202020104050504040404040404020202020201040101010101050101040202020202010401040401010105010702020202020104050401010101050104040404040404040504010101010501020202020201010401040101010105050404040404040404010401010101010504040606060601030304030301010105010406010101010303040303010101050101060101040404040403030101010501040404040408030303040301010101050101010403030303030303`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.swamp.swampTile2,sprites.swamp.swampTile13], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020101010101020101010101010303020201010101010201010101010202030202010101010102010101010101020102020101010101020101020101010201020201010101010201010201010102010202010101010102010102010101020102020101010101020101020101010201020201010202020201010201010102010202010101010101010102010101020102020101010101010101020101010201020201010201030101010201010202010202010102010101010101010101010102020101020202020202010101020101020201010101010101010102010101010202020202010102020202020202020202`, img`
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
. . . . . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.hazardLava1,sprites.dungeon.buttonTeal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
