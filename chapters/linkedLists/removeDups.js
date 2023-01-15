// Remove Dups
// Write code to remove duplicates from an unsorted linked list.

const ListNode = require('./ListNode')

function removeDups(head){
  if(head == null || head.next == null){
    return head
  }

  let set = new Set()

  let currentNode = head
  set.add(currentNode.val)

  while(currentNode.next != null){
    if(set.has(currentNode.next.val)){
      currentNode.next = currentNode.next.next
    } else {
      set.add(currentNode.next.val)
      currentNode = currentNode.next
    }
  }

  return head
} // O(n)

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(2)
list.next.next.next = new ListNode(3)
list.next.next.next.next = new ListNode(4)
list.next.next.next.next.next = new ListNode(4)
list.next.next.next.next.next.next = new ListNode(5)

console.log(removeDups(list))