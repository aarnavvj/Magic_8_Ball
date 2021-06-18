let Number2 = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Number2 = randint(1, 20)
    // This is a digital copy of the toy that tells your fortune.
    if (Number2 == 1) {
        basic.showString("It Is Certain")
    } else if (Number2 == 2) {
        basic.showString("It Is Decidedly So")
    } else if (Number2 == 3) {
        basic.showString("Without A Doubt")
    } else if (Number2 == 4) {
        basic.showString("Yes, Definitely")
    } else if (Number2 == 5) {
        basic.showString("You May Rely On It")
    } else if (Number2 == 6) {
        basic.showString("My Sources Say No")
    } else if (Number2 == 7) {
        basic.showString("Outlook Not So Good")
    } else if (Number2 == 8) {
        basic.showString("Ask Again Later")
    } else if (Number2 == 9) {
        basic.showString("Very Doubtful")
    } else if (Number2 == 10) {
        basic.showString("As I See It, Yes")
    } else if (Number2 == 11) {
        basic.showString("Most Likely")
    } else if (Number2 == 12) {
        basic.showString("Outlook Good")
    } else if (Number2 == 13) {
        basic.showString("Yes")
    } else if (Number2 == 14) {
        basic.showString("Signs Point To Yes")
    } else if (Number2 == 15) {
        basic.showString("Reply Hazy, Try Again")
    } else if (Number2 == 16) {
        basic.showString("Better Not Tell You Now")
    } else if (Number2 == 17) {
        basic.showString("Cannot Predict Now")
    } else if (Number2 == 18) {
        basic.showString("Concentrate And Ask Again")
    } else if (Number2 == 19) {
        basic.showString("Don't Count On It")
    } else {
        basic.showString("My Reply Is No")
    }
})
