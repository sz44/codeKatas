function removeSmallest(numbers) {
    let sInd=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]<numbers[sInd]) {
            sInd=i;
        }
    }
    numbers.splice(sInd,1);
    return numbers;
}

console.log(removeSmallest([2,3,4,5,1]));
console.log(removeSmallest([5,3,2,4]));
console.log(removeSmallest([1,2,2,1]));

//task: return numbers array with the first smallest number removed.
//iterate all, select first smallest number.
//