**7-3 Telefraud Detection (25 分)**


Telefraud（电信诈骗） remains a common and persistent problem in our society. In some cases, unsuspecting victims lose their entire life savings. To stop this crime, you are supposed to write a program to detect those suspects from a huge amount of phone call records.

A person must be detected as a suspect if he/she makes more than K short phone calls to different people everyday, but no more than 20% of these people would call back. And more, if two suspects are calling each other, we say they might belong to the same gang. A makes a short phone call to B means that the total duration of the calls from A to B is no more than 5 minutes.

#### Input Specification:
Each input file contains one test case. For each case, the first line gives 3 positive integers K (≤500, the threshold（阈值） of the amount of short phone calls), N (≤10<sup>3</sup> , the number of different phone numbers), and M (≤10<sup>​5</sup> , the number of phone call records). Then M lines of one day's records are given, each in the format:

`caller receiver duration`
where `caller` and `receiver` are numbered from 1 to N, and `duration` is no more than 1440 minutes in a day.

#### Output Specification:
Print in each line all the detected suspects in a gang, in ascending order of their numbers. The gangs are printed in ascending order of their first members. The numbers in a line must be separated by exactly 1 space, and there must be no extra space at the beginning or the end of the line.

If no one is detected, output None instead.

#### Sample Input 1:
```
5 15 31
1 4 2
1 5 2
1 5 4
1 7 5
1 8 3
1 9 1
1 6 5
1 15 2
1 15 5
3 2 2
3 5 15
3 13 1
3 12 1
3 14 1
3 10 2
3 11 5
5 2 1
5 3 10
5 1 1
5 7 2
5 6 1
5 13 4
5 15 1
11 10 5
12 14 1
6 1 1
6 9 2
6 10 5
6 11 2
6 12 1
6 13 1
```
#### Sample Output 1:
```
3 5
6
```
Note: In sample 1, although `1` had 9 records, but there were 7 distinct receivers, among which `5` and `15` both had conversations lasted more than 5 minutes in total. Hence `1` had made 5 short phone calls and didn't exceed the threshold 5, and therefore is not a suspect.

#### Sample Input 2:
```
5 7 8
1 2 1
1 3 1
1 4 1
1 5 1
1 6 1
1 7 1
2 1 1
3 1 1
```
#### Sample Output 2:
```
None
```

i> 题意
给出阈值K，手机号数N，通话记录条数M。当某个人有超过K次通话记录不超过五分钟，即短通话，并且没有超过20%的回电，则该人为嫌疑犯，当两个嫌疑犯之间互相通过电话，则记为犯罪团伙。请找出嫌疑犯或犯罪团伙

i> 思路
题目是有向图，用邻接矩阵记录时间，遍历每个手机号，读取拨出的短通话和总通话，读取拨入的总通话判断是否有嫌疑，有则加入set，遍历完成后做一次深度遍历，属于同意连通块的嫌疑犯放入map<int,set>中，最后一次输出每个人犯罪团伙，不过有个点一直错的，不知道为啥，有知道的大佬指点一下吗...

```
#include <iostream>
#include <algorithm>
#include <set>
#include <map>
#include <math.h>
#define maxsize 1003
#define INF 999999999
using namespace std;
int k, n, m, duration[maxsize][maxsize] = {0},
             shortNum[maxsize] = {0}, totalNum[maxsize] = {0};
set<int> out, tmpout;
map<int, set<int>> result;
bool falg = true;
void dfs(int v)
{
    tmpout.insert(v);
    out.erase(v);
    for (int i = 1; i <= n; i++)
    {
        if (duration[v][i] > 0 && duration[i][v] > 0 && out.find(i) != out.end())
        {
            tmpout.insert(i);
            out.erase(i);
        }
    }
}
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> k >> n >> m;
    int a, b, c;
    for (int i = 0; i < m; i++)
    {
        cin >> a >> b >> c;
        duration[a][b] += c;
    }
    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n; j++)
        {
            if (duration[i][j] > 0)
                totalNum[i]++;
            if (duration[i][j] <= 5 && duration[i][j] > 0)
                shortNum[i]++;
        }
        int reply = 0;
        for (int j = 1; j <= n; j++)
            if (duration[j][i] > 0 && duration[i][j] > 0 && duration[j][i] <= 5 && duration[i][j] <= 5)
                reply++;
        // cout << "index:" << i << ",reply:" << reply << ",k:" << shortNum[i] << ",20%:" << (totalNum[i] * 0.2) << endl;
        if (shortNum[i] > k && (reply * 1.0) <= (totalNum[i] * 0.2))
            out.insert(i);
    }
    if (out.size() == 0)
    {
        cout << "None";
        return 0;
    }
    while (out.size() > 0)
    {
        dfs(*(out.begin()));
        result.insert(make_pair(*(tmpout.begin()), tmpout));
        tmpout.clear();
    }
    for (map<int, set<int>>::iterator st = result.begin(); st != result.end(); st++)
    {
        set<int>::iterator b = st->second.begin(), e = st->second.end(), i = b;
        for (; i != e; i++)
        {
            if (i != b)
                cout << " ";
            cout << *i;
        }
        cout << endl;
    }

    return 0;
}
```

![PAT（甲级）2019年春季考试  7-3 Telefraud Detection .png][1]


[1]: http://alomerry.com/usr/uploads/2020/01/1770240891.png