// Implement wordLocator function

function wordLocator(input, letter){
    if(input.length == 0 || input == undefined) throw Error("input is empty");
    if(typeof letter === 'number') throw Error("invalid search");
    if(letter === "") throw Error("invalid search");
    return input.filter(function firstLetter(word) {
        return word[0] !== letter.toLowerCase();
    });
}

module.exports = wordLocator