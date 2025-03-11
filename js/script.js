function countE(userInput) {
    var count = 0;
    for (var x = 0; x < userInput.length; x++) {
        if (userInput[x] == 'e')
            count++
    }
    return count
}
var inp = prompt("Please enter your word to count number of 'e' chars.")
alert("Number of 'e' chars in " + inp + " is " + countE(inp))