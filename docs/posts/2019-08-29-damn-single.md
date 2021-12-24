**1121 Damn Single (25 分)**


"Damn Single (单身狗)" is the Chinese nickname for someone who is being single. You are supposed to find those who are alone in a big party, so they can be taken care of.

#### Input Specification:
Each input file contains one test case. For each case, the first line gives a positive integer N (≤ 50,000), the total number of couples. Then N lines of the couples follow, each gives a couple of ID's which are 5-digit numbers (i.e. from 00000 to 99999). After the list of couples, there is a positive integer M (≤ 10,000) followed by M ID's of the party guests. The numbers are separated by spaces. It is guaranteed that nobody is having bigamous marriage (重婚) or dangling with more than one companion.

#### Output Specification:
First print in a line the total number of lonely guests. Then in the next line, print their ID's in increasing order. The numbers must be separated by exactly 1 space, and there must be no extra space at the end of the line.

#### Sample Input:
```
3
11111 22222
33333 44444
55555 66666
7
55555 44444 10000 88888 22222 11111 23333
```
Sample Output:
```
5
10000 23333 44444 55555 88888
```

i> 题意
给你配偶列表，和派对人员名单，判断哪些不是结伴来的

i> 思路
将配偶放入map中，客人放入set中，遍历set，判断每个来宾是否已有配偶，是的话其配偶是否到场，都满足则不输出，否则都放入输出vector

```
#include <iostream>
#include <vector>
#include <set>
#include <string>
#include <unordered_map>
#define maxsize 205
using namespace std;
int n, m;
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> n;
    string a, b;
    unordered_map<string, string> coupe;
    set<string> visitor, out;
    for (int i = 0; i < n; i++)
    {
        cin >> a >> b;
        coupe[a] = b;
        coupe[b] = a;
    }
    cin >> m;
    for (int i = 0; i < m; i++)
    {
        cin >> a;
        visitor.insert(a);
    }
    for (set<string>::iterator it = visitor.begin(); it != visitor.end(); it++)
    {
        if (coupe.find(*it) != coupe.end())
        {
            if (visitor.find(coupe[*it]) != visitor.end())
            {
                continue;
            }
        }
        out.insert(*it);
    }
    cout << out.size() << endl;
    for (set<string>::iterator it = out.begin(); it != out.end(); it++)
    {
        if (it != out.begin())
            cout << " ";
        cout << *it;
    }
    return 0;
}
```
![PAT (Advanced Level) Practice 1121 Damn Single.png][1]


[1]: http://alomerry.com/usr/uploads/2020/01/3716796536.png