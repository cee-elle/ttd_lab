const wordLocator = require("./wordLocator");

describe("Word locator function", () => {
    test("it should remove words that start with a specific letter", () =>{
        const input = ["cat", "dog", "fish", "monkey", "hamster", "elephant", "eel", "dinosaur"];

        const output = ["cat", "dog", "fish", "monkey", "hamster", "dinosaur"];
        expect(wordLocator(input, "e")).toEqual(output)
    });

    test("it should remove words that start with a specific letter", () =>{
        const input = ["cat", "dog", "fish", "monkey", "hamster", "elephant", "eel", "dinosaur"];

        const output = ["cat", "dog", "fish", "monkey", "hamster", "dinosaur"];
        expect(wordLocator(input, "E")).toEqual(output)
    });

    test("it should remove words that start with a specific letter, not with a number", () =>{
        const input = ["cat", "dog", "fish", "monkey", "hamster", "elephant", "eel", "dinosaur"];

        const output = ["cat", "dog", "fish", "monkey", "hamster", "dinosaur"];
        expect(()=>{wordLocator(input, 1)}).toThrowError("invalid search");
    });

    test("should return invalid if letter is an empty string", () =>{
        const input = ["cat", "dog", "fish", "monkey", "hamster", "elephant", "eel", "dinosaur"];

        const output = ["cat", "dog", "fish", "monkey", "hamster", "dinosaur"];
        expect(()=>{wordLocator(input, "")}).toThrowError("invalid search");
    });

    test("should return invalid if input is an empty array", () =>{
        const input = [];

        const output = ["cat", "dog", "fish", "monkey", "hamster", "dinosaur"];
        expect(()=>{wordLocator(input, "e")}).toThrowError("input is empty");
    });
});;