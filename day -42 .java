//141. Linked List Cycle
public class Solution {
    public boolean hasCycle(ListNode head) {
      HashSet<ListNode> visited_nodes = new HashSet<>();
      ListNode Current_node = head;
      while(Current_node != null){
        if(visited_nodes.contains(Current_node)){
            return true;
        }
        visited_nodes.add(Current_node);
        Current_node = Current_node.next;
      }
      return false;

        
    }
}