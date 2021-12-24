**7-3 Postfix Expression (25 分)**

Given a syntax tree (binary), you are supposed to output the corresponding postfix expression, with parentheses reflecting the precedences of the operators.
#### Input Specification:
Each input file contains one test case. For each case, the first line gives a positive integer **N** (≤ 20) which is the total number of nodes in the syntax tree. Then N lines follow, each gives the information of a node (the i-th line corresponds to the i-th node) in the format:

`data left_child right_child`
where `data` is a string of no more than 10 characters, `left_child` and `right_child` are the indices of this node's left and right children, respectively. The nodes are indexed from 1 to N. The NULL link is represented by −1. The figures 1 and 2 correspond to the samples 1 and 2, respectively.

|![1.png][1]|![2.png][2]|
|:--:|:--:|
|Figure 1|Figure 2|
#### Output Specification:
For each case, print in a line the postfix expression, with parentheses reflecting the precedences of the operators.There must be no space between any symbols.

#### Sample Input 1:
```
8
* 8 7
a -1 -1
* 4 1
+ 2 5
b -1 -1
d -1 -1
- -1 6
c -1 -1
```
#### Sample Output 1:
```
(((a)(b)+)((c)(-(d))*)*)
```
#### Sample Input 2:
```
8
2.35 -1 -1
* 6 1
- -1 4
% 7 8
+ 2 3
a -1 -1
str -1 -1
871 -1 -1
```
#### Sample Output 2:
```
(((a)(2.35)*)(-((str)(871)%))+)
```

[scode type="blue"]**题意**
给你一张中缀表达式的树，请你后序遍历将其输出，括号体现优先级，操作符不可用括号包含
**思路**
中缀表达式节点应该有三种状态
+ 左右孩子都为空
+ 左右孩子都非空
+ 左孩子为空，有孩子非空

针对三种情况分别输出
+ 左右都为空时输出(V)
+ 左为空右非空时输出(++后序遍历右孩子++ V)
+ 左右孩子都非空输出(++后序遍历左孩子++ ++后序遍历右孩子++ V)[/scode]

```
#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <unordered_map>
#include <math.h>
#define maxsize 22
using namespace std;
struct Node
{
    int left, right;
    string v;
};
int n, root, fa[maxsize];
Node tree[maxsize];

void postOrder(int index)
{
    if (tree[index].left == -1 && tree[index].right == -1)
        cout << "(" << tree[index].v << ")";
    else if (tree[index].left == -1 && tree[index].right != -1)
    {
        cout << "(" << tree[index].v;
        if (tree[index].left != -1)
            postOrder(tree[index].left);
        if (tree[index].right != -1)
            postOrder(tree[index].right);
        cout << ")";
    }
    else
    { 
        cout << "(";
        if (tree[index].left != -1)
            postOrder(tree[index].left);
        if (tree[index].right != -1)
            postOrder(tree[index].right);
        cout << tree[index].v;
        cout << ")";
    }
}
int main()
{
    std::iostream::sync_with_stdio(false);
    std::cin.tie(0);
    fill(fa + 1, fa + n + 1, 0);
    cin >> n;
    int a, b;
    for (int i = 1; i <= n; i++)
    {
        cin >> tree[i].v >> tree[i].left >> tree[i].right;
        if (tree[i].left != -1)
            fa[tree[i].left] = i;
        if (tree[i].right != -1)
            fa[tree[i].right] = i;
    }
    for (int i = 1; i <= n; i++)
        if (fa[i] == 0)
        {
            root = i;
            break;
        }
    postOrder(root);
    return 0;
}
```

![PAT-2019年秋季考试-甲级 7-3 Postfix Expression.png][3]


[1]: http://alomerry.com/usr/uploads/2020/01/3987516314.png
[2]: http://alomerry.com/usr/uploads/2020/01/921843920.png
[3]: http://alomerry.com/usr/uploads/2020/01/2316233471.png