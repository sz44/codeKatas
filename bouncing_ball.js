function bounce(h,b,w) {
  if(h<=0 || b<=0 || b>=1 || w>=h) return -1;
  let count = 1;
  while(h*b>=w) {
    if(h*b===w) {count+=1} else {count+=2}; 
    h = h * b;
  }
  return count;
}

function bounce(h,b,w) {
  if(h<=0 || b<=0 || b>=1 || w>=h) return -1;
  let x = Math.log(w/h)/Math.log(b);
  return 2*Math.floor(x) + 1;
}



console.log(bounce(3.0,0.66,1.5),3);
console.log(bounce(30.0,0.66,1.5),15);
