function knapSack (weightArr, valArr, totalWeight, n) {
    // Checking base condition === if weight is 0 and n is 0 then no profit so return 0
    if(totalWeight === 0 || n === 0) {
        return 0;
    }
    if(weightArr[n-1]<=totalWeight) {
        return Math.max(valArr[n-1] + knapSack(weightArr,valArr,totalWeight-weightArr[n-1],n-1),knapSack(weightArr,valArr,totalWeight,n-1))
    }
    else{
     // If weight of the nth item is more
    // than Knapsack capacity totalWeight, then
    // this item cannot be included
    // in the optimal solution
        return knapSack(weightArr,valArr,totalWeight,n-1)
    }

}

var weightArr=[10,20,30];
var valArr=[60,100,120];
var n=3;
var totalWeight=50
console.log(knapSack(weightArr,valArr,totalWeight,n))