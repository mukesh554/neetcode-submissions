/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let fast=head
        let slow=head

        while(fast && fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        let temp= slow.next
        slow.next=null
        //let back=fast
       let prev=null
       let curr=temp
       while(curr){
        let t= curr.next
        curr.next=prev
        prev=curr
        curr=t
       }

       let front =head
       let back = prev

       while(back){
       let front_temp= front.next
       let  back_temp = back.next
        front.next=back
        back.next=front_temp
        front= front_temp
        back= back_temp
       }
       return head

    }
}
