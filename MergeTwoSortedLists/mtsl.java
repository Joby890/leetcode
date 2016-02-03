public class ListNode {
   int val;
   ListNode next;
   ListNode(int x) { val = x; }
}
public class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
      List result = new ArrayList<Integer>();
      while(l1 != null || l2 != null) {
        if(l1 == null) {
          result.add(l2.val);
          l2 = l2.next;
        } else if(l2 == null) {
          result.add(l1.val);
          l1 = l1.next;
        }

        if(l1.val <= l2.val) {
          result.add(l1.val);
          l1= l1.next;
        } else {
          result.add(l2.val);
          l2 = l2.next;
        }
      }
      return result;
    }
}
