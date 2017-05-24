/**
 * Created by My on 5/24/2017.
 */

var game = {
    cards: new Array(52),
}
//开始新得一局
exports.begin = function () {
    shuffle(game);

}
//继续上一局
function last() {

}

//洗牌
function shuffle(game) {
    var index = 0;
    var cards = game.cards;
    var i;
    var suit = 0;
    for (index; index < cards.length; index++) {
        if (index % 13 == 0) {
            i = 0;
            suit++;
        }
        cards[index] = {suit: suit, num: i};
        i++;
    }
    //6:大王5:小王
    cards.push({suit: 5, num: 14});
    cards.push({suit: 6, num: 15});

    for (var i = 0; i < cards.length; ++i) {
        var lastIndex = cards.length - 1 - i;
        var index = Math.floor(Math.random() * lastIndex);
        var t = cards[index];
        cards[index] = cards[lastIndex];
        cards[lastIndex] = t;
    }
}


//发牌
function send(name) {


}

//要牌
function need() {

}
