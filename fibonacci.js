let numberOfCalculation=0
function fibonacciWithoutMemoized (n){
   
    if(n<2){
        return n
    }
    else {
        return fibonacciWithoutMemoized(n-1)+ fibonacciWithoutMemoized(n-2)
    }
}
// console.log(`slow function`,fibonacciWithoutMemoized(10))
// console.log(`Number of Calculation===`,numberOfCalculation)

// ================ FIBONACCI WITH MEMOIZED===============

function fibonacciWithMemoized(){
    let cache={}
    return function fibonacci(n) {
        numberOfCalculation++
        if(n in cache){
            return cache[n]
        }else{
            if(n<2){
                return n
            }else{
                return cache[n]=fibonacci(n-1) + fibonacci(n-2)
            }
        }
        
    }
}
const fibonacci1=fibonacciWithMemoized()
//console.log(fibonacci1(3))
console.log(`fast function`,fibonacci1(10))
console.log(`Number of Calculation===`,numberOfCalculation)