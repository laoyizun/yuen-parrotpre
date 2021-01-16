namespace SpriteKind {
    export const help = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const 锤子 = SpriteKind.create()
    export const 子弹 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.锤子, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.子弹, SpriteKind.enemy2, function (sprite, otherSprite) {
    敌人生命 += -1
    sprite.destroy()
    if (敌人生命 == 0) {
        game.over(true)
    }
})
function 第三关 () {
    光.destroy()
    boss = sprites.create(img`
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
        `, SpriteKind.enemy2)
    boss.setPosition(80, 60)
    敌人生命 = 20
    info.setLife(100)
    开始 = 5
}
function add地雷 () {
    地雷 = sprites.create(img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `, SpriteKind.Enemy)
    地雷.setFlag(SpriteFlag.Invisible, true)
    tiles.placeOnRandomTile(地雷, sprites.dungeon.darkGroundCenter)
}
// 第一关程序
function 第一关 () {
    add箭()
    pause(500)
}
info.onCountdownEnd(function () {
    开始 = 0
    pause(100)
    开始 = 3
})
function 射出锤子 () {
    pause(100)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . . f f f f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . . f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, boss, randint(-100, 100), randint(-100, 100))
    projectile2.setKind(SpriteKind.锤子)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
function add箭 () {
    projectile2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . . . . . . 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-100, 100), randint(-100, 100))
    projectile2.setKind(SpriteKind.Projectile)
    随机数 = randint(0, 7)
    if (随机数 == 0) {
        tiles.placeOnRandomTile(projectile2, sprites.dungeon.greenOuterNorthWest)
    }
    if (随机数 == 1) {
        tiles.placeOnRandomTile(projectile2, sprites.dungeon.greenOuterNorthEast)
    }
    if (随机数 == 2) {
        tiles.placeOnRandomTile(projectile2, sprites.dungeon.greenOuterSouthWest)
    }
    if (随机数 == 3) {
        tiles.placeOnRandomTile(projectile2, sprites.dungeon.greenOuterSouthEast)
    }
    if (随机数 == 4) {
        tiles.placeOnRandomTile(projectile2, sprites.dungeon.greenOuterEast2)
    }
    if (随机数 == 5) {
        tiles.placeOnRandomTile(projectile2, sprites.dungeon.greenOuterNorth2)
    }
    if (随机数 == 6) {
        tiles.placeOnRandomTile(projectile2, sprites.dungeon.greenOuterSouth2)
    }
    if (随机数 == 7) {
        tiles.placeOnRandomTile(projectile2, sprites.dungeon.greenOuterWest2)
    }
    projectile2 = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . . . . . . 4 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-100, 100), randint(-100, 100))
}
function 第二关 () {
    光 = sprites.create(img`
        1111111111111111111111111111111111111111
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1......................................1
        1111111111111111111111111111111111111111
        `, SpriteKind.help)
    光.setPosition(hero.x, hero.y)
    光.follow(hero, 500)
}
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.help, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setFlag(SpriteFlag.Invisible, false)
    地雷数 += 1
    pause(1000)
    otherSprite.destroy()
    if (地雷数 >= 20) {
        开始 = 4
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    add地雷()
    地雷数 += -1
    info.changeLifeBy(-1)
})
let 再检测 = 0
let 子弹: Sprite = null
let 检测3 = 0
let 检测2 = 0
let 地雷数 = 0
let 随机数 = 0
let projectile2: Sprite = null
let 地雷: Sprite = null
let boss: Sprite = null
let 光: Sprite = null
let 敌人生命 = 0
let 开始 = 0
let hero: Sprite = null
hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hero)
info.startCountdown(20)
开始 = 1
scene.cameraFollowSprite(hero)
info.setLife(20)
let mySprite = 0
forever(function () {
    if (检测2 == 1) {
        if (controller.A.isPressed()) {
            if (检测3 == 1) {
                子弹 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 4 4 4 4 4 4 4 . . . . . . 
                    . . . 4 4 4 4 4 4 4 4 . . . . . 
                    . . . 4 4 4 4 4 4 4 4 4 . . . . 
                    . . . 4 4 4 4 4 4 4 4 . . . . . 
                    . . . 4 4 4 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, hero, 50, 50)
                子弹.setKind(SpriteKind.子弹)
                子弹.follow(boss)
                检测3 = 0
                再检测 = 0
            }
        }
    }
    while (开始 == 1) {
        tiles.setTilemap(tiles.createTilemap(hex`1000100002070707070707070707070707070703090101010101010101010101010101060901010101010101010101010101010609010101010101010101010101010106090101010101010101010101010101060901010101010101010101010101010609010101010101010101010101010106090101010101010101010101010101060901010101010101010101010101010609010101010101010101010101010106090101010101010101010101010101060901010101010101010101010101010609010101010101010101010101010106090101010101010101010101010101060901010101010101010101010101010605080808080808080808080808080804`, img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 . . . . . . . . . . . . . . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2], TileScale.Sixteen))
        第一关()
    }
    while (开始 == 0) {
        for (let index = 0; index < 20; index++) {
            add地雷()
        }
        第二关()
        pause(5000)
    }
    while (开始 == 4) {
        第三关()
        检测2 = 1
    }
    while (开始 == 5) {
        射出锤子()
    }
})
forever(function () {
    if (再检测 == 0) {
        pause(5000)
        检测3 = 1
        再检测 = 1
    }
})
