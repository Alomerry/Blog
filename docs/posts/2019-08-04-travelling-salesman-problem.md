**7-3 Travelling Salesman Problem (25 分)**


The "travelling salesman problem" asks the following question: "Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city and returns to the origin city?" It is an NP-hard problem in combinatorial optimization, important in operations research and theoretical computer science. (Quoted from "[https://en.wikipedia.org/wiki/Travelling_salesman_problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem)".)

In this problem, you are supposed to find, from a given list of cycles, the one that is the closest to the solution of a travelling salesman problem.

#### Input Specification:
Each input file contains one test case. For each case, the first line contains 2 positive integers N (2<N≤200), the number of cities, and M, the number of edges in an undirected graph. Then M lines follow, each describes an edge in the format City1 City2 Dist, where the cities are numbered from 1 to N and the distance Dist is positive and is no more than 100. The next line gives a positive integer K which is the number of paths, followed by K lines of paths, each in the format:

n C​~1~ C~2~ ... C​~n~
​​
where n is the number of cities in the list, and C~i~'s are the cities on a path.

#### Output Specification:
For each path, print in a line `Path X: TotalDist (Description)` where `X` is the index (starting from 1) of that path, `TotalDist` its total distance (if this distance does not exist, output NA instead), and `Description` is one of the following:

+ `TS simple cycle` if it is a simple cycle that visits every city;
+ `TS cycle` if it is a cycle that visits every city, but not a simple cycle;
+ `Not a TS cycle` if it is NOT a cycle that visits every city.
  Finally print in a line `Shortest Dist(X) = TotalDist` where `X` is the index of the cycle that is the closest to the solution of a travelling salesman problem, and TotalDist is its total distance. It is guaranteed that such a solution is unique.

#### Sample Input:
```
6 10
6 2 1
3 4 1
1 5 1
2 5 1
3 1 8
4 1 6
1 6 1
6 3 1
1 2 1
4 5 1
7
7 5 1 4 3 6 2 5
7 6 1 3 4 5 2 6
6 5 1 4 3 6 2
9 6 2 1 6 3 4 5 2 6
4 1 2 5 1
7 6 1 2 5 4 3 1
7 6 3 2 5 4 1 6
```
#### Sample Output:
```
Path 1: 11 (TS simple cycle)
Path 2: 13 (TS simple cycle)
Path 3: 10 (Not a TS cycle)
Path 4: 8 (TS cycle)
Path 5: 3 (Not a TS cycle)
Path 6: 13 (Not a TS cycle)
Path 7: NA (Not a TS cycle)
Shortest Dist(4) = 8
```

>题意就是给你一个连通图，再给你一串序列，该序列是否是从一个点出发后遍历了所有点后回到原点的路径，如果是的判断是否是个一个简单的环，或者是好多个环或者不是环。

>思路
构建好图以后，沿着路径访问，计算当前路径长度，如果不通，则直接NA+非换输出。遍历完路径后，需要判断路径类型，我是这么计算的，我记录每个点在路径中出现的次数，如果没有任何一个点出现两次，说明不是回路，如果有一点出现两次则为煎蛋环否则为多环。然后输出路径，最后打印最小的路径。

```
#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <set>
#define maxsize 201
using namespace std;
int n, m, k, g[maxsize][maxsize], mini = 996996996, mini_index;
vector<int> path;
map<int, int> test;
void check(int index)
{
    int len = 0, circle = 0, circleFlag = 0;
    for (int i = 0; i < path.size() - 1; i++)
    {
        if (g[path[i]][path[i + 1]] > 0)
            len += g[path[i]][path[i + 1]];
        else
        {
            cout << "Path " << index << ": NA (Not a TS cycle)" << endl;
            return;
        }
    }
    for (map<int, int>::iterator it = test.begin(); it != test.end(); it++)
    {
        if (it->second > 1)
            circle++;
    }
    circleFlag = (path[0] == path[path.size() - 1] && test.size() == n ? circle == 1 ? 0 : 1 : -1);
    if (circleFlag == 1 || circleFlag == 0 && len < mini)
    {
        mini = len;
        mini_index = index;
    }
    cout << "Path " << index << ": " << len << " (" << (circleFlag == -1 ? "Not a TS cycle" : circleFlag == 0 ? "TS simple cycle" : "TS cycle") << ")" << endl;
}
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> n >> m;
    int a, b, c;
    for (int i = 0; i < m; i++)
    {
        cin >> a >> b >> c;
        g[a][b] = g[b][a] = c;
    }
    cin >> k;
    for (int i = 0; i < k; i++)
    {
        cin >> a;
        path.clear();
        test.clear();
        for (int j = 0; j < a; j++)
        {
            cin >> b;
            path.push_back(b);
            test[b]++;
        }
        check(i + 1);
    }
    cout << "Shortest Dist(" << mini_index << ") = " << mini << endl;

    return 0;
}
```

![PAT（甲级）2018年秋季考试 7-3 Travelling Salesman Problem.png][1]


[1]: http://alomerry.com/usr/uploads/2020/01/57835262.png