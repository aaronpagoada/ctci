# === Trees & Graphs ===

### Tree

> Has a root node
> 
> Root node has zero or more child nodes
>
> Child node has zero or more child nodes, and so on
>
> Cannot contain cycles

#### Binary Trees

> Each node has up to two children
>
> Not all trees are binary trees
>
> ```
>      3
>     / \
>    1   5
>   / \   \
>  0   2   4
> ```

#### Binary Search Trees

> Binary tree in which every node fits a specific ordering property
>
> `all left descendents <= n < all right descendents`, but can vary with equal values
>
> ```
>      3
>     / \
>    1   5
>   / \   \
>  0   2   7
> ```

#### Tree Traversal

In-order
> Visit the left branch, then the current node, then the right branch
>
> Nodes get visited in ascending order
>
> ```
> traverse(node.left)
> print(node)
> traverse(node.right)
> ```


Pre-order
> Visit the current node, then the left branch, then the right branch
>
> The root is always the first node visited
> 
> ```
> print(node)
> traverse(node.left)
> traverse(node.right)
> ```


Post-order
> Visit the left branch, then the right branch, then the current node
>
> The root is always the last node visited
>
> ```
> traverse(node.left)
> traverse(node.right)
> print(node)
> ```

#### Min-Heaps

> Binary tree where the root node has the minimum value
>
> Must be a complete binary tree
>
> ```
>      0
>     /  \
>    5    15
>   / \   /
>  6   8 17 
> ```


#### Max-Heaps

> Binary tree where the root node has the maximum value
>
> Must be a complete binary tree
>
> ```
>      17
>     /  \
>    15   11
>   / \   /
>  6   8 10 
> ```

#### Tries (Prefix Trees)

> A variant of an n-ary tree in which characters are stored at each node
>
> Can check if a string is a valid prefix in `O(K)` time, where `K` is the length of the string
>
> ```
>          NULL
>        /  |  \
>       M   L   A
>      / \   \   \
>     A   Y   I   *
>    /    |    \
>   N     *     E
>  / \           \
> Y   *           *
> |
> *
> ```

### Graph

> A collection of nodes with edges between (some of) them
>
> Can be directed or undirected
>
> ```
>    0 -> 1
>         |
>         v
>   3 <-> 2
> ```

#### Graph Search

```
  0 -> 1 -> 2
       |    |
       v    v
       4 -> 3   
```

Depth-first Search
> Start at root and explore each branch completely before moving onto the next branch
>
> "Go deep, then wide."
>
> ```
> Node 0
>   Node 1
>     Node 2
>       Node 3
>     Node 4
> ```

Breadth-first Search
> Start at root and explore each neighbor before moving onto any children
>
> "Go wide, then deep."
>
> ```
> Node 0
>   Node 1
>     Node 2
>     Node 4
>       Node 3
> ```