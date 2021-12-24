**D Is It A Red-Black Tree (30 分)**


There is a kind of balanced binary search tree named red-black tree in the data structure. It has the following 5 properties:

- (1) Every node is either red or black.
- (2) The root is black.
- (3) Every leaf (NULL) is black.
- (4) If a node is red, then both its children are black.
- (5) For each node, all simple paths from the node to descendant leaves contain the same number of black nodes.

For example, the tree in Figure 1 is a red-black tree, while the ones in Figure 2 and 3 are not.

![PAT（甲级）2017年秋季考试 D Is It A Red-Black Tree (30 分) .png][1]|![PAT（甲级）2017年秋季考试 D Is It A Red-Black Tree (30 分) 2.png][2]|![PAT（甲级）2017年秋季考试 D Is It A Red-Black Tree (30 分) 3.png][3]
|:--:|:--:|:--:|
|Figure 1|Figure 2|Figure 3|

For each given binary search tree, you are supposed to tell if it is a legal red-black tree.

#### Input Specification:
Each input file contains several test cases. The first line gives a positive integer K (≤30) which is the total number of cases. For each case, the first line gives a positive integer N (≤30), the total number of nodes in the binary tree. The second line gives the preorder traversal sequence of the tree. While all the keys in a tree are positive integers, we use negative signs to represent red nodes. All the numbers in a line are separated by a space. The sample input cases correspond to the trees shown in Figure 1, 2 and 3.

#### Output Specification:
For each test case, print in a line `Yes` if the given tree is a red-black tree, or `No` if not.

#### Sample Input:
```
3
9
7 -2 1 5 -4 -11 8 14 -15
9
11 -2 1 -7 5 -4 8 14 -15
8
10 -7 5 -6 8 15 -11 17
```
#### Sample Output:
```
Yes
No
No
```

i> 题意
给你一棵树的前序遍历，判断是否是红黑树

i> 思路
对前序的绝对值排序可以得到中序，和前序一起构建二叉树。判断题目中的五个条件。
判断根节点是否是正数
深度递归判断，若当前节点为红，则其在子节点存在的情况下是否为黑
深度递归判断，当前节点的左右子树的黑色节点数是否相等

```
#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>
#define maxsize 33
using namespace std;
int n;
vector<int> pre, in;
bool flag;
struct Node
{
    string data;
    Node *left, *right;
};
Node *root = NULL;
bool cmp(int a, int b)
{
    return abs(a) < abs(b);
}
Node *make(int inL, int inR, int preL, int preR)
{
    if (inL > inR)
        return NULL;
    Node *node = new Node;
    node->left = node->right = NULL;
    node->data = to_string(pre[preL]);

    int u;
    for (u = inL; u <= inR; u++)
        if (in[u] == pre[preL])
            break;
    node->left = make(inL, u - 1, preL + 1, preL + u - inL);
    node->right = make(u + 1, inR, preL + u - inL + 1, preR);
    return node;
}
void dfs_color(Node *node)
{
    if (!flag)
        return;
    if (stoi(node->data) < 0)
    {
        if (node->left != NULL && stoi(node->left->data) < 0)
            flag = false;
        if (node->right != NULL && stoi(node->right->data) < 0)
            flag = false;
    }
    if (node->left != NULL)
        dfs_color(node->left);
    if (node->right != NULL)
        dfs_color(node->right);
}
int getBlack(Node *node)
{
    if (!flag)
        return 0;
    if (node->left == NULL && node->right == NULL)
    {
        if (stoi(node->data) < 0)
            return 0;
        else
            return 1;
    }
    else
    {
        int ln = 0, rn = 0;
        if (node->left != NULL)
            ln = getBlack(node->left);
        if (node->right != NULL)
            rn = getBlack(node->right);
        if (ln == rn)
        {
            if (stoi(node->data) < 0)
                return ln;
            else
                return ln + 1;
        }
        else
        {
            flag = false;
        }
    }
}
void check()
{
    if (stoi(root->data) < 0)
    {
        cout << "No" << endl;
        return;
    }
    flag = true;
    dfs_color(root);
    if (!flag)
    {
        cout << "No" << endl;
        return;
    }
    flag = true;
    getBlack(root);
    if (!flag)
    {
        cout << "No" << endl;
        return;
    }
    cout << "Yes" << endl;
}
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> n;
    int m, tmp;
    for (int i = 0; i < n; i++)
    {
        cin >> m;
        pre.clear();
        for (int j = 0; j < m; j++)
        {
            cin >> tmp;
            pre.push_back(tmp);
        }
        in = pre;
        sort(in.begin(), in.end(), cmp);
        root = make(0, m - 1, 0, m - 1);
        check();
    }
    return 0;
}
```
![PAT（甲级）2017年秋季考试 D Is It A Red-Black Tree.png][4]


[1]: http://alomerry.com/usr/uploads/2020/01/1034237504.png
[2]: http://alomerry.com/usr/uploads/2020/01/2128569700.png
[3]: http://alomerry.com/usr/uploads/2020/01/3480408551.png
[4]: http://alomerry.com/usr/uploads/2020/01/1662260822.png