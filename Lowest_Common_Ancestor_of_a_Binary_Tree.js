// 236. Lowest Common Ancestor of a Binary Tree


// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Base case: if root is null, or root value is equal to p or q
    if (root === null || root.val === p || root.val === q) {
        return root;
    }

    // Recursive function to perform DFS
    function dfs(node) {
        if (node === null) {
            return null;
        }

        // If the current node value is p or q, return the node
        if (node === p || node === q) {
            return node;
        }

        // Traverse the left and right subtrees
        let leftNode = dfs(node.left);
        let rightNode = dfs(node.right);

        // If both left and right return non-null, p and q are in different subtrees
        if (leftNode !== null && rightNode !== null) {
            return node;
        }

        // Otherwise, return the non-null node
        return leftNode !== null ? leftNode : rightNode;
    }

    // Start DFS from the root
    return dfs(root);
};

// PSEUDOCODE

// dfs function to search through the binary tree
// if statements - if the node == null, return null
// if the node.left == p or q and node.right == p or q, return the current node
// if the currend node is equal to p or q and the node.left or node.right is equal to p or q, return current node