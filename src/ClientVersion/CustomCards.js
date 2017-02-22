//The following two functions are from: http://stackoverflow.com/a/1527820
/** 
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class DiscardPile {
    constructor() {
        this.Pile = [];
    }
    Add(Card) {
        this.Pile.push(Card);
    }
    GetAllCards() {
        return this.Pile;
    }
    TopOfPile() {
        return this.Pile[this.Pile.length - 1];
    }
    Clear() {
        this.Pile = [];
    }
}

class CustomDeck {
    constructor() {
        this.Stack = [];
        //TODO: Make this a parameter based deck library.
        // Suits.forEach((suit) => {
        //     Ranks.forEach((rank) => {
        //         this.Stack.push(new Card(suit, rank));
        //     })
        // })
    }
    GetLength() {
        return this.Stack.length;
    }
    Draw() {
        return this.Stack.pop();
    }
    Shuffle() {
        var stack = this.Stack;
        var that = this;
        return new Promise(function (resolve, reject) {
            for (var i = 0; i < 7; i++) {
                var temp = [];
                for (var j = stack.length; j > 0; j--) {
                    var objInArray = stack.splice(Utils.getRandomInt(0, stack.length - 1), 1);
                    temp.push(objInArray[0]);
                }
                stack = temp;
            }
            that.Stack = stack;
            resolve();
        });
    }
    ShuffleLite() {
        var stack = this.Stack;
        var that = this;
        return new Promise(function (resolve, reject) {
            var temp = [];
            for (var j = stack.length; j > 0; j--) {
                var objInArray = stack.splice(Utils.getRandomInt(0, stack.length - 1), 1);
                temp.push(objInArray[0]);
            }
            that.Stack = temp;
            resolve();
        });
    }
    PickRandom() {
        return this.Stack[Utils.getRandomInt(0, this.Stack.length - 1)];
    }
}

