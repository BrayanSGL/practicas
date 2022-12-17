const gifts = ["book", "game", "socks"];

function wrapping_1(gifts) {
  let giftWrap = [];
  for (let gift of gifts) {
    let ast = "*".repeat(gift.length + 2);
    giftWrap.push(ast+"\n*" + gift + "*\n" + ast);
  }
  return giftWrap;
}

function wrapping_2(gifts) {
  return gifts.map(gift => {
    let ast = "*".repeat(gift.length + 2);
    return ast+"\n*" + gift + "*\n" + ast;
  });
}

