window.onload = function () {
  const candidate = Array(45)
    .fill()
    .map((element, index) => {
      return index + 1;
    });

  const shuffle = [];
  while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
    const spliceArray = candidate.splice(random, 1); // 뽑은 값은 배열에 들어 있음
    const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
    shuffle.push(value); // shuffle 배열에 넣기
  }
  console.log(shuffle);

  const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
  const bonus = shuffle[6];
  console.log(winBalls, bonus);
  const length = winBalls.length + 1;
  console.log(length);

  const $result = document.querySelector("#result");
  const $bonus = document.querySelector("#bonus");

  for (let i = 0; i < length; i++) {
    setTimeout(() => {
      if (i < length - 1) {
        const $ball = document.createElement("div");
        $ball.className = "ball";
        $ball.textContent = winBalls[i];
        $result.appendChild($ball);
      } else {
        const $ball = document.createElement("div");
        $ball.className = "ball";
        $ball.textContent = bonus;
        $bonus.appendChild($ball);
      }
    }, 1000 * (i + 1));
  }
};
