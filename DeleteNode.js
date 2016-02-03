var deleteNode = function(node) {
    node.val = node.next.val;
    if(node.next.next === null) {
        node.next = null;
        return;
    }
    deleteNode(node.next);
};
