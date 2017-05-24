/**
 * Created by My on 5/22/2017.
 */
/*牌花色*/
Cards = {
    readP: {
        a: 'A',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nigh: '9',
        ten: '10',
        j: 'J',
        q: 'Q',
        k: 'K'
    },
    blackP: {
        a: 'A',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nigh: '9',
        ten: '10',
        j: 'J',
        q: 'Q',
        k: 'K'
    },
    diamonds: {
        a: 'A',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nigh: '9',
        ten: '10',
        j: 'J',
        q: 'Q',
        k: 'K'
    },
    flower: {
        a: 'A',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nigh: '9',
        ten: '10',
        j: 'J',
        q: 'Q',
        k: 'K'
    }
}
//发牌
function sendCards() {

}
//下一局
function nextCards(cards) {
    if (cards.size == 0) {
        return;
    }

}
//洗牌
function restCards() {
    var cardsSize = Cards.size * Cards.blackP.size;

}