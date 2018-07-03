'use strict';

module.exports = function compare(value1, value2) {
  const validStrings = ['t', 'j', 'q', 'k', 'a'];
  if (value1 === value2) {
    return 0;
  }
  if (!Number.isNaN(value1) && !Number.isNaN(value2)) {
    return value1 > value2 ? 1 : -1;
  }

  if (!Number.isNaN(value1) && Number.isNaN(value2)) {
    return -1;
  }

  if (Number.isNaN(value1) && !Number.isNaN(value2)) {
    return 1;
  }

  return (validStrings.indexOf(value1) > validStrings.indexOf(value2) ? 1 : -1);
};

module.exports = function findHighest(hand) {
  hand.sort(compare);
  return hand[hand.length - 1];
}

module.exports = function checkTheWinner(firstHand, secondHand) {
  const validStrings = ['t', 'j', 'q', 'k', 'a'];
  let firstArraySum = 0;
  let secondArraySum = 0;

  firstHand.forEach(e => {
    let value = e.charAt(0);
    if (!Number.isNaN(value)) {
      firstArraySum += parseInt(e.charAt(0));
    } else {
      firstArraySum += validStrings.indexOf(value) + 10;
    }
  });
  secondHand.forEach(e => {
    let value = e.charAt(0);
    if (!Number.isNaN(value)) {
      secondArraySum += parseInt(e.charAt(0));
    } else {
      secondArraySum += validStrings.indexOf(value) + 10;
    }
  });

  return (firstArraySum < secondArraySum) ? 'White wins!' : 'Black wins!';
};

module.exports = function checkIfFlush(oneHand) {
  oneHand.forEach(((e, i, arr) => {
    if (i <= arr.length - 2 && arr[i].charAt(1) !== arr[i + 1].charAt(1)) {
      return false;
    }
  }));
  return true;
};

module.exports = function checkRepetitions(oneHand) {
  let counter = {};
  for (let i = 0; i < oneHand.length; i++) {
    let cardValue = oneHand[i].charAt(0);
    if (counter[oneHand[i].charAt(0)]) {
      counter[oneHand[i].charAt(0)]++;
    } else {
      counter[oneHand[i].charAt(0)] = 1;
    }
  }
  console.log(typeof(cardValue));
  return counter;
}
