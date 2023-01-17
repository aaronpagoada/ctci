# === Linked Lists ===

### Doubly-linked List
> Each node points to the previous and next node
> 
> `1 <-> 2 <-> 3`

### Singly-linked List
> Each node points to the next node
>
> `1 -> 2 -> 3`


### lists are edited by reference

```
function whatever(head){
  let currentNode = head

  while(currentNode != null){
    ...
  } // no edits to head directly, currentNode will edit as it is a child

  return head
}
```