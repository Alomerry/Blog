---
layout: Post
title: 有向无环图的拓扑排序
subtitle: 
author: Alomerry Wu
date: 2019-07-14
headerImage: /img/in-post/2019-07-14/header.jpg
catalog: true
tags:
- Y2019
---

<!-- Description. -->

<!-- more -->

## 有向无环图的拓扑排序

### 题目描述

在本题中，读入一个有向图的邻接矩阵（即数组表示），建立有向图并按照以上描述中的算法判断此图是否有回路，如果没有回路则输出拓扑有序的顶点序列。

### 输入

输入的第一行包含一个正整数 n，表示图中共有 n 个顶点。其中 n 不超过 50。
以后的n行中每行有 n 个用空格隔开的整数 0 或 1，对于第 i 行的第 j 个整数，如果为 1，则表示第 i 个顶点有指向第 j 个顶点的有向边，0 表示没有 i 指向 j 的有向边。当 i 和 j 相等的时候，保证对应的整数为 0。

### 输出

如果读入的有向图含有回路，请输出 `“ERROR”`，不包括引号。 如果读入的有向图不含有回路，请按照题目描述中的算法依次输出图的拓扑有序序列，每个整数后输出一个空格。 请注意行尾输出换行。

### 样例输入

```
4
0 1 0 0
0 0 1 0
0 0 0 0
0 0 1 0
```

### 例输出

```
3 0 1 2 
```

### Result

简单的拓扑排序

```cpp
#define MAX_SIZE  51
#include <iostream>
#include <algorithm>
#include <set>
#include <vector>
#include <stack>
const int INF = 0x3fffffff;
using namespace std;

int gra[MAX_SIZE][MAX_SIZE];
int inDegree[MAX_SIZE] = {0};
vector<int> topo;
bool topologicalSort(int n){

	stack<int> q;
	for(int i =0;i <n;i++){
		if(inDegree[i] == 0){
			q.push(i);
		}
	}

	while(!q.empty()){
		int u = q.top();
		q.pop();
		for(int i = 0;i<n;i++){
			if(gra[u][i] >0){
				gra[u][i] = 0;
				inDegree[i]--;
				if(inDegree[i] == 0){
					q.push(i);
				}
			}
		}
		topo.push_back(u);
	}
	if(topo.size()  == n) return true;		
	return false;
}
int main()
{
	std::ios::sync_with_stdio(false);
	std::cin.tie(0);

	int n ;
	cin>>n;
	for(int i = 0 ;i<n;i++){
		for(int j = 0 ;j<n;j++){
			cin>>gra[i][j];
			if(gra[i][j]>0){
				inDegree[j]++;
			}
		}
	}
	if(topologicalSort(n)){
		for (int i = 0; i < n; i++)
		{
			cout << topo[i] << " ";
		}
		cout << endl;
	}else{
		cout<<"ERROR";
	}
	return 0;
}
```

