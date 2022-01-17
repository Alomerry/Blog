**C Vertex Cover (25 common.points)**


A vertex cover of a graph is a set of vertices such that each edge of the graph is incident to at least one vertex of the set. Now given a graph with several vertex sets, you are supposed to tell if each of them is a vertex cover or not.

#### Input Specification:
Each input file contains one test case. For each case, the first line gives two positive integers N and M (both no more than 10^4^), being the total numbers of vertices and the edges, respectively. Then M lines follow, each describes an edge by giving the indices (from 0 to N−1) of the two ends of the edge.

After the graph, a positive integer K (≤ 100) is given, which is the number of queries. Then K lines of queries follow, each in the format:

`Nv v[1] v[2] ⋯ v[Nv]`

where N~v~ is the number of vertices in the set, and v[i]'s are the indices of the vertices.

#### Output Specification:
For each query, print in a line `Yes` if the set is a vertex cover, or `No` if not.

#### Sample Input:
```
10 11
8 7
6 8
4 5
8 4
8 1
1 2
1 4
9 8
9 1
1 0
2 4
5
4 0 3 8 4
6 6 1 7 5 4 9
3 1 8 4
2 2 8
7 9 8 7 6 5 4 2
```
#### Sample Output:
```
No
Yes
Yes
No
No
```

i> 题意
给你一张图，判断所给的点是否能覆盖所有边

i> 思路
用map记录每个点覆盖的边，然后读取点集，判断该点集里的点能否覆盖所有边即可

```
#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#define maxsize 10000
using namespace std;
int n, m, k;
bool cover[maxsize];
unordered_map<int, vector<int>> matrx;
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> n >> m;
    int a, b;
    for (int i = 0; i < m; i++)
    {
        cin >> a >> b;
        matrx[a].push_back(i);
        matrx[b].push_back(i);
    }
    cin >> k;
    for (int i = 0; i < k; i++)
    {
        fill(cover, cover + m, false);
        cin >> a;
        for (int j = 0; j < a; j++)
        {
            cin >> b;
            for (int z = 0; z < matrx[b].size(); z++)
                cover[matrx[b][z]] = true;
        }
        for (b = 0; b < m; b++)
        {
            if (!cover[b])
            {
                cout << "No" << endl;
                break;
            }
        }
        if (b == m)
            cout << "Yes" << endl;
    }
    return 0;
}
```

![PAT（甲级）2017年秋季考试 C Vertex Cover.png][1]


[1]: http://alomerry.com/usr/uploads/2020/01/4207666703.png