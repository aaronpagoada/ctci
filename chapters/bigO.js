// BIG O

// 1
function product(a, b){
    let sum = 0 // O(1)
    for(let i = 0; i < b; i++){ //O(b)
        sum += a // O(1)
    }
    return sum // O(1)
}
// Runtime is O(b)

// 2
function power(a, b){
    if(b < 0){ // O(1)
        return 0 // O(1)
    } else if(b == 0){ // O(1)
        return 1 // O(1)
    } else { // O(1)
        return a * power(a, b - 1) // O(b)
    }
}
// Runtime is O(b)

// 3
function mod(a, b){
    if(b <= 0){ // O(1)
        return -1 // O(1)
    }
    let div = a / b // O(1)
    return a - div * b // O(1)
}
//Runtime is O(1)

// 4
function div(a, b){
    let count = 0 // O(1)
    let sum = 0 // O(1)
    while(sum <= a){ 
        sum += b // O(1)
        count++ // O(1)
    }
    return count // O(1)
}
// Runtime is O(a/b)

// 5
function sqrt(n){
    return sqrtHelper(n, 1, n)

    function sqrtHelper(n, min, max){
        if(max < min){
            return -1
        }

        let guess = (min + max) / 2 // this is the key into the runtime, we are guessing by half a value each time so most likely O(log n)
        if(guess * guess == n){
            return guess
        } else if(guess * guess < n){
            return sqrtHelper(n, guess + 1, max)
        } else {
            return sqrtHelper(n, min, guess - 1)
        }
    }
}
// Runtime is O(log n)

// 6
function sqrt(n){
    for(let i = 1; i * i <= n; i++){
        if(i * i == n){
            return i
        }
    }
    return -1
}
// Runtime is O(sqrt(n)), guessed incorrectly that it was O(log n)