# ========= BIG O =========

lower, upper, and tight bound runtime == omega, o, and theta
> `Ω(n)`, `O(n)`, and `Θ(n)`

`O(n)` is `O(2n)` is `O(100n)`, drop the constant

if problem halves number of elements each iteration, most likely `O(log n)`
> ex. binary search

recursive function makes multiple calls, most likely `O(branches^depth)`

```
function fib(n){
    if(n <= 1){
        return 1
    }
    return fib(n - 1) + fib(n - 1) // O(2^n)
}
```

most default sorting algorithms come to `O(n log n)` where `n` is the length of the string

> "Tim, please Merge that Heap of Cubes." - `O(n log n)`
>
> Radix and count - `O(nk)` and `O(n + k)`
>
> most others are `O(n^2)`

not all binary tree problems default to `O(log n)`
> ex. sum of all nodes in balanced tree is `O(n)` where `n` is number of nodes

generally, when an algorithm makes multiple recursive calls, it is exponential
> ex. fibonacci (which is actually closer to `O(1.6^n)`) where `O(2^n)`

memoization commonly optimizes exponential runtimes
