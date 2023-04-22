function startTimer(callback, interval) {
  let count = 1;
  //convert interval to milliseconds
  interval = interval * 1000;
  console.log("🚀 ~ file: test.js:5 ~ startTimer ~ interval:", interval);
  const timer = setInterval(() => {
    if (!callback(count)) {
      clearInterval(timer);
    }
    count++;
  }, interval);
}

function callback(counter) {
  console.log(counter);
  return counter < 5;
}

// Expected: 1, 2, 3, 4, 5 with 50ms interval.
startTimer(callback, 50);
