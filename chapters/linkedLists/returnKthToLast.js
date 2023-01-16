// Return Kth to Last
// Implement an algorithm to find the kth to last element of a singly linked list.

const ListNode = require('./ListNode')

function returnKthToLast(head, k){
  let currentNode = head
  let listSize = 0
  
  while(currentNode != null){
    listSize++
    currentNode = currentNode.next
  }

  let count = 0
  let kthNode = null
  currentNode = head

  while(count <= listSize - k && currentNode != null){
    if(count == listSize - k){
      kthNode = currentNode
      break
    } else {
      count++
      currentNode = currentNode.next
    }
  }

  return kthNode
}

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)
list.next.next.next.next.next = new ListNode(6)
list.next.next.next.next.next.next = new ListNode(7)

console.log(returnKthToLast(list, 3))
console.log(returnKthToLast(list, 7))