controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 3 3 . . . . . . 
. . . 3 3 3 3 3 5 . 3 3 . . . . 
. . . 3 . 3 . 5 5 . . 3 . . . . 
. . 3 3 3 . 5 . . 3 . 3 . . . . 
. 3 3 . 3 . 5 . . 3 3 3 . . . . 
. 3 3 . 3 5 5 . . 3 3 . . 5 5 5 
. 3 3 3 3 5 5 . 3 5 5 5 5 5 5 5 
. . 3 . 3 5 5 5 5 5 5 5 . . . . 
. . . 3 3 5 5 3 3 3 3 3 . . . . 
. . . . . 5 5 . . . . . . . . . 
. . . . . 5 5 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdate(function () {
    controller.moveSprite(mySprite)
})
