---
layout: Post
title: 问题 A 关键路径
subtitle: 
author: Alomerry Wu
date: 2019-7-21
headerImage: /img/in-post/2019-7-21/header.jpg
catalog: true
tags:
- Y2019
---

<!-- Description. -->

<!-- more -->

## 问题 A: 关键路径

### 题目描述

图的连接边上的数据表示其权值，带权值的图称作网。上图可描述为顶点集为 `(a,b,c,d,e)`，边集及其权值为(始点，终点 权值）：`a b 3`

```text
a c 2 
b d 5
c d 7
c e 4
d e 6
```

网的源点是入度为 0 的顶点，汇点是出度为 0 的顶点。网的关键路径是指从源点到汇点的所有路径中，具有最大路径长度的路径。上图中的关键路径为 `a->c->d->e`，其权值之和为关键路径的长度为 15。

本题的要求是根据给出的网的邻接矩阵求该网的关键路径及其长度。

### 输入

第一行输入一个正整数 `n(1<=n<=5)`，其代表测试数据数目，即图的数目

第二行输入`x(1<=x<=15)` 代表顶点个数， `y(1<=y<=19)` 代表边的条数

第三行给出图中的顶点集，共 `x` 个小写字母表示顶点

接下来每行给出一条边的始点和终点及其权值，用空格相隔，每行代表一条边。

### 输出

第一个输出是图的关键路径（用给出的字母表示顶点， 用括号将边括起来，顶点逗号相隔） 第二个输出是关键路径的长度 每个矩阵对应上面两个输出，两个输出在同一行用空格间隔，每个矩阵的输出占一行。

### 样例输入

```text
2
5 6
abcde
a b 3
a c 2
b d 5
c d 7
c e 4
d e 6
4 5
abcd
a b 2
a c 3
a d 4
b d 1
c d 3
```

### 样例输出

```text
(a,c) (c,d) (d,e) 15
(a,c) (c,d) 6
```

### 

- 法一 拓扑排序和逆拓扑序列
  - 通过计算点最早开始时间和点的最晚开始，一致则为关键路径
- 法二 动态规划
  - 计算每个点的最长路径，单个点的最长路径等于所有后继顶点与其对应路径长的和中的最大值，如果无后继顶点，则该点最长路径为0 dp时如果有后继顶点优化了自己的dp要记录，为了输出路径

:::: code-group
::: code-group-item 拓扑排序和逆拓扑序列
```cpp
#define MAX_SIZE 16
#include <iostream>
#include <algorithm>
#include <map>
#include <string>
#include <vector>
#include <stack>
#include <queue>
using namespace std;
const int INF = 0x3fffffff;
stack<int> s;
bool hasChar[MAX_SIZE] = {false};
map<char, char> path;
vector<int> fa;
int n, x, y, gra[MAX_SIZE][MAX_SIZE], indeg[MAX_SIZE] = {0}, ve[MAX_SIZE], vl[MAX_SIZE], maxi;
bool topologicalSort()
{
    queue<int> q;
    while (!s.empty())
        s.pop();
    fill(ve, ve + MAX_SIZE, 0);
    for (int i = 0; i < MAX_SIZE; i++)
    {
        if (hasChar[i] && indeg[i] == 0)
        {
            fa.push_back(i);
            q.push(i);
        }
    }
    int number = 0, u;
    while (!q.empty())
    {
        u = q.front();
        q.pop();
        for (int i = 0; i < MAX_SIZE; i++)
        {
            if (hasChar[i] && gra[u][i] != INF)
            {
                indeg[i]--;
                if (indeg[i] == 0)
                    q.push(i);
                if (ve[u] + gra[u][i] > ve[i])
                    ve[i] = ve[u] + gra[u][i];
            }
        }
        number++;
        s.push(u);
    }
    fill(vl, vl + MAX_SIZE, ve[u]);
    maxi = ve[u];
    if (number == n)
        return true;
    return false;
}
void criticalPath()
{
    path.clear();
    while (!s.empty())
    {
        int u = s.top();
        s.pop();
        for (int i = 0; i < MAX_SIZE; i++)
            if (gra[i][u] != INF && hasChar[i] && (vl[i] > vl[u] - gra[i][u]))
                vl[i] = vl[u] - gra[i][u];
    }
 
    for (int i = 0; i < MAX_SIZE; i++)
    {
        for (int j = 0; j < MAX_SIZE; j++)
        {
            if (gra[i][j] != INF)
            {
                int e = ve[i], l = vl[j] - gra[i][j];
                if (e == l)
                {
                    char a = 'a' + i, b = 'a' + j;
                    path[a] = b;
                }
            }
        }
    }
    char start;
    for (int i = 0; i < fa.size(); i++)
    {
        start = 'a' + fa[i];
        if (path.find(start) != path.end())
            break;
    }
    char tmp;
    while (true)
    {
        if (path.find(start) != path.end())
        {
            tmp = path[start];
            cout << "(" << start << "," << tmp << ") ";
            start = tmp;
        }
        else
            break;
    }
    cout << maxi << endl;
}
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> n;
    char ta, tb;
    for (int i = 0; i < n; i++)
    {
        string a;
        int len;
        fill(gra[0], gra[0] + 256, INF);
        fill(hasChar, hasChar + MAX_SIZE, false);
        fill(indeg, indeg + MAX_SIZE, false);
        cin >> x >> y >> a;
        for (int j = 0; j < y; j++)
        {
            cin >> ta >> tb >> len;
            hasChar[ta - 'a'] = true;
            hasChar[tb - 'a'] = true;
            gra[ta - 'a'][tb - 'a'] = len;
            indeg[tb - 'a']++;
        }
 
        topologicalSort();
        criticalPath();
    }
    return 0;
}
 
/*
1
5 5
abcde
a b 5
a c 6
b d 7
c d 11
e c 10
 */
/**************************************************************
    Problem: 23132
    User: morizunzhu
    Language: C++
    Result: 正确
    Time:0 ms
    Memory:2184 kb
****************************************************************/
```
:::
::: code-group-item 动态规划
```cpp
#include <iostream>
#include <algorithm>
#include <string>
#define MAX_SIZE 16
#define INF 0x3ffffff
using namespace std;
 
int gra[MAX_SIZE][MAX_SIZE], dp[MAX_SIZE], son[MAX_SIZE];
bool hasChar[MAX_SIZE];
 
int DP(int i)
{
    if (dp[i] > 0)
        return dp[i];
    for (int j = 0; j < MAX_SIZE; j++)
    {
        if (gra[i][j] != INF && DP(j) + gra[i][j] > dp[i])
        {
            dp[i] = DP(j) + gra[i][j];
            son[i] = j;
        }
    }
    return dp[i];
}
 
void printPath(int i)
{
    char a,b;
    while (son[i] != -1)
    {
        a = 'a'+i,b= 'a'+son[i];
        cout << "(" <<a << "," <<b << ") ";
        i = son[i];
    }
}
int main()
{
    int n, x, y, len;
    string tmp;
    char a, b;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> x >> y >> tmp;
        fill(dp, dp + MAX_SIZE, 0);
        fill(gra[0], gra[0] + MAX_SIZE * MAX_SIZE, INF);
        fill(son, son + MAX_SIZE, -1);
        for (int j = 0; j < y; j++)
        {
            cin >> a >> b >> len;
            gra[a - 'a'][b - 'a'] = len;
        }
        for (int j = 0; j < MAX_SIZE; j++)
        {
            DP(j);
        }
        int maxi = *max_element(dp, dp + MAX_SIZE), j = 0;
        while (j < MAX_SIZE)
        {
            if (dp[j] == maxi)
                break;
            j++;
        }
        printPath(j);
        cout << maxi << endl;
    }
 
    return 0;
}
 
/*
1
5 5
abcde
a b 5
a c 6
b d 7
c d 11
e c 10
 */
/**************************************************************
    Problem: 23132
    User: morizunzhu
    Language: C++
    Result: 正确
    Time:0 ms
    Memory:2020 kb
****************************************************************/
```
:::
::::
