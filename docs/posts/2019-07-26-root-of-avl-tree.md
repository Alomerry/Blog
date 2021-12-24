---
layout: Post
title: 1066 Root of AVL Tree
subtitle: 
author: Alomerry Wu
date: 2019-07-26
headerImage: /img/in-post/2019-07-26/header.jpg
catalog: true
tags:
- Y2019
- PAT-A
---

<!-- Description. -->

<!-- more -->

## 1066 Root of AVL Tree

An AVL tree is a self-balancing binary search tree. In an AVL tree, the heights of the two child subtrees of any node
differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property.
Figures 1-4 illustrate the rotation rules.

|![AVL 1.png](/img/in-post/2019-07-26/root-of-avl-tree-1.png)|![AVL 2.png](/img/in-post/2019-07-26/root-of-avl-tree-2.png)|
|-----|-----|
|![AVL 3.png](/img/in-post/2019-07-26/root-of-avl-tree-3.png)|![AVL 4.png](/img/in-post/2019-07-26/root-of-avl-tree-4.png)|

Now given a sequence of insertions, you are supposed to tell the root of the resulting AVL tree.

#### Input Specification:

Each input file contains one test case. For each case, the first line contains a positive integer N (≤20) which is the
total number of keys to be inserted. Then N distinct integer keys are given in the next line. All the numbers in a line
are separated by a space.

#### Output Specification:

For each test case, print the root of the resulting AVL tree in one line.

#### Sample Input 1:

```text
5
88 70 61 96 120
```

#### Sample Output 1:

```text
70
```

#### Sample Input 2:

```text
7
88 70 61 96 120 90 65
```

#### Sample Output 2:

```text
88
```

### Result

一个简单的平衡二叉树的题，基本就是左旋右旋获取高度计算平衡因子一套模板就出来了，写的不熟练一开始左旋右旋后忘记更新树高了...

```cpp
#include <iostream>
#include <math.h>
#define max_size 21
using namespace std;
int n, list[max_size];

struct node
{
    int v, height;
    node *left, *right;
    node()
    {
        v = 0;
        height = 1;
    }
};
node *avl;
int getHeight(node *root)
{
    return root == NULL ? 0 : root->height;
}
void updateHeight(node *root)
{
    root->height = max(getHeight(root->right), getHeight(root->left)) + 1;
}
int getBalanceFactor(node *root)
{
    return getHeight(root->left) - getHeight(root->right);
}

node *newNode(int val)
{
    node *root = new node;
    root->left = root->right = NULL;
    root->v = val;
    root->height = 1;
    return root;
}
void R(node *&root)
{
    node *tmp = root->left;
    root->left = tmp->right;
    tmp->right = root;
    updateHeight(root);
    updateHeight(tmp);
    root = tmp;
}
void L(node *&root)
{
    node *tmp = root->right;
    root->right = tmp->left;
    tmp->left = root;
    updateHeight(root);
    updateHeight(tmp);
    root = tmp;
}
void insert(node *&root, int v)
{
    if (root == NULL)
    {
        root = newNode(v);
        return;
    }
    if (root->v > v)
    {
        insert(root->left, v);
        updateHeight(root);
        if (getBalanceFactor(root) == 2)
        {
            if (getBalanceFactor(root->left) == 1)
            {
                R(root);
            }
            else if (getBalanceFactor(root->left) == -1)
            {
                L(root->left);
                R(root);
            }
        }
    }
    else
    {
        insert(root->right, v);
        updateHeight(root);
        if (getBalanceFactor(root) == -2)
        {
            if (getBalanceFactor(root->right) == 1)
            {
                R(root->right);
                L(root);
            }
            else if (getBalanceFactor(root->right) == -1)
            {
                L(root);
            }
        }
    }
}

int main()
{
    cin >> n;
    avl = NULL;
    for (int i = 0; i < n; i++)
    {
        cin >> list[i];
        insert(avl, list[i]);
    }
    cout << avl->v << endl;
    return 0;
}
```
