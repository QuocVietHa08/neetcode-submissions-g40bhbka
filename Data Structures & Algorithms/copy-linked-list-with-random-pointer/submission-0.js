// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (!head) return null;
        let result = head;
        let map = new Map();
        
        // First pass: create all nodes and store them in a map
        while (result) {
            map.set(result, new Node(result.val));
            result = result.next;
        }
        console.log(map)

        // Second pass: assign next and random pointers
        result = head;
        while (result) {
            let newNode = map.get(result);
            newNode.next = result.next ? map.get(result.next) : null;
            newNode.random = result.random ? map.get(result.random) : null;
            result = result.next;
        }
        
        return map.get(head);
    }
}
