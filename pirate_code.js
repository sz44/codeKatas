//Task: recreate the output pattern shown in the tests below.

//version 1
function amaroPlan(pirateNum) {
  let arr = [];
  arr.push(pirateNum * 20);
  let one = false;
  //alternate pushing 0 or 1 and reduce first num in array if 1 is pushed.
  for(let i=1; i<pirateNum; i++) {
    if(one) {
      arr.push(1);
      one = false;
      arr[0]--;
    } else {
      arr.push(0);
      one = true;
    }
  }
  return arr;
}

//version 2
function amaroPlan2(pirateNum) {
  let arr = [];
  let goldTotal = 20 * pirateNum;
  //bitwise ~~ is alternative to Math.floor()
  let firstNum = goldTotal - ~~((pirateNum-1)/2);
  arr.push(firstNum);
  for(let i = 1; i<pirateNum; i++) {
    if(i%2 === 0) {
      arr.push(1);
    } else {
      arr.push(0);
    }
  }
  return arr;
}

//version 3
function amaroPlan2(pirateNum) {
  let arr = [];
  let goldTotal = 20 * pirateNum;
  //bitwise ~~ is alternative to Math.floor()
  let firstNum = goldTotal - ~~((pirateNum-1)/2);
  arr.push(firstNum);
  for(let i = 1; i<pirateNum; i++) {
    arr.push((i+1) % 2);
  }
  return arr;
}



//tests
console.log(amaroPlan2(2), [40,0]);
console.log(amaroPlan2(3), [59,0,1]);
console.log(amaroPlan2(4), [79,0,1,0]);
console.log(amaroPlan2(5), [98,0,1,0,1]);