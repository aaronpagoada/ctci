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

// 7
// If a binary search tree is unbalanced, how long might it take (worst case) to find an element in it?
// Runtime is O(n), where n is the number of nodes in the tree

// 8
// You are looking for a specific value in a binary tree, but the tree is not a binary search tree. What is the time complexity of this?
// Runtime is O(n)

// 9
function copyArray(arr){
    let copy = new Array(0)
    for(let value of arr){
        copy = appendToNew(copy, value)
    }
    
    return copy
}

function appendToNew(arr, value){
    let bigger = new Array(arr.length + 1)
    for(let i = 0; i < arr.length; i++){
        bigger[i] = arr[i]
    }

    bigger[bigger.length - 1] = value
    return bigger
}
// Runtime is O(n^2)

// 10
function sumDigits(n){
    let sum = 0
    while(n > 0){
        sum += n % 10
        n /= 10
    }
    return sum
}
// Runtime is O(n), where n is the number of digits in n
// reasoning was correct but not answer, runtime is O(log n) because a number with d digits can have a value up to 10^d
// if n = 10^d, then d = log n

// 11
// The following code prints all strings of length k where the characters are in sorted order.
// It does this by generating all strings of length k and checking if each is sorted.
// Runtime is O(k^2), guessed incorrectly, correct runtime is O(kc^k) where k is length of string and c is number of chars in alphabet

// 12
function intersection(a, b){
    mergeSort(b)
    let intersect = 0

    for(let value of a){
        if(binarySearch(b, value) >= 0){
            intersect++
        }
    }

    return intersect
}
// Runtime is O(b log b + a log b)

// 9/12 == 75%
