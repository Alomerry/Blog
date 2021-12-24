---
layout: Post
title: PAT (Advanced Level) Practice 1021 Deepest Root
subtitle: 
author: Alomerry Wu
date: 2019-07-09
headerImage: /img/in-post/2019-07-09/header.jpg
catalog: true
tags:
- Y2019
---

<!-- Description. -->

<!-- more -->

## PAT (Advanced Level) Practice 1021 Deepest Root

A graph which is connected and acyclic can be considered a tree. The height of the tree depends on the selected root. Now you are supposed to find the root that results in a highest tree. Such a root is called the *deepest root*.
### Input Specification:
Each input file contains one test case. For each case, the first line contains a positive integer _*N*_ (≤10
4) which is the number of nodes, and hence the nodes are numbered from 1 to _*N*_. Then _*N*_−1 lines follow, each describes an edge by given the two adjacent nodes' numbers.

### Output Specification:
For each test case, print each of the deepest roots in a line. If such a root is not unique, print them in increasing order of their numbers. In case that the given graph is not a tree, print `Error: K components` where `K` is the number of connected components in the graph.
### Sample Input 1:
```text
5
1 2
1 3
1 4
2 5
```
### Sample Output 1:
```
3
4
5
```
### Sample Input 2:
```
5
1 3
1 4
2 5
3 4
```
### Sample Output 2:
```
Error: 2 components
```

### Result

这题其实思路蛮简单的，就是遍历图，如果不连通输出连通子图数量，连通的话计算出可以成为最大深度的根节点的节点，按升序排列。我本来实现用 BFS 和 DFS 都做一下结果 BFS 好像超时了，遍历一次就超时，不知道为啥，后来用 dfs 没问题

:::: code-group
::: code-group-item 超时代码
```cpp
/*
 * 错误代码（大佬指点指点）
 * 测试点3超时
 */

#include <iostream>
#include <vector>
#include <stack>
#include <set>
#include <math.h>
using namespace std;
struct Node
{
	int con, depth;
};
int n, maxi = 0, vis[10001] = {false}, part = 1;
vector<Node> g[10001];
set<int> result;

int bfs(int i)
{
	stack<Node> q;
	Node tmp;
	tmp.con = i;
	tmp.depth = 0;
	q.push(tmp);
	part = 0;
	fill(vis, vis + 10001, false);
	vis[tmp.con] = true;
	int components = 1;
	while (true)
	{
		while (!q.empty())
		{
			Node t = q.top();
			if (maxi < t.depth)
			{
				maxi = t.depth;
				result.clear();
				result.insert(t.con);
			}
			else if (maxi == t.depth)
			{
				result.insert(t.con);
			}
			q.pop();
			for (int j = 0; j < g[t.con].size(); j++)
			{
				if (vis[g[t.con][j].con] == false)
				{
					vis[g[t.con][j].con] = true;
					++components;
					g[t.con][j].depth = t.depth + 1;
					q.push(g[t.con][j]);
				}
			}
		}
		++part;
		if (components < n)
		{
			for (int j = 1; j <= n; j++)
			{
				if (vis[j] == false)
				{
					vis[j] = true;
					++components;
					tmp.con = j;
					tmp.depth = 0;
					q.push(tmp);
					break;
				}
			}
		}
		else
		{
			return part;
		}
	}
	return part;
}

int main()
{
	cin >> n;
	Node tmpa, tmpb;
	for (int i = 1; i < n; i++)
	{
		cin >> tmpa.con >> tmpb.con;
		g[tmpa.con].push_back(tmpb);
		g[tmpb.con].push_back(tmpa);
	}

	for (int i = 1; i <= n && part == 1; i++)
	{
		part = bfs(i);
	}
	if (part != 1)
	{
		cout << "Error: " << part << " components" << endl;
	}
	else
	{
		for (set<int>::iterator it = result.begin(); it != result.end(); it++)
		{
			cout << *(it) << endl;
		}
	}
	return 0;
}
```
:::
::: code-group-item dfs
```cpp
#include <iostream>
#include <algorithm>
#include <set>
#include <vector>
#define MAX_SIZE 10005
using namespace std;

struct Node
{
	int val;
	int deepth;
	Node()
	{
		deepth = 0;
	}
};
int n, deepth[MAX_SIZE], maxi = 0;
vector<int> maps[MAX_SIZE];
set<int> res, temp;
bool vis[MAX_SIZE] = {false};

void dfs(int i)
{
	vis[i] = true;
	for (int j = 0; j < maps[i].size(); j++)
	{
		int item = maps[i][j];
		if (vis[item] == false)
		{
			deepth[item] = deepth[i] + 1;
			maxi = max(maxi, deepth[item]);
			dfs(item);
		}
	}
}
int check()
{
	int k = 0;
	for (int j = 1; j <= n; j++)
	{
		if (vis[j] == false)
		{
			k++;
			dfs(j);
		}
	}

	if (k > 1)
		return k;
	return 0;
}
int main()
{
	std::ios::sync_with_stdio(false);
	std::cin.tie(0);

	int i, j, a, b;
	Node tem;
	cin >> n;
	for (i = 1; i < n; i++)
	{
		cin >> a >> b;
		maps[a].push_back(b);
		maps[b].push_back(a);
	}

	deepth[1] = 1;
	a = check();
	if (a != 0)
	{
		cout << "Error: " << a << " components" << endl;
		return 0;
	}

	for (i = 1; i <= n; i++)
	{
		if (deepth[i] == maxi)
		{
			temp.insert(i);
		}
	}

	fill(vis, vis + MAX_SIZE, false);
	fill(deepth, deepth + MAX_SIZE, 0);

	a = *(temp.begin());
	deepth[a] = 1;
	dfs(a);

	for (i = 1; i <= n; i++)
	{
		if (deepth[i] == maxi)
		{
			res.insert(i);
		}
	}
	for (set<int>::iterator it = temp.begin(); it != temp.end(); it++)
	{
		res.insert(*it);
	}

	for (set<int>::iterator it = res.begin(); it != res.end(); it++)
	{
		cout << *it << endl;
	}
	return 0;
}
```
:::
::::
