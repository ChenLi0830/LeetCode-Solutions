/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head;
    while (fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if (slow===fast){
            let ans = head;
            while (ans!==slow){
                ans = ans.next;
                slow = slow.next;
            }
            return ans;
        }
    }
    return null;
};