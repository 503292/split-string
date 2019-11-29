const s = "SMS messages are really short 123456789012";
const k = 12;

function solution(s, k) {
  let countMessage = 0;
  const arrWords = s.split(" ");

  let verify = arrWords.some(el => el.length > k);

  if (!verify) {
    for (let i = 0; i < arrWords.length; i++) {
      if (!arrWords[i + 1]) {
        console.log(arrWords[i]);
        countMessage++;
        break;
      } else if (arrWords[i].length + arrWords[i + 1].length < k) {
        console.log(arrWords[i] + " " + arrWords[i + 1]);
        countMessage++;
        i++;
        continue;
      }
      if (arrWords[i].length <= k) {
        console.log(arrWords[i]);
        countMessage++;
      }
    }
    console.log(countMessage);
  } else {
    console.log("-1");
  }
}

solution(s, k);
