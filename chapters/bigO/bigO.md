# ========= BIG O =========

lower, upper, and tight bound runtime == omega, o, and theta
    `Ω(N), O(N), and Θ(N)`

O(N) is O(2N) is O(100N), drop the constant

if problem halves number of elements each iteration, most likely O(log N)
    ex. binary search

recursive function makes multiple calls, most likely O(branches^depth)
    ```
    function fib(n){
        if(n <= 1){
            return 1
        }
        return fib(n - 1) + fib(n - 1)
    }
    ```

most default sorting algorithms come to O(N log N) where N is the length of the string
    "Tim, please Merge that Heap of Cubes." - O(N log N)
    Radix and count - O(nk) and O(n + k)
    most others are O(N^2)

not all binary tree problems default to O(log N)
    ex. sum of all nodes in balanced tree is O(N) where N is number of nodes

generally, when an algorithm makes multiple recursive calls, it is exponential
    ex. fibonacci (which is actually closer to O(1.6^N)) where O(2^N)

memoization commonly optimizes exponential runtimes
