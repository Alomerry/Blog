---
layout: Post
title: 问题 A 矩形嵌套
subtitle: 
author: Alomerry Wu
date: 2019-07-21
headerImage: /img/in-post/2019-07-21/header.jpg
catalog: true
tags:
- Y2019
---

<!-- Description. -->

<!-- more -->

## 问题 A: 矩形嵌套

### 题目描述

有n个矩形，每个矩形可以用a,b来描述，表示长和宽。矩形X(a,b)可以嵌套在矩形Y(c,d)中当且仅当a<c,b<d或者b<c,a<
d（相当于旋转X90度）。例如（1,5）可以嵌套在（6,2）内，但不能嵌套在（3,4）中。你的任务是选出尽可能多的矩形排成一行，使得除最后一个外，每一个矩形都可以嵌套在下一个矩形内。

### 输入

第一行是一个正正数`N`(0<N<10)，表示测试数据组数， 每组测试数据的第一行是一个正正数`n`，表示该组测试数据中含有矩形的个数(n<=1000)
随后的n行，每行有两个数`a`,`b`(0<a,b<100)，表示矩形的长和宽

### 输出

每组测试数据都输出一个数，表示最多符合条件的矩形数目，每组输出占一行

### 样例输入

```text
1
10
1 2
2 4
5 8
6 10
7 9
3 1
5 8
12 10
9 7
2 2
```

### 样例输出

```text
5
```

### Result

- 法一 动态规划
  - 把矩形当成点，边权为 1，计算互相是否可嵌套以形成邻接矩阵。计算每个点的最长路径，dp 数组里最长的最长路径即为所求
- 法二 拓扑排序法
  - 计算最早开始时间，即本题中的最多前置长方形个数


:::: code-group
::: code-group-item 动态规划
```cpp
#include <iostream>
#include <algorithm>
#define MAX_SIZE 1000
#define INF 0x3ffffff
using namespace std;
struct rect
{
    int a, b;
};
rect rects[MAX_SIZE];
int gra[MAX_SIZE][MAX_SIZE], dp[MAX_SIZE], n, m;
void caculate()
{
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (j == i)
                continue;
            if ((rects[i].a > rects[j].a && rects[i].b > rects[j].b) ||
                (rects[i].b > rects[j].a && rects[i].a > rects[j].b))
                gra[i][j] = 1;
        }
    }
}
int DP(int i)
{
    if (dp[i] > 0)
        return dp[i];
    for (int j = 0; j < m; j++)
    {
        if (gra[i][j] == 1 && DP(j) + gra[i][j] > dp[i])
            dp[i] = DP(j) + gra[i][j];
    }
    return dp[i];
}
int main()
{
 
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> m;
        fill(gra[0], gra[0] + MAX_SIZE * MAX_SIZE, INF);
        fill(dp, dp + MAX_SIZE, 0);
        for (int j = 0; j < m; j++)
        {
            cin >> rects[j].a >> rects[j].b;
        }
        caculate();
        for (int j = 0; j < m; j++)
        {
            DP(j);
        }
 
        cout << *max_element(dp, dp + m)+1 << endl;
    }
 
    return 0;
}
/**************************************************************
    Problem: 21773
    User: morizunzhu
    Language: C++
    Result: 正确
    Time:4 ms
    Memory:5936 kb
****************************************************************/
```
:::
::: code-group-item 拓扑排序法
```cpp
#include <iostream>
#include <algorithm>
#include <queue>
#define MAX_SIZE 1000
#define INF 0x3ffffff
using namespace std;
struct rect
{
    int a, b;
};
rect rects[MAX_SIZE];
int gra[MAX_SIZE][MAX_SIZE], ind[MAX_SIZE], ve[MAX_SIZE], n, m;
void caculate()
{
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < m; j++)
        {
            if (j == i)
                continue;
            if ((rects[i].a > rects[j].a && rects[i].b > rects[j].b) ||
                (rects[i].b > rects[j].a && rects[i].a > rects[j].b))
            {
                ind[j]++;
                gra[i][j] = 1;
            }
        }
    }
}
int topologicalSort()
{
    queue<int> q;
 
    for (int i = 0; i < m; i++)
        if (ind[i] == 0)
            q.push(i);
    int number = 0;
    while (!q.empty())
    {
        int u = q.front();
        q.pop();
        for (int i = 0; i < m; i++)
        {
            if (gra[u][i] == 1)
            {
                ind[i]--;
                if (ind[i] == 0)
                    q.push(i);
                if (ve[u] + gra[u][i] > ve[i])
                    ve[i] = ve[u] + gra[u][i];
            }
        }
        number++;
    }
    return number == m;
}
int main()
{
 
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> m;
        fill(gra[0], gra[0] + MAX_SIZE * MAX_SIZE, INF);
        fill(ind, ind + MAX_SIZE, 0);
          fill(ve, ve + m, 0);
        for (int j = 0; j < m; j++)
        {
            cin >> rects[j].a >> rects[j].b;
        }
        caculate();
        topologicalSort();
        cout << *max_element(ve, ve + m) + 1 << endl;
    }
 
    return 0;
}
/**************************************************************
    Problem: 21773
    User: morizunzhu
    Language: C++
    Result: 正确
    Time:4 ms
    Memory:5940 kb
****************************************************************/
```
:::
::::
