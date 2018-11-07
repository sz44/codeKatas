//convert nuber to string regex 0s, iterate array to find largest length.
function mostConsecutive(n) {
  regex = /0+/g;
  result = (''+n).match(regex);
  let final=0;
  for(let x of result) {
    if(final<x.length) final=x.length;
  }
  return final;
}
//convert to string. regex 0+. map to length. spread out of array. find max.
function mostConsecutive(n) {
  return Math.max(...(''+n).match(/0+/g).map(x=>x.length));
}

//using the versitle sort method.
function mostConsecutive(n) {
  return (''+n).match(/0+/g).sort().pop().length;
}


console.log(mostConsecutive(1002000), 3);
console.log(mostConsecutive(10002030000), 4);
console.log(mostConsecutive(1000020000000300000), 7);
