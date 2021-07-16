for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showNumber(7)
}
led.setBrightness(90)
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showString("Github rocks!")
}
