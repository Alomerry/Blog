**7-2 Anniversary (25 分)**


Zhejiang University is about to celebrate her 122th anniversary in 2019. To prepare for the celebration, the alumni association （校友会） has gathered the ID's of all her alumni. Now your job is to write a program to count the number of alumni among all the people who come to the celebration.

#### Input Specification:
Each input file contains one test case. For each case, the first part is about the information of all the alumni. Given in the first line is a positive integer N (≤10^5^). Then N lines follow, each contains an ID number of an alumnus. An ID number is a string of 18 digits or the letter `X`. It is guaranteed that all the ID's are distinct.

The next part gives the information of all the people who come to the celebration. Again given in the first line is a positive integer M (≤10^5^). Then M lines follow, each contains an ID number of a guest. It is guaranteed that all the ID's are distinct.

#### Output Specification:
First print in a line the number of alumni among all the people who come to the celebration. Then in the second line, print the ID of the oldest alumnus -- notice that the 7th - 14th digits of the ID gives one's birth date. If no alumnus comes, output the ID of the oldest guest instead. It is guaranteed that such an alumnus or guest is unique.

#### Sample Input:
```
5
372928196906118710
610481197806202213
440684198612150417
13072819571002001X
150702193604190912
6
530125197901260019
150702193604190912
220221196701020034
610481197806202213
440684198612150417
370205198709275042
```
#### Sample Output:
```
3
150702193604190912
```

i> 题意
给你校友序列以及到场宾客序列，你输出来宾中年龄最大的校友，若不存在校友，输出年龄最大的来宾

i> 思路
将校友序列放入map中，在读取来宾时判断该来宾是否是校友，是则放入输出数组中，不是则记录最大年龄来宾。最后判断输出vector是否空，若空输出最大年龄来宾，若非空，则按年龄排序后输出最大年龄校友即可。

```
#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
#include <unordered_map>
#include <ctype.h>
#include <math.h>
#define maxsize 100005
#define INF 0x3ffffff
using namespace std;
int n, ord = 0, tmp;
string ordguest, s;
struct node
{
    string id;
    int time;
    node(string _id, int _time) : id(_id), time(_time) {}
};
int caculateDay(string s)
{
    //372928 196906118710
    int year = stoi(s.substr(6, 4)),
        month = stoi(s.substr(10, 2)),
        day = stoi(s.substr(12, 2));
    return (2019 - year - 1) * 365 + (365 - month * 30 - day);
}
unordered_map<string, int> alumni, guest;
vector<node> out;
bool cmp(node a, node b)
{
    return a.time > b.time;
}
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> s;
        alumni.insert(make_pair(s, caculateDay(s)));
    }
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cin >> s;
        tmp = caculateDay(s);
        guest.insert(make_pair(s, tmp));
        if (tmp > ord)
        {
            ord = tmp;
            ordguest = s;
        }
        if (alumni.find(s) != alumni.end())
            out.push_back(node(s, alumni[s]));
    }
    sort(out.begin(),out.end(),cmp);
    if (out.size() != 0)
        cout << out.size() << endl
             << out[0].id;
    else
        cout << 0 << endl
             << ordguest;

    return 0;
}
```
![PAT（甲级）2019年春季考试 7-2 Anniversary .png][1]


[1]: http://alomerry.com/usr/uploads/2020/01/3467655601.png