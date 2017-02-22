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

module.exports = {
    DiscardPile
}