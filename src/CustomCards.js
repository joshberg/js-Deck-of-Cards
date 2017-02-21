const Utils = require('./Utils.js');

class Deck {
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

module.exports = {
    Deck
}