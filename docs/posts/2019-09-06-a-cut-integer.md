**7-4 Structure of a Binary Tree (30 分)**


Suppose that all the keys in a binary tree are distinct positive integers. Given the postorder and inorder traversal sequences, a binary tree can be uniquely determined.

Now given a sequence of statements about the structure of the resulting tree, you are supposed to tell if they are correct or not. A statment is one of the following:

- A is the root
- A and B are siblings
- A is the parent of B
- A is the left child of B
- A is the right child of B
- A and B are on the same level
- It is a full tree

Note:
- Two nodes are on the same level, means that they have the same depth.
- A full binary tree is a tree in which every node other than the leaves has two children.
#### Input Specification:
Each input file contains one test case. For each case, the first line gives a positive integer N (≤30), the total number of nodes in the binary tree. The second line gives the postorder sequence and the third line gives the inorder sequence. All the numbers in a line are no more than 10^​3^ and are separated by a space.

Then another positive integer M (≤30) is given, followed by M lines of statements. It is guaranteed that both `A` and `B` in the statements are in the tree.

#### Output Specification:
For each statement, print in a line `Yes` if it is correct, or `No` if not.

#### Sample Input:
```
9
16 7 11 32 28 2 23 8 15
16 23 7 32 11 2 28 15 8
7
15 is the root
8 and 2 are siblings
32 is the parent of 11
23 is the left child of 16
28 is the right child of 2
7 and 11 are on the same level
It is a full tree
```
#### Sample Output:
```
Yes
No
Yes
No
Yes
Yes
Yes
```

i> 题意
给你后序和中序，你判断所形成的树是否满足要求

i> 思路
通过后序中序构建树的同时把5中要求分别提前计算好
1.判断A是否是根----构建完成后可以获得根
2.判断A和B是否是兄弟----构建时将当前节点设置为两个孩子节点的父亲存在map中，所以只需判断map中父亲是否一致即可
3.1判断A是否是B的父亲-----同上
3.2判断A是否是B的左孩子-----同理设置一个map记录左孩子
3.3判断A是否是B的右孩子-----同理设置一个map记录右孩子
4.判断A和B是否是同一层-----构建时登陆节点的深度map
5.判断是否时满二叉树(题目中的意思除了叶子节点，其他皆有左右孩子)，构建时若有一个节点左右孩子一个空一个非空，将Flag设置为假即可

```
#include <iostream>
#include <algorithm>
#include <queue>
#include <string>
#include <unordered_map>
#include <math.h>
#include <ctype.h>
#define maxsize 31
#define INF 0x3ffffff
using namespace std;
struct Node
{
    int v, deepth;
    Node *left, *right;
};
int n, m, post[maxsize], in[maxsize], deepth[maxsize] = {0};
bool isFullTree = true;
unordered_map<int, int> level, father, leftc, rightc;
Node *root = NULL;
Node *make(int postL, int postR, int inL, int inR, int dpt, int fa)
{
    if (inL > inR)
        return NULL;
    Node *node = new Node;
    node->v = post[postR];
    node->deepth = dpt;
    deepth[dpt]++;
    level[node->v] = dpt;
    father[node->v] = fa;
    node->left = node->right = NULL;
    int u;
    for (u = inL; u <= inR; u++)
        if (in[u] == post[postR])
            break;
    node->left = make(postL, postL + (u - inL - 1), inL, u - 1, dpt + 1, node->v);
    node->right = make(postL + (u - inL), postR - 1, u + 1, inR, dpt + 1, node->v);
    leftc[node->v] = node->left != NULL ? node->left->v : -1;
    rightc[node->v] = node->right != NULL ? node->right->v : -1;
    if ((node->left != NULL && node->right == NULL) ||(node->left == NULL && node->right != NULL))
        isFullTree = false;
    return node;
}
bool isFull()
{
    for (int i = 1; i <= n; i++)
        if (deepth[i] != pow((double)2, i - 1))
            return false;
    return true;
}
void check()
{
    string s, tmp;
    getline(cin, s);
    int out = 0, a, b, i;
    if (s[0] == 'I')
        out = isFullTree ? 1 : 0;
    else
    {
        i = 0;
        while (isdigit(s[i]))
        {
            tmp.push_back(s[i]);
            i++;
        }
        a = stoi(tmp);
        tmp.clear();
        if (s[s.size() - 1] == 'l') //是不是相同深度
        {
            i = s.find("and ") + 4;
            while (isdigit(s[i]))
            {
                tmp.push_back(s[i]);
                i++;
            }
            b = stoi(tmp);
            out = level[a] == level[b] ? 1 : 0;
        }
        else if (s[s.size() - 1] == 's') //是不是兄弟
        {
            i = s.find("and ") + 4;
            while (isdigit(s[i]))
            {
                tmp.push_back(s[i]);
                i++;
            }
            b = stoi(tmp);
            out = (father[a] != -1 && (father[a] == father[b])) ? 1 : 0;
        }
        else if (s[s.size() - 1] == 't') //是不是根
        {
            out = root->v == a ? 1 : 0;
        }
        else
        {
            if (s.find("parent of ") != -1)
            {
                i = s.find("parent of ") + 10;
                while (i < s.size() && isdigit(s[i]))
                {
                    tmp.push_back(s[i]);
                    i++;
                }
                b = stoi(tmp);
                out = father[b] == a ? 1 : 0;
            }
            else if (s.find("left child of ") != -1)
            {
                i = s.find("left child of ") + 14;
                while (i < s.size() && isdigit(s[i]))
                {
                    tmp.push_back(s[i]);
                    i++;
                }
                b = stoi(tmp);
                out = leftc[b] == a ? 1 : 0;
            }
            else if (s.find("right child of ") != -1)
            {
                i = s.find("right child of ") + 15;
                while (i < s.size() && isdigit(s[i]))
                {
                    tmp.push_back(s[i]);
                    i++;
                }
                b = stoi(tmp);
                out = rightc[b] == a ? 1 : 0;
            }
        }
    }
    cout << (out == 1 ? "Yes" : "No") << endl;
}
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> n;
    int a, b, c;
    for (int i = 1; i <= n; i++)
        cin >> post[i];
    for (int i = 1; i <= n; i++)
        cin >> in[i];
    root = make(1, n, 1, n, 1, -1);
    cin >> n;
    cin.ignore();
    for (int i = 0; i < n; i++)
        check();
    return 0;
}
```

![PAT（甲级）2019年春季考试 7-4 Structure of a Binary Tree.png][1]


[1]: http://alomerry.com/usr/uploads/2020/01/2625459359.png