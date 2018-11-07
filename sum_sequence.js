//Add all values from begging to end by step value


//simple for loop
let sequanceSum = function(begin, end, step) {
  let sum = 0;
  for(let i=begin;i<=end;i+=step) {
    sum += i;
  }
  return sum;
}

//recurive
sequanceSum = function(begin, end, step) {
  if(begin>end) return 0;
  return begin + sequanceSum(begin+step,end,step); 
}

//Arithmetic sum
//explicit: start + n * step = end;
sequanceSum = function(begin, end, step) {
  for(let i=begin; i<=end; i+=step) {
    //console.log(i);
  }
  //find number of terms n
  let n = Math.floor(((end-begin)/step)+1);
  let sum = (n/2)*(2*begin+(n-1)*step);
  return sum;
}


console.log(sequanceSum(2,6,2), 12);
console.log(sequanceSum(1,5,1), 15);
console.log(sequanceSum(1,5,3), 5);
console.log(sequanceSum(7,59,4), 462);
console.log(sequanceSum(20,80,3), 1050);


