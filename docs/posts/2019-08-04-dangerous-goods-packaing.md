**7-2 Dangerous Goods Packaging (25 分)**


When shipping goods with containers, we have to be careful not to pack some incompatible goods into the same container, or we might get ourselves in serious trouble. For example, oxidizing agent （氧化剂） must not be packed with flammable liquid （易燃液体）, or it can cause explosion.

Now you are given a long list of incompatible goods, and several lists of goods to be shipped. You are supposed to tell if all the goods in a list can be packed into the same container.

#### Input Specification:
Each input file contains one test case. For each case, the first line gives two positive integers: N (≤10^4^), the number of pairs of incompatible goods, and M (≤100), the number of lists of goods to be shipped.

Then two blocks follow. The first block contains N pairs of incompatible goods, each pair occupies a line; and the second one contains M lists of goods to be shipped, each list occupies a line in the following format:

`K G[1] G[2] ... G[K]`
where `K` (≤1,000) is the number of goods and `G[i]`'s are the IDs of the goods. To make it simple, each good is represented by a 5-digit ID number. All the numbers in a line are separated by spaces.

#### Output Specification:
For each shipping list, print in a line Yes if there are no incompatible goods in the list, or No if not.

#### Sample Input:
```
6 3
20001 20002
20003 20004
20005 20006
20003 20001
20005 20004
20004 20006
4 00001 20004 00002 20003
5 98823 20002 20003 20006 10010
3 12345 67890 23333
```
#### Sample Output:
```
No
Yes
Yes
```

>这题我还有点印象，好像去年现场就是秒了的，去年就是狼人杀和最后一天卡了。。而且我还是第一次用devC++当时，debug都不行，弹出来缺系统文件。。我愣是傻兮兮用cout输出。。巨费时。

>思路
这题也挺直白的，给你不能混合的列表。再给你一串序列判断是否能混合。
我是先用map存取每一个元素不能混合的列表。然后将序列的每个元素，如果当前元素存在在map中，说明是有可能无法与后面的元素混合。那么我这个元素在map中对应不能混合物集合set，如果后面元素和set中的某个元素一致，说明混合失败。

```
#include <iostream>
#include <map>
#include <string>
#include <vector>
#include <set>
#define maxsize 10001
using namespace std;
int n, m;
map<string, set<string>> g;
vector<string> now;
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> n >> m;
    string ta, tb;
    int a;
    for (int i = 0; i < n; i++)
    {
        cin >> ta >> tb;
        g[ta].insert(tb);
        g[tb].insert(ta);
    }
    for (int i = 0; i < m; i++)
    {
        cin >> a;
        now.clear();
        for (int j = 0; j < a; j++)
        {
            cin >> ta;
            now.push_back(ta);
        }
        bool flag = true;
        for (int j = 0; j < a && flag; j++)
        {
            if (g.find(now[j]) == g.end())
                continue;
            map<string, set<string>>::iterator it = g.find(now[j]);

            for (set<string>::iterator si = it->second.begin(); si != it->second.end() && flag; si++)
            {
                for (int z = 0; z < a && flag; z++)
                    if (now[z] == *si)
                        flag = false;
            }
        }
        if (flag)
            cout << "Yes" << endl;
        else
            cout << "No" << endl;
    }

    return 0;
}
```
![PAT（甲级）2018年秋季考试  7-2 Dangerous Goods Packaging.png][1]


[1]: http://alomerry.com/usr/uploads/2020/01/179833253.png