let start = 1
let code = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
        start = 0
    }
    if (input.buttonIsPressed(Button.A) && code == 0) {
        code = 1
    }
    if (input.buttonIsPressed(Button.B) && code == 1) {
        code = 2
    }
    if (input.logoIsPressed() && code == 2) {
        code = 3
    }
    if (input.buttonIsPressed(Button.A) && code == 3) {
        code = 4
    }
    if (input.logoIsPressed() && code == 4) {
        code = 5
    }
})
basic.forever(function () {
    if (start == 1) {
        basic.showLeds(`
            . . # # #
            . # . . .
            # . . . .
            . # . . .
            . . # # #
            `)
    }
    if (code == 0 && start == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (code == 1) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (code == 2) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (code == 3) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
    }
    if (code == 4) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    }
    if (code == 5) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (code == 1 && (input.buttonIsPressed(Button.A) || input.logoIsPressed())) {
        code = 0
    }
    if (code == 2 && (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        code = 0
    }
    if (code == 3 && (input.buttonIsPressed(Button.B) || input.logoIsPressed())) {
        code = 0
    }
    if (code == 3 && (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.A))) {
        code = 0
    }
})
